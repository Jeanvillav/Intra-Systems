import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
  try {
    // 1. Verify Authorization (CRON_SECRET)
    const authHeader = request.headers.get('authorization');
    const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;

    if (!process.env.CRON_SECRET || authHeader !== expectedAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Initialize Supabase
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase credentials for keepalive");
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 3. Ping the database to keep it active
    // We do a simple limit(1) query to register database activity
    const { data, error } = await supabase
      .from('bookings')
      .select('id')
      .limit(1);

    if (error) {
      console.error("Keepalive query failed:", error);
      return NextResponse.json({ error: 'Database ping failed', details: error }, { status: 500 });
    }

    console.log("Keepalive ping successful at", new Date().toISOString());
    return NextResponse.json({ success: true, message: 'Database is awake' });

  } catch (error: any) {
    console.error("Keepalive error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
