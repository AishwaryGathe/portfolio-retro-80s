-- Create the chai_bookings table
CREATE TABLE IF NOT EXISTS chai_bookings (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  booking_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE chai_bookings ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public inserts (for booking)
CREATE POLICY "Allow public inserts" ON chai_bookings
  FOR INSERT TO anon
  WITH CHECK (true);

-- Create a policy to allow authenticated users to view all bookings
CREATE POLICY "Allow authenticated users to view bookings" ON chai_bookings
  FOR SELECT TO authenticated
  USING (true);

-- Add an index on booking_date for better query performance
CREATE INDEX IF NOT EXISTS idx_chai_bookings_date ON chai_bookings(booking_date);

-- Add an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_chai_bookings_created_at ON chai_bookings(created_at);
