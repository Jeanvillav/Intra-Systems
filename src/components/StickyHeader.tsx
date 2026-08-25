"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('StickyHeader');
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string || 'en';

  useEffect(() => {
    const handleScroll = () => {
      // Show the header slightly after scrolling past the very top
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    const nextLocale = currentLocale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 border-b border-white/10 ${
        isScrolled ? "bg-[#091124] shadow-lg" : "bg-[#091124]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4 text-white">
          <div className="relative w-48 h-14">
            <Image src="/logo.png" alt="Intra-Systems Logo" fill className="object-contain object-left" />
          </div>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLocale}
            className="bg-transparent text-white border border-white/30 rounded px-3 py-1.5 text-sm focus:outline-none cursor-pointer hover:bg-white/10 transition-colors font-medium"
          >
            {currentLocale === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
          </button>
        </div>
      </div>
    </div>
  );
}
