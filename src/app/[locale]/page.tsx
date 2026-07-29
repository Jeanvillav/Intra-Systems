import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import LetterSection from "@/components/LetterSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center w-full">
      <StickyHeader />
      <HeroSection />
      <PillarsSection />
      <LetterSection />
      <AboutSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
