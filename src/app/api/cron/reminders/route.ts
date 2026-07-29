import { NextResponse } from 'next/server';
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import {
  getBookedEmail2,
  getCancelledEmail2,
  getCancelledEmail3,
  getNoSaleEmail2,
  getNoSaleEmail3,
  getNoShowEmail2,
  getNoShowEmail3,
  get30MinReminderEmail
} from "@/lib/emailTemplates";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  // Verify Cron Secret if provided
  const authHeader = request.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const now = new Date();
    const in30Mins = new Date(now.getTime() + 30 * 60000);
    const in35Mins = new Date(now.getTime() + 35 * 60000);
    
    // Time threshold for 24h checks
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60000);
    // Meeting must be at least 2 hours in the future to send educational prep
    const in2Hours = new Date(now.getTime() + 2 * 60 * 60000);

    // ==========================================
    // 1. Process 30-minute Reminders (Booked)
    // ==========================================
    const { data: upcomingBookings } = await supabase
      .from('bookings')
      .select('*')
      .in('status', ['pending', 'confirmed'])
      .eq('reminder_30m_sent', false)
      .gte('meeting_time', in30Mins.toISOString())
      .lte('meeting_time', in35Mins.toISOString());

    if (upcomingBookings && upcomingBookings.length > 0) {
      for (const booking of upcomingBookings) {
        const emailData = get30MinReminderEmail(booking);

        await transporter.sendMail({
          from: `"Intra-Systems" <${process.env.GMAIL_USER}>`,
          to: booking.email,
          subject: emailData.subject,
          html: emailData.html,
        });

        await supabase
          .from('bookings')
          .update({ reminder_30m_sent: true })
          .eq('id', booking.id);
      }
    }

    // ==========================================
    // 2. Process Educational Prep Email (+24h)
    // ==========================================
    const { data: educationalBookings } = await supabase
      .from('bookings')
      .select('*')
      .in('status', ['pending', 'confirmed'])
      .eq('educational_step', 0)
      .lte('created_at', twentyFourHoursAgo.toISOString())
      .gte('meeting_time', in2Hours.toISOString());

    if (educationalBookings && educationalBookings.length > 0) {
      for (const booking of educationalBookings) {
        const emailData = getBookedEmail2(booking);
        await transporter.sendMail({
          from: `"Intra-Systems" <${process.env.GMAIL_USER}>`,
          to: booking.email,
          subject: emailData.subject,
          html: emailData.html,
        });

        await supabase
          .from('bookings')
          .update({ educational_step: 1 })
          .eq('id', booking.id);
      }
    }

    // ==========================================
    // 3. Process Cancelled Sequence Follow-ups
    // ==========================================
    const { data: cancelledBookings } = await supabase
      .from('bookings')
      .select('*')
      .eq('status', 'cancelled')
      .in('cancelled_step', [1, 2])
      .lte('last_email_sent_at', twentyFourHoursAgo.toISOString());

    if (cancelledBookings && cancelledBookings.length > 0) {
      for (const booking of cancelledBookings) {
        let emailData;
        let nextStep = booking.cancelled_step + 1;

        if (booking.cancelled_step === 1) emailData = getCancelledEmail2(booking);
        else if (booking.cancelled_step === 2) emailData = getCancelledEmail3(booking);

        if (emailData) {
          await transporter.sendMail({
            from: `"Intra-Systems" <${process.env.GMAIL_USER}>`,
            to: booking.email,
            subject: emailData.subject,
            html: emailData.html,
          });

          await supabase
            .from('bookings')
            .update({ cancelled_step: nextStep, last_email_sent_at: now.toISOString() })
            .eq('id', booking.id);
        }
      }
    }

    // ==========================================
    // 4. Process No Show Sequence Follow-ups
    // ==========================================
    const { data: noShowBookings } = await supabase
      .from('bookings')
      .select('*')
      .eq('status', 'no-show')
      .in('no_show_step', [1, 2])
      .lte('last_email_sent_at', twentyFourHoursAgo.toISOString());

    if (noShowBookings && noShowBookings.length > 0) {
      for (const booking of noShowBookings) {
        let emailData;
        let nextStep = booking.no_show_step + 1;

        if (booking.no_show_step === 1) emailData = getNoShowEmail2(booking);
        else if (booking.no_show_step === 2) emailData = getNoShowEmail3(booking);

        if (emailData) {
          await transporter.sendMail({
            from: `"Intra-Systems" <${process.env.GMAIL_USER}>`,
            to: booking.email,
            subject: emailData.subject,
            html: emailData.html,
          });

          await supabase
            .from('bookings')
            .update({ no_show_step: nextStep, last_email_sent_at: now.toISOString() })
            .eq('id', booking.id);
        }
      }
    }

    // ==========================================
    // 5. Process No Sale Sequence Follow-ups
    // ==========================================
    const { data: noSaleBookings } = await supabase
      .from('bookings')
      .select('*')
      .eq('status', 'no-sale')
      .in('no_sale_step', [1, 2])
      .lte('last_email_sent_at', twentyFourHoursAgo.toISOString());

    if (noSaleBookings && noSaleBookings.length > 0) {
      for (const booking of noSaleBookings) {
        let emailData;
        let nextStep = booking.no_sale_step + 1;

        if (booking.no_sale_step === 1) emailData = getNoSaleEmail2(booking);
        else if (booking.no_sale_step === 2) emailData = getNoSaleEmail3(booking);

        if (emailData) {
          await transporter.sendMail({
            from: `"Intra-Systems" <${process.env.GMAIL_USER}>`,
            to: booking.email,
            subject: emailData.subject,
            html: emailData.html,
          });

          await supabase
            .from('bookings')
            .update({ no_sale_step: nextStep, last_email_sent_at: now.toISOString() })
            .eq('id', booking.id);
        }
      }
    }

    return NextResponse.json({ success: true, message: "Cron jobs processed successfully." });
  } catch (err: any) {
    console.error("Cron Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

