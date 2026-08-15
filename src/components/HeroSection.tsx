"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const t = useTranslations('HeroSection');
  const tGlobal = useTranslations();

  return (
    <section className="w-full bg-[#091124] px-4 pt-28 pb-16 flex flex-col items-center text-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-relaxed md:leading-relaxed lg:leading-relaxed tracking-wide text-white uppercase">
          {t('titlePrefix')} <span className="text-highlight">{t('titleHighlight1')}</span>{t('titleMiddle')}<span className="text-highlight">{t('titleHighlight2')}</span>
        </h1>
        
        <hr className="my-8 border-white/40 w-full" />

        <p className="mt-8 mb-12 text-xl md:text-2xl text-white uppercase tracking-wider font-serif">
          {t('subtitle')}
        </p>

        <div className="mb-12 relative w-full pt-[56.25%] bg-black border-2 border-white/20 rounded-lg shadow-2xl overflow-hidden group">
          {!isPlaying ? (
            <div 
              className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center z-10 bg-black/40 hover:bg-black/20 transition-all duration-300"
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail image behind overlay */}
              <img 
                src="https://img.youtube.com/vi/Hv8_lFwsaQs/maxresdefault.jpg" 
                alt="Video Thumbnail" 
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80 -z-10"></div>
              
              {/* Pulsing Play Button */}
              <div className="bg-red-600 text-white rounded-full p-5 shadow-[0_0_30px_rgba(220,38,38,0.6)] animate-pulse hover:scale-110 transition-transform duration-300">
                <svg className="w-12 h-12 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" />
                </svg>
              </div>
              <p className="mt-6 text-white font-bold text-lg md:text-xl uppercase tracking-widest bg-black/60 px-6 py-2 rounded-full border border-white/20 shadow-lg backdrop-blur-sm animate-bounce text-center max-w-[90%]">
                {t('clickToPlay')}
              </p>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Hv8_lFwsaQs?autoplay=1&mute=0&rel=0"
              title="Intra-Systems Pitch"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <a 
          href="#booking"
          className="border border-white text-white bg-transparent font-['Aboreto'] font-bold uppercase tracking-wider px-10 py-5 hover:bg-white hover:text-[#091124] transition-colors duration-300 shadow-md inline-block"
        >
          {tGlobal('makeAppointment')}
        </a>
      </div>
    </section>
  );
}
