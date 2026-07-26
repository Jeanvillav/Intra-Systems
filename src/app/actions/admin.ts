"use server";

import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

import nodemailer from "nodemailer";
import { getNoSaleEmail1, getNoShowEmail1, BookingData } from "@/lib/emailTemplates";
import { checkAuth } from "./auth";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function getAllBookings() {
  const isAuth = await checkAuth();
  if (!isAuth) return { success: false, error: "Unauthorized" };

  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("meeting_time", { ascending: false });

    if (error) {
      console.error("Fetch Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, bookings: data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

export async function markBookingStatus(id: string, newStatus: 'no-show' | 'no-sale') {
  const isAuth = await checkAuth();
  if (!isAuth) return { success: false, error: "Unauthorized" };

  try {
    const { data: booking, error: fetchError } = await supabase
      .from("bookings")
      .select("*")
      .eq("id", id)
      .single();
      
    if (fetchError || !booking) {
      return { success: false, error: "Booking not found" };
    }

    const updateData: any = { 
      status: newStatus,
      last_email_sent_at: new Date().toISOString()
    };
    
    let emailData = null;

    if (newStatus === 'no-show') {
      updateData.no_show_step = 1;
      updateData.no_sale_step = 0;
      updateData.cancelled_step = 0;
      emailData = getNoShowEmail1(booking as BookingData);
    } else if (newStatus === 'no-sale') {
      updateData.no_sale_step = 1;
      updateData.no_show_step = 0;
      updateData.cancelled_step = 0;
      emailData = getNoSaleEmail1(booking as BookingData);
    }

    const { error } = await supabase
      .from("bookings")
      .update(updateData)
      .eq("id", id);

    if (error) {
      console.error("Update Error:", error);
      return { success: false, error: error.message };
    }

    if (emailData) {
      await transporter.sendMail({
        from: `"Intra-Systems" <${process.env.GMAIL_USER}>`,
        to: booking.email,
        subject: emailData.subject,
        html: emailData.html,
      });
    }
    
    revalidatePath("/admin");
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
