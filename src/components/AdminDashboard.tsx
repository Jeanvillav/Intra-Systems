"use client";

import { useEffect, useState } from "react";
import { getAllBookings, markBookingStatus } from "@/app/actions/admin";

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    setLoading(true);
    const res = await getAllBookings();
    if (res.success) {
      setBookings(res.bookings || []);
    } else {
      setError(res.error || "Failed to load bookings. Are you logged in?");
    }
    setLoading(false);
  }

  async function handleStatusChange(id: string, newStatus: 'no-show' | 'no-sale') {
    if (!window.confirm(`Are you sure you want to mark this as ${newStatus.toUpperCase()}? This will trigger the email sequence.`)) {
      return;
    }
    
    const res = await markBookingStatus(id, newStatus);
    if (res.success) {
      alert(`Status updated to ${newStatus}`);
      fetchBookings();
    } else {
      alert("Failed to update status: " + res.error);
    }
  }

  return (
    <div className="min-h-screen bg-[#F9F9F9] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-serif text-[#141B4D] mb-8">Admin Dashboard</h1>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <div className="bg-white rounded-xl shadow-lg overflow-x-auto border border-gray-100">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#141B4D] text-white">
                <th className="p-4 border-b">Client Name</th>
                <th className="p-4 border-b">Email / Phone</th>
                <th className="p-4 border-b">Meeting Details</th>
                <th className="p-4 border-b">Status</th>
                <th className="p-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">Loading bookings...</td>
                </tr>
              ) : bookings.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">No bookings found.</td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 border-b last:border-0">
                    <td className="p-4">
                      <p className="font-bold text-[#141B4D]">{booking.first_name} {booking.last_name}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-gray-700">{booking.email}</p>
                      <p className="text-gray-500 text-sm">{booking.phone}</p>
                    </td>
                    <td className="p-4">
                      <p className="font-bold text-gray-800">
                        {new Date(booking.meeting_time).toLocaleString("en-GB", {
                          timeZone: "America/Guayaquil",
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </p>
                      {booking.zoom_link && (
                        <a 
                          href={booking.zoom_link} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-blue-600 hover:underline text-sm font-medium mt-1 inline-block"
                        >
                          Join Zoom Meeting
                        </a>
                      )}
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                        'bg-gray-200 text-gray-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2 justify-center">
                        <button 
                          onClick={() => handleStatusChange(booking.id, 'no-sale')}
                          disabled={booking.status === 'no-sale' || booking.status === 'cancelled'}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50"
                        >
                          No Sale
                        </button>
                        <button 
                          onClick={() => handleStatusChange(booking.id, 'no-show')}
                          disabled={booking.status === 'no-show' || booking.status === 'cancelled'}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50"
                        >
                          No Show
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
