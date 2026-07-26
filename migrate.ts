import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tjwosbqnnmhlghhssxbh.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqd29zYnFubm1obGdoaHNzeGJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NDkzOTYxMSwiZXhwIjoyMTAwNTE1NjExfQ._Rq-a9v9QoGHLc3pW_zsarkEXBYpyKWLe6JLh_wlMN0';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function migrate() {
  console.log("Starting migration...");
  
  // Since we can't run raw SQL easily via the JS client without an RPC,
  // we'll instruct the user to run the SQL in their Supabase Dashboard if we can't run it here.
  // Actually, we can use Supabase POST /rest/v1/rpc or query if we have an RPC, but we don't.
  
  console.log("Migration script requires running raw SQL. Please run the following in Supabase SQL Editor:");
  console.log(`
    ALTER TABLE bookings DROP CONSTRAINT IF EXISTS bookings_status_check;
    ALTER TABLE bookings ADD CONSTRAINT bookings_status_check CHECK (status IN ('pending', 'confirmed', 'cancelled', 'no-show', 'no-sale'));
    
    ALTER TABLE bookings ADD COLUMN IF NOT EXISTS reminder_30m_sent BOOLEAN DEFAULT FALSE;
    ALTER TABLE bookings ADD COLUMN IF NOT EXISTS no_show_step INT DEFAULT 0;
    ALTER TABLE bookings ADD COLUMN IF NOT EXISTS no_sale_step INT DEFAULT 0;
    ALTER TABLE bookings ADD COLUMN IF NOT EXISTS cancelled_step INT DEFAULT 0;
    ALTER TABLE bookings ADD COLUMN IF NOT EXISTS last_email_sent_at TIMESTAMP WITH TIME ZONE;
  `);
}

migrate();
