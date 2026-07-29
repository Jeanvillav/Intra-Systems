"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 bg-[#091124] shadow-lg transition-transform duration-300 border-b border-white/10 ${
        isScrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-4 text-white">
          <div className="relative w-48 h-14">
            <Image src="/logo.png" alt="Intra-Systems Logo" fill className="object-contain object-left" />
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="#booking" 
          className="bg-[#fdf354] text-[#091124] px-6 py-2 uppercase tracking-wider font-bold hover:bg-opacity-90 transition-colors text-sm rounded-sm"
        >
          MAKE AN APPOINTMENT
        </a>
      </div>
    </div>
  );
}
