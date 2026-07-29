require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function deleteBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Deletes all rows

  if (error) {
    console.error('Error deleting bookings:', error);
  } else {
    console.log('Successfully deleted all test bookings.');
  }
}

deleteBookings();
