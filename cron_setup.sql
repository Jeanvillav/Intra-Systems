-- Enable pg_net to make HTTP requests
CREATE EXTENSION IF NOT EXISTS "pg_net";

-- Enable pg_cron for scheduling
CREATE EXTENSION IF NOT EXISTS "pg_cron";

-- Unschedule if exists to avoid duplicates during testing
SELECT cron.unschedule('send_reminders_job');

-- Schedule a job to run every 5 minutes
-- It will make a POST request to your Next.js API route
SELECT cron.schedule(
  'send_reminders_job',
  '*/5 * * * *',
  $$
    SELECT net.http_post(
        url:='https://your-vercel-domain.com/api/cron/reminders',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer YOUR_CRON_SECRET_HERE"}'::jsonb
    )
  $$
);
