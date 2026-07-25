import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Initialize Supabase Client with Service Role Key to bypass RLS for background jobs
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // 1. Verify Authorization Header to ensure only Supabase pg_cron can call this
    const authHeader = req.headers.get("Authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();
    
    // --- 30-MINUTE REMINDER LOGIC ---
    // Find bookings that are exactly 30 minutes away from now
    // We add 30 minutes to now, and look for meetings in a 5-minute window
    const targetTimeStart = new Date(now.getTime() + 30 * 60000);
    const targetTimeEnd = new Date(now.getTime() + 35 * 60000);

    const { data: reminderBookings, error: reminderError } = await supabase
      .from("bookings")
      .select("*")
      .gte("meeting_time", targetTimeStart.toISOString())
      .lte("meeting_time", targetTimeEnd.toISOString())
      .eq("status", "pending");

    if (reminderError) throw reminderError;

    for (const booking of reminderBookings || []) {
      await resend.emails.send({
        from: "Kevin from Intra-Systems <info@intra-systems.com>",
        to: booking.email,
        subject: "Reminder: Our call is in 30 minutes!",
        html: `
          <p>Hi ${booking.first_name},</p>
          <p>This is a quick reminder that our consultation is starting in exactly 30 minutes.</p>
          <p>Here is your Zoom link: <a href="${booking.zoom_link}">${booking.zoom_link}</a></p>
          <p>See you soon!</p>
          <p>Kevin Easter</p>
        `,
      });
      // Optionally update DB to mark reminder sent to avoid duplicates
    }

    // --- FOLLOW-UP EMAILS LOGIC (Placeholder for the 4 sequences) ---
    // You would query bookings based on `created_at` being 1 day ago, 2 days ago, etc.
    // Ensure you only send if meeting_time is NOT today.

    return NextResponse.json({ success: true, remindersSent: reminderBookings?.length || 0 });
  } catch (error: any) {
    console.error("Cron Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
