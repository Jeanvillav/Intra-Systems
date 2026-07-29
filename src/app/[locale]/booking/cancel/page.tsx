"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { cancelBooking, getBookingById } from "@/app/actions/booking";

function CancelBookingContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [isLoading, setIsLoading] = useState(true);
  const [booking, setBooking] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "cancelling" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
          setStatus("success");
        }
      } else {
        setErrorMessage(res.error || "Booking not found.");
      }
      setIsLoading(false);
    }
    
    fetchBooking();
  }, [id]);

  const handleCancel = async () => {
    if (!id) return;
    setStatus("cancelling");
    const res = await cancelBooking(id);
    if (res.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(res.error || "Failed to cancel booking.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full p-8 rounded-xl shadow-lg border border-gray-100 text-center">
        {isLoading ? (
          <p className="text-gray-600 font-medium">Loading booking details...</p>
        ) : errorMessage ? (
          <div>
            <h2 className="text-2xl font-serif text-red-600 mb-4">Error</h2>
            <p className="text-gray-700">{errorMessage}</p>
          </div>
        ) : status === "success" || booking?.status === "cancelled" ? (
          <div>
            <h2 className="text-3xl font-serif text-[#141B4D] mb-4">Booking Cancelled</h2>
            <p className="text-gray-700 mb-8">
              Your consultation has been successfully cancelled. You will receive an email confirmation shortly.
            </p>
            <a href="/" className="text-[#141B4D] underline font-medium">Return to Home</a>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-serif text-[#141B4D] mb-6">Cancel Consultation</h2>
            <p className="text-gray-700 mb-2">Are you sure you want to cancel your consultation for:</p>
            <p className="font-bold text-[#141B4D] mb-8 text-lg">
              {new Date(booking.meeting_time).toLocaleString("en-GB", {
                timeZone: "America/Guayaquil",
                dateStyle: "full",
                timeStyle: "short",
              })} (Ecuador Time)
            </p>

            {status === "error" && (
              <p className="text-red-500 mb-4 font-medium">{errorMessage}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleCancel}
                disabled={status === "cancelling"}
                className="bg-red-600 text-white px-8 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-red-700 disabled:opacity-50 transition-colors"
              >
                {status === "cancelling" ? "Cancelling..." : "Yes, Cancel It"}
              </button>
              <a
                href="/"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors inline-block"
              >
                Keep Booking
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CancelBookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F9F9F9]">Loading...</div>}>
      <CancelBookingContent />
    </Suspense>
  );
}
