import { NextResponse } from 'next/server';
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

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
    // We want to find meetings that are starting in exactly 30 to 35 minutes
    const in30Mins = new Date(now.getTime() + 30 * 60000);
    const in35Mins = new Date(now.getTime() + 35 * 60000);

    // 1. Process 30-minute Reminders for Booked Appointments
    const { data: upcomingBookings, error: upcomingError } = await supabase
      .from('bookings')
      .select('*')
      .in('status', ['pending', 'confirmed'])
      .eq('reminder_30m_sent', false)
      .gte('meeting_time', in30Mins.toISOString())
      .lte('meeting_time', in35Mins.toISOString());

    if (upcomingError) {
      console.error("Error fetching upcoming bookings:", upcomingError);
    } else if (upcomingBookings && upcomingBookings.length > 0) {
      for (const booking of upcomingBookings) {
        // Send the 30-minute reminder email
        const dateStr = new Date(booking.meeting_time).toLocaleString("en-GB", {
          timeZone: "America/Guayaquil",
          dateStyle: "full",
          timeStyle: "short",
        });

        await transporter.sendMail({
          from: `"Intra-Systems" <${process.env.GMAIL_USER}>`,
          to: booking.email,
          subject: "Starting in 30 Minutes!",
          html: `
            <h2>Hi ${booking.first_name},</h2>
            <p>I trust this email finds you in good health. It's just a quick note to inform you that we are only 30 minutes away from your scheduled appointment on ${dateStr}.</p>
            <p>The moment for transformative change is upon us, and I'm excited about the positive shifts that await you.</p>
            <p>Get ready to embark on this journey towards positive transformation. Your commitment to this appointment is a crucial step toward achieving the results you desire.</p>
            <p><strong>Meeting Location:</strong> <a href="${booking.zoom_link}">${booking.zoom_link}</a></p>
            <br/>
            <p>If you need to reschedule, you can do so here:</p>
            <p><a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/booking/edit?id=${booking.id}">Reschedule Link</a></p>
            <br/>
            <p>Best regards,</p>
            <p><strong>Kevin Easter</strong><br/>Director INTRA Systems</p>
          `,
        });

        // Mark as sent
        await supabase
          .from('bookings')
          .update({ reminder_30m_sent: true, last_email_sent_at: new Date().toISOString() })
          .eq('id', booking.id);
      }
    }

    // TODO: Process No Show Sequences (no_show_step 1, 2, 3)
    // TODO: Process Cancelled Sequences (cancelled_step 1, 2)
    // TODO: Process No Sale Sequences (no_sale_step 1, 2, 3)
    // We will implement these once the full templates are set up in a separate lib.

    return NextResponse.json({ success: true, message: "Cron jobs processed successfully." });
  } catch (err: any) {
    console.error("Cron Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
