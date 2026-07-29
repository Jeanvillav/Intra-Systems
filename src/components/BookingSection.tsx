"use client";

import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { addDays, isWeekend, startOfDay } from "date-fns";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { submitBooking } from "@/app/actions/booking";

// Form Validation Schema
const bookingSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  question: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

import { useTranslations } from "next-intl";

import { useParams } from 'next/navigation';
export default function BookingSection() {
  const t = useTranslations('BookingSection');
  const params = useParams();
  const currentLocale = (params?.locale as string) || 'en';
  const [isMounted, setIsMounted] = useState(false);
  const [date, setDate] = useState<Value>(null);
  const [availableSlots, setAvailableSlots] = useState<Date[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [userTimezone, setUserTimezone] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: "success" | "error", text: string} | null>(null);

  const { register, handleSubmit, control, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "all",
  });

  useEffect(() => {
    setIsMounted(true);
    setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const minDate = startOfDay(new Date());
  
  // Calculate max date (5 working days from now)
  let maxDate = new Date();
  let addedDays = 0;
  while (addedDays < 5) {
    maxDate = addDays(maxDate, 1);
    if (!isWeekend(maxDate)) {
      addedDays++;
    }
  }

  // Handle Date Selection
  const handleDateChange = async (value: Value) => {
    setDate(value);
    setSelectedSlot(null);
    
    if (value instanceof Date) {
      // Generate slots for 13:00 to 19:00 Ecuador Time (GMT-5)
      const year = value.getFullYear();
      const month = String(value.getMonth() + 1).padStart(2, '0');
      const day = String(value.getDate()).padStart(2, '0');
      
      const slots = [];
      const now = new Date();
      const bufferMs = 30 * 60 * 1000; // 30 minutes

      // Fetch booked slots for this day from server
      let bookedIsoStrings: string[] = [];
      try {
        const { getAvailableSlots } = await import("@/app/actions/booking");
        const dateString = `${year}-${month}-${day}T00:00:00-05:00`;
        bookedIsoStrings = await getAvailableSlots(dateString);
      } catch (err) {
        console.error("Failed to fetch booked slots", err);
      }

      for (let hour = 13; hour <= 19; hour++) {
        // Create an ISO string with the fixed -05:00 offset for Ecuador
        const isoString = `${year}-${month}-${day}T${String(hour).padStart(2, '0')}:00:00-05:00`;
        const slotDate = new Date(isoString);

        // Only add slot if it's at least 30 minutes in the future AND not booked
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

  const onSubmit = async (data: BookingFormData) => {
    if (!selectedSlot) return;
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    const payload = {
      ...data,
      meeting_time: selectedSlot.toISOString(),
      language: currentLocale,
    };
    
    console.log("Sending payload:", payload);
    const result = await submitBooking(payload);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitMessage({ type: "success", text: "Booking confirmed! We have saved your slot." });
      // Optionally reset form here, but showing success is good enough for now.
    } else {
      setSubmitMessage({ type: "error", text: result.error || "An error occurred." });
    }
  };

  return (
    <section id="booking" className="w-full bg-[#f8fafc] px-4 py-24 flex flex-col items-center text-[#091124]">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl md:text-5xl font-black text-[#091124] mb-4 tracking-tight">
          {t('title')}
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-12">
          {t('subtitle')}
        </p>

        <div className="bg-white p-6 md:p-12 shadow-2xl rounded-2xl flex flex-col items-center">
          
          <div className="relative w-64 h-24 mb-8">
            <Image src="/logo.png" alt="Intra-Systems Logo" fill className="object-contain" />
          </div>

          <h3 className="text-2xl font-bold mb-8">{t('selectTime')}</h3>

          <div className="flex flex-col md:flex-row gap-12 w-full justify-center">
            
            {/* Calendar - Only render when mounted to prevent hydration errors */}
            <div className="flex-1 flex flex-col items-center">
              {isMounted ? (
                <>
                  <Calendar 
                    onChange={handleDateChange} 
                    value={date} 
                    minDate={minDate}
                    maxDate={maxDate}
                    tileDisabled={({ date }) => isWeekend(date)}
                    locale="en-GB"
                    className="shadow-sm border border-gray-100 rounded-lg"
                  />
                  <p className="mt-4 text-sm text-gray-500 font-medium">
                    {t('timezone')} {userTimezone}
                  </p>
                </>
              ) : (
                <div className="w-[350px] h-[300px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center text-gray-400">
                  Loading Calendar...
                </div>
              )}
            </div>

            {/* Time Slots & Form */}
            <div className="flex-1 w-full flex flex-col items-center md:items-start">
              {isMounted && date instanceof Date && availableSlots.length > 0 && !selectedSlot && (
                <div className="w-full">
                  <h4 className="font-bold mb-4">{t('selectTime')}</h4>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {availableSlots.map((slot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSlot(slot)}
                        className="p-3 border-2 border-blue-500 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        {slot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isMounted && selectedSlot && (
                <form className="w-full text-left space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 font-bold">{t('selectedTime')}</p>
                      <p className="font-bold text-blue-700">
                        {selectedSlot.toLocaleDateString()} at {selectedSlot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    <button type="button" onClick={() => setSelectedSlot(null)} className="text-sm underline text-blue-600 font-bold">{t('change')}</button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">{t('firstName')}</label>
                      <input 
                        {...register("firstName")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">{t('lastName')}</label>
                      <input 
                        {...register("lastName")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('email')}</label>
                    <input 
                      {...register("email")}
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                      placeholder="john@dental.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('phone')}</label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          international
                          defaultCountry="GB"
                          value={value}
                          onChange={onChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-white"
                        />
                      )}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    <style jsx global>{`
                      .PhoneInputInput {
                        border: none;
                        outline: none;
                        background: transparent;
                        margin-left: 10px;
                        width: 100%;
                      }
                    `}</style>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">{t('question')}</label>
                    <textarea 
                      {...register("question")}
                      rows={3} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>
                  </div>

                  {submitMessage && (
                    <div className={`p-4 rounded-lg font-bold text-center ${submitMessage.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {submitMessage.type === "success" ? t('successMessage') : submitMessage.text}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting || submitMessage?.type === "success"}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? t('bookingLoading') : (submitMessage?.type === "success" ? "BOOKED!" : t('bookingButton'))}
                  </button>
                </form>
              )}

              {isMounted && !(date instanceof Date) && (
                <div className="h-full flex items-center justify-center text-gray-400 font-medium text-center">
                  {t('selectDate')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
