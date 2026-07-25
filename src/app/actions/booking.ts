"use server";

import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { formatInTimeZone } from 'date-fns-tz';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Zoom Server-to-Server OAuth helper
async function getZoomAccessToken() {
  const accountId = process.env.ZOOM_ACCOUNT_ID;
  const clientId = process.env.ZOOM_CLIENT_ID;
  const clientSecret = process.env.ZOOM_CLIENT_SECRET;

  if (!accountId || !clientId || !clientSecret) {
    throw new Error("Zoom credentials missing in environment variables.");
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch(`https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${accountId}`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Zoom Auth Error:", errorBody);
    throw new Error("Failed to get Zoom access token.");
  }

  const data = await response.json();
  return data.access_token;
}

async function createZoomMeeting(accessToken: string, topic: string, startTime: string) {
  // Zoom expects local time format without 'Z' when timezone is specified
  const localZoomTime = formatInTimeZone(new Date(startTime), 'America/Guayaquil', "yyyy-MM-dd'T'HH:mm:ss");

  const response = await fetch("https://api.zoom.us/v2/users/me/meetings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic: topic,
      type: 2, // Scheduled meeting
      start_time: localZoomTime,
      duration: 60,
      timezone: "America/Guayaquil", // Based on your requirement
      settings: {
        host_video: true,
        participant_video: true,
        join_before_host: false,
        mute_upon_entry: true,
        waiting_room: true,
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("Zoom Meeting Creation Error:", errorBody);
    throw new Error("Failed to create Zoom meeting.");
  }

  const data = await response.json();
  return data.join_url;
}

export async function submitBooking(data: any) {
  try {
    const meetingTime = new Date(data.meeting_time);
    const now = new Date();
    const bufferMs = 30 * 60 * 1000;

    if (meetingTime.getTime() - now.getTime() < bufferMs) {
      return { success: false, error: "Bookings must be made at least 30 minutes in advance. Please select another time." };
    }
    // Use the Service Role Key to bypass RLS policies (since this is a trusted Server Action)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    
    if (!supabaseServiceKey) {
       console.error("Missing SUPABASE_SERVICE_ROLE_KEY");
       return { success: false, error: "Server misconfiguration. Missing service key." };
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Check for Double Booking using Supabase
    // We try to insert first. If it fails with unique constraint, it was double booked.
    // But we need the Zoom Link BEFORE we insert if we want it in the DB, 
    // or we insert first, get the ID, create Zoom, then update DB.
    // The safest way is Insert with null zoom_link, then create Zoom, then Update.
    // This prevents generating unnecessary Zoom meetings if the DB insertion fails.
    
    const { data: insertedData, error: insertError } = await supabase
      .from("bookings")
      .insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          question: data.question || null,
          meeting_time: data.meeting_time,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      if (insertError.code === '23505') { 
        return { success: false, error: "This exact time slot has just been booked by someone else. Please select another time." };
      }
      return { success: false, error: "Database error: " + insertError.message };
    }

    // 2. Generate Zoom Meeting
    let zoomLink = "";
    try {
      if (process.env.ZOOM_ACCOUNT_ID) {
        const zoomToken = await getZoomAccessToken();
        const meetingTopic = `Consultation: ${data.firstName} ${data.lastName} - Intra Systems`;
        zoomLink = await createZoomMeeting(zoomToken, meetingTopic, data.meeting_time);
        
        // Update DB with the Zoom link
        await supabase.from("bookings").update({ zoom_link: zoomLink }).eq("id", insertedData.id);
      } else {
        console.warn("Zoom credentials not provided, skipping Zoom meeting creation.");
        zoomLink = "pending-zoom-link";
      }
    } catch (e) {
      console.error("Zoom integration failed", e);
      return { success: false, error: "Booking saved, but Zoom link generation failed. We will email it to you manually." };
    }

    // 3. Send Immediate Confirmation Email via Nodemailer (Gmail)
    try {
      if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
        const dateStr = new Date(data.meeting_time).toLocaleString("en-GB", {
          timeZone: "America/Guayaquil", // Or the user's timezone if you pass it
          dateStyle: "full",
          timeStyle: "short",
        });

        // Send email to the client
        await transporter.sendMail({
          from: `"Intra-Systems" <${process.env.GMAIL_USER}>`,
          to: data.email,
          subject: "Your Intra-Systems Consultation is Confirmed!",
          html: `
            <h2>Hi ${data.firstName},</h2>
            <p>Thank you for booking your consultation with Intra-Systems.</p>
            <p><strong>Date & Time:</strong> ${dateStr} (Ecuador Time)</p>
            <p><strong>Zoom Link:</strong> <a href="${zoomLink}">${zoomLink}</a></p>
            <p>I look forward to discussing how we can help you achieve perfect gingival margins in under 1 minute.</p>
            <br/>
            <p>If you need to change your appointment, you can do so here:</p>
            <p>
              <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking/edit?id=${insertedData.id}">Reschedule Appointment</a> | 
              <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking/cancel?id=${insertedData.id}">Cancel Appointment</a>
            </p>
            <br/>
            <p>Best regards,</p>
            <p><strong>Kevin Easter</strong><br/>Co-Founder, Intra-Systems</p>
          `,
        });

        // Send email to the owner
        await transporter.sendMail({
          from: `"Intra-Systems System" <${process.env.GMAIL_USER}>`,
          to: process.env.GMAIL_USER, // Owner email (sends to itself as notification)
          subject: `New Booking: ${data.firstName} ${data.lastName}`,
          html: `
            <h2>New Consultation Scheduled</h2>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Question/Challenge:</strong> ${data.question || "None provided"}</p>
            <p><strong>Date & Time:</strong> ${dateStr}</p>
            <p><strong>Zoom Link:</strong> <a href="${zoomLink}">${zoomLink}</a></p>
          `,
        });
      } else {
        console.warn("Gmail credentials not provided, skipping email.");
      }
    } catch (e) {
      console.error("Email sending failed", e);
      // We don't fail the whole action if email fails, as the booking is already in the DB.
    }

    return { success: true };
  } catch (err: any) {
    console.error("Action error:", err);
    return { success: false, error: err.message || "Unknown error occurred" };
  }
}

// -----------------------------------------------------------------------------
// NEW FUNCTIONS: Availability, Cancellation, Rescheduling & Email Sequences
// -----------------------------------------------------------------------------

export async function getAvailableSlots(dateString: string) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get the start and end of the provided date in GMT-5 (Ecuador)
    const targetDate = new Date(dateString);
    const year = targetDate.getFullYear();
    const month = String(targetDate.getMonth() + 1).padStart(2, '0');
    const day = String(targetDate.getDate()).padStart(2, '0');
    
    // Create ISO string range for that specific day in GMT-5
    const startOfDayStr = `${year}-${month}-${day}T00:00:00-05:00`;
    const endOfDayStr = `${year}-${month}-${day}T23:59:59-05:00`;

    const { data, error } = await supabase
      .from("bookings")
      .select("meeting_time")
      .gte("meeting_time", startOfDayStr)
      .lte("meeting_time", endOfDayStr)
      .neq("status", "cancelled");

    if (error) throw error;

    // Return array of ISO strings that are already booked
    return data.map((b: any) => new Date(b.meeting_time).toISOString());
  } catch (err) {
    console.error("Error fetching available slots:", err);
    return [];
  }
}

