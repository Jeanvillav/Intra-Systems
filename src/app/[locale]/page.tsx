import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import PracticeGrowthSection from "@/components/PracticeGrowthSection";
import SmarterSolutionSection from "@/components/SmarterSolutionSection";
import ComparisonSection from "@/components/ComparisonSection";
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
      <PracticeGrowthSection />
      <SmarterSolutionSection />
      <ComparisonSection />
      <LetterSection />
      <AboutSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
    </main>
  );
}
