import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PillarsSection from "@/components/PillarsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center w-full">
      <StickyHeader />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PillarsSection />
      <AboutSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
