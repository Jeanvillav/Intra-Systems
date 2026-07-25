"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getBookingById, rescheduleBooking, getAvailableSlots } from "@/app/actions/booking";
import Calendar from "react-calendar";
import { addDays, isWeekend, startOfDay } from "date-fns";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

function EditBookingContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [isLoading, setIsLoading] = useState(true);
  const [booking, setBooking] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "rescheduling" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [date, setDate] = useState<Value>(null);
  const [availableSlots, setAvailableSlots] = useState<Date[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);

  useEffect(() => {
    if (!id) {
      setErrorMessage("Invalid booking link.");
      setIsLoading(false);
      return;
    }

    async function fetchBooking() {
      const res = await getBookingById(id as string);
      if (res.success) {
        setBooking(res.booking);
        if (res.booking.status === "cancelled") {
          setErrorMessage("This booking has been cancelled and cannot be rescheduled.");
        }
      } else {
        setErrorMessage(res.error || "Booking not found.");
      }
      setIsLoading(false);
    }
    
    fetchBooking();
  }, [id]);

  const minDate = startOfDay(new Date());
  let maxDate = new Date();
  let addedDays = 0;
  while (addedDays < 5) {
    maxDate = addDays(maxDate, 1);
    if (!isWeekend(maxDate)) {
      addedDays++;
    }
  }

  const handleDateChange = async (value: Value) => {
    setDate(value);
    setSelectedSlot(null);
    
    if (value instanceof Date) {
      const year = value.getFullYear();
      const month = String(value.getMonth() + 1).padStart(2, '0');
      const day = String(value.getDate()).padStart(2, '0');
      
      const slots = [];
      const now = new Date();
      const bufferMs = 30 * 60 * 1000;

      let bookedIsoStrings: string[] = [];
      try {
        const dateString = `${year}-${month}-${day}T00:00:00-05:00`;
        bookedIsoStrings = await getAvailableSlots(dateString);
      } catch (err) {
        console.error("Failed to fetch booked slots", err);
      }

      for (let hour = 13; hour <= 19; hour++) {
        const isoString = `${year}-${month}-${day}T${String(hour).padStart(2, '0')}:00:00-05:00`;
        const slotDate = new Date(isoString);
        const isBooked = bookedIsoStrings.includes(slotDate.toISOString());
        
        if (slotDate.getTime() - now.getTime() >= bufferMs && !isBooked) {
          slots.push(slotDate);
        }
      }
      setAvailableSlots(slots);
    } else {
      setAvailableSlots([]);
    }
  };

  const handleReschedule = async () => {
    if (!id || !selectedSlot) return;
    setStatus("rescheduling");
    setErrorMessage("");

    const res = await rescheduleBooking(id, selectedSlot.toISOString());
    if (res.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(res.error || "Failed to reschedule booking.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center py-16 px-4">
      <div className="bg-white max-w-4xl w-full p-8 rounded-xl shadow-lg border border-gray-100">
        {isLoading ? (
          <p className="text-gray-600 font-medium text-center">Loading booking details...</p>
        ) : errorMessage ? (
          <div className="text-center">
            <h2 className="text-2xl font-serif text-red-600 mb-4">Error</h2>
            <p className="text-gray-700">{errorMessage}</p>
          </div>
        ) : status === "success" ? (
          <div className="text-center py-12">
            <h2 className="text-3xl font-serif text-[#141B4D] mb-4">Successfully Rescheduled!</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Your consultation has been moved to: <br/>
              <strong>
                {selectedSlot?.toLocaleString("en-GB", {
                  timeZone: "America/Guayaquil",
                  dateStyle: "full",
                  timeStyle: "short",
                })} (Ecuador Time)
              </strong>
            </p>
            <p className="text-gray-700 mb-8">You will receive a confirmation email with the new Zoom link shortly.</p>
            <a href="/" className="text-[#141B4D] underline font-medium">Return to Home</a>
          </div>
        ) : (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif text-[#141B4D] mb-4">Reschedule Consultation</h2>
              <p className="text-gray-700 text-lg">
                Current appointment: <strong>
                  {new Date(booking.meeting_time).toLocaleString("en-GB", {
                    timeZone: "America/Guayaquil",
                    dateStyle: "full",
                    timeStyle: "short",
                  })}
                </strong>
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <h3 className="font-serif text-xl text-[#141B4D] mb-4 text-center">1. Select a New Date</h3>
                <div className="bg-white border-2 border-gray-100 p-4 rounded-xl flex justify-center shadow-sm">
                  <Calendar 
                    onChange={handleDateChange} 
                    value={date} 
                    minDate={minDate}
                    maxDate={maxDate}
                    tileDisabled={({ date }) => isWeekend(date)}
                    className="border-0 shadow-none font-sans"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-serif text-xl text-[#141B4D] mb-4 text-center">2. Select a New Time</h3>
                
                {!date ? (
                  <div className="flex-1 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center p-8 bg-gray-50 text-center">
                    <p className="text-gray-500">Please select a date from the calendar first.</p>
                  </div>
                ) : availableSlots.length === 0 ? (
                  <div className="flex-1 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center p-8 bg-gray-50 text-center">
                    <p className="text-gray-500">No available slots for this date.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {availableSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-3 px-4 border rounded-md font-medium transition-all ${
                          selectedSlot?.getTime() === slot.getTime()
                            ? "bg-[#141B4D] text-white border-[#141B4D]"
                            : "bg-white text-gray-700 border-gray-300 hover:border-[#141B4D] hover:text-[#141B4D]"
                        }`}
                      >
                        {slot.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}
                      </button>
                    ))}
                  </div>
                )}

                {selectedSlot && (
                  <div className="mt-auto">
                    {status === "error" && (
                      <p className="text-red-500 mb-4 font-medium text-center">{errorMessage}</p>
                    )}
                    <button
                      onClick={handleReschedule}
                      disabled={status === "rescheduling"}
                      className="w-full bg-[#141B4D] text-white py-4 rounded-md font-bold uppercase tracking-widest hover:bg-[#0a1124] disabled:opacity-50 transition-colors"
                    >
                      {status === "rescheduling" ? "Updating..." : "Confirm New Time"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EditBookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">Loading...</div>}>
      <EditBookingContent />
    </Suspense>
  );
}