export async function getBookingById(id: string) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return { success: true, booking: data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function cancelBooking(id: string) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
      .from("bookings")
      .update({ status: 'cancelled' })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    // Trigger Cancel Email Sequence
    await sendCancelSequence(data);

    return { success: true };
  } catch (err: any) {
    console.error("Cancel error:", err);
    return { success: false, error: err.message };
  }
}

export async function rescheduleBooking(id: string, newMeetingTime: string) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Verify availability first
    const { data: existingData, error: existingError } = await supabase
      .from("bookings")
      .select("*")
      .eq("meeting_time", newMeetingTime)
      .neq("status", "cancelled");
      
    if (existingData && existingData.length > 0) {
      return { success: false, error: "Time slot already booked" };
    }

    // 2. Fetch the old booking details for email and zoom
    const { data: oldBooking, error: fetchError } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError) throw fetchError;

    // 3. Create a NEW Zoom meeting (we leave the old one alone, it will just expire, or you can delete it if you store the meeting ID)
    let zoomLink = oldBooking.zoom_link;
    if (process.env.ZOOM_ACCOUNT_ID) {
      const zoomToken = await getZoomAccessToken();
      const meetingTopic = `Rescheduled Consultation: ${oldBooking.first_name} ${oldBooking.last_name} - Intra Systems`;
      zoomLink = await createZoomMeeting(zoomToken, meetingTopic, newMeetingTime);
    }

    // 4. Update the DB
    const { data, error } = await supabase
      .from("bookings")
      .update({ meeting_time: newMeetingTime, zoom_link: zoomLink, status: 'confirmed' })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    // Trigger Reschedule Email Sequence
    await sendRescheduleSequence(data);

    return { success: true };
  } catch (err: any) {
    console.error("Reschedule error:", err);
    return { success: false, error: err.message };
  }
}

// -----------------------------------------------------------------------------
// PENDING EMAIL SEQUENCES (A la espera de textos y videos del Tío Kevin)
// -----------------------------------------------------------------------------
async function sendCancelSequence(bookingData: any) {
  // TODO: Add cancellation drip sequence via Cron or immediately send cancellation email
  console.log(`[Email Sequence] Booking Cancelled for ${bookingData.email}`);
}

async function sendRescheduleSequence(bookingData: any) {
  // TODO: Add reschedule sequence via Cron or immediately send reschedule confirmation
  console.log(`[Email Sequence] Booking Rescheduled for ${bookingData.email} to ${bookingData.meeting_time}`);
}
