# Intra-Systems: Dental Lasers Landing Page & Booking App

This project is a modern landing page and automated consultation booking system for **Intra-Systems** (a company offering soft-tissue lasers to dental practices). 

## 🏗️ Tech Stack & Architecture
- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 18).
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with a custom design system based on `globals.css` (Colors: `#141B4D` Dark Blue, `#F9F9F9` Off-White, `#DDE9CD` Light Green).
- **Typography:** `Montserrat` (Sans-serif) and `Playfair Display` (Serif for headings/premium feel).
- **Database:** [Supabase](https://supabase.com/) (PostgreSQL).
- **Integrations:** 
  - **Zoom API** (Server-to-Server OAuth) for automatically generating meeting links.
  - **Nodemailer (Gmail)** for sending confirmation/cancellation email sequences.

## 📂 Project Structure

### `/src/app`
- `layout.tsx` & `page.tsx`: The main landing page entry point.
- `/booking/cancel/page.tsx`: Route for users to cancel a booked appointment via a secure link (using UUID).
- `/booking/edit/page.tsx`: Route for users to reschedule an appointment.
- `/actions/booking.ts`: **Core Backend Logic** containing all Server Actions:
  - `submitBooking(data)`: Handles the form submission, checks for double bookings, creates Zoom link, saves to Supabase, and emails the user.
  - `getAvailableSlots(date)`: Queries Supabase to block out hours that are already taken in the UI calendar.
  - `cancelBooking(id)` & `rescheduleBooking(id, newTime)`: Functions to handle user-initiated modifications.

### `/src/components`
The landing page is broken down into modular, responsive sections:
- `Navbar.tsx`: Sticky navigation with logo and CTA.
- `HeroSection.tsx`: Top section with video background (`/video-dentista.mp4`) and primary value proposition.
- `LetterSection.tsx`: A direct "letter" style copy section highlighting the pain points of retraction cords.
- `PillarsSection.tsx`: Contains the 3 pillars of practice growth, and the "With vs Without Lasers" comparison cards.
- `BookingSection.tsx`: The interactive React Calendar form. It communicates with Server Actions to block taken slots in real-time (preventing double bookings) and collects user data.
- `FooterSection.tsx`: Standard footer.

### `/public`
Contains static assets:
- `diagrama.jpeg`: Comparison diagram for the "Smarter Solution" section.
- `TioKevin.jpeg`: Founder headshot for the footer/author sections.
- `video-dentista.mp4`: The background video for the Hero section.

## 🗄️ Database Schema (Supabase)
The system relies on a single `bookings` table. Check `schema.sql` at the root for the exact SQL. 
**Table: `bookings`**
- `id`: UUID (Primary Key)
- `first_name`, `last_name`, `email`, `phone`, `question`: Client info.
- `meeting_time`: TIMESTAMP WITH TIME ZONE.
- `zoom_link`: TEXT.
- `status`: `'pending'`, `'confirmed'`, or `'cancelled'`.

> **Double Booking Prevention:** Handled via a `UNIQUE(meeting_time)` constraint in PostgreSQL AND a runtime check in `booking.ts` to disable hours in the frontend.

## 🤖 LLM Instructions (Context for AI Assistants)
If you are an AI reading this, here is how you should approach this codebase:
1. **Styling Edits:** The user is very particular about design. Use the defined `globals.css` colors. Maintain the "Premium" feel using `font-serif` (Playfair) for titles. Do not use harsh borders; prefer soft shadows (`shadow-sm`, `shadow-lg`) and rounded corners (`rounded-xl`).
2. **Adding Email Sequences:** The functions `sendCancelSequence` and `sendRescheduleSequence` inside `booking.ts` are currently empty placeholders. The user's uncle ("Tío Kevin") will provide texts and video links. You will need to implement a Drip Campaign (likely using Vercel Cron or a queue) to send these sequences.
3. **Timezones:** All times are strictly handled in **Ecuador Time (America/Guayaquil, GMT-5)**. Do not convert to UTC for display purposes unless explicitly requested.

## 🚀 Getting Started Locally
1. Clone the repo and run `npm install`.
2. Ensure you have the `.env.local` populated with Supabase keys, Gmail credentials, and Zoom Server-to-Server OAuth credentials.
3. Run `npm run dev`.
