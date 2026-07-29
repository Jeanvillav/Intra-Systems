-- Add educational_step column to track the Educational Prep email in the Booked workflow
ALTER TABLE bookings ADD COLUMN educational_step INT DEFAULT 0;
