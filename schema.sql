-- Enable UUID generation if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the bookings table
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    question TEXT,
    meeting_time TIMESTAMP WITH TIME ZONE NOT NULL,
    zoom_link TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- THIS IS THE CRITICAL DOUBLE-BOOKING PREVENTION CONSTRAINT
    CONSTRAINT unique_meeting_time UNIQUE (meeting_time)
);

-- Row Level Security (RLS) configuration
-- Enable RLS so that public users can only INSERT bookings, not SELECT them.
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to INSERT into the bookings table
CREATE POLICY "Allow public inserts" 
ON bookings FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow service role (your backend) to do everything
CREATE POLICY "Allow service role full access" 
ON bookings FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);
