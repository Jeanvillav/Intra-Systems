import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function cancelAllBookings() {
  console.log("Cancelling all bookings...");
  const { data, error } = await supabase
    .from("bookings")
    .update({ status: 'cancelled' })
    .neq("status", "cancelled");

  if (error) {
    console.error("Error cancelling bookings:", error);
  } else {
    console.log("Successfully cancelled all active bookings!");
  }
}

cancelAllBookings();
