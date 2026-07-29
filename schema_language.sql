-- Add language preference column to track which language the booking was made in
ALTER TABLE bookings
ADD COLUMN language VARCHAR(2) DEFAULT 'en';
