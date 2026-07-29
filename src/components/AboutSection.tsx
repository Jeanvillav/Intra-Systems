import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('AboutSection');
  return (
    <section className="w-full bg-white text-[#091124]">
      {/* Header Area */}
      <div className="bg-[var(--color-accent-green)] px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide">
          {t('headerTitle')}
        </h2>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 w-full space-y-12">
          
          <div>
            <h3 className="font-bold text-xl uppercase mb-2">{t('title')}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t('p1')}
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t('p2')}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl uppercase mb-2 bg-[var(--color-accent-green)] inline-block px-2">{t('journeyTitle')}</h3>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t('journeyDesc')}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl uppercase mb-2 bg-[var(--color-accent-green)] inline-block px-2">{t('educationTitle')}</h3>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t('educationDesc')}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl uppercase mb-2 bg-[var(--color-accent-green)] inline-block px-2">{t('hobbiesTitle')}</h3>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t('hobbiesDesc')}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl uppercase mb-2 bg-[var(--color-accent-green)] inline-block px-2">{t('supportTitle')}</h3>
            <p className="text-gray-700 leading-relaxed mt-4">
              {t('supportDesc')}
            </p>
          </div>

        </div>

        {/* Photo Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center pt-8">
          <div className="w-64 h-80 bg-gray-200 border-4 border-[var(--color-accent-green)] relative rounded-sm shadow-xl overflow-hidden">
            <Image
              src="/TioKevin.jpeg"
              alt="Kevin Easter"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-8">
            <a href="#booking" className="bg-[#091124] text-white border-2 border-[#091124] px-8 py-3 uppercase tracking-wider font-bold hover:bg-white hover:text-[#091124] transition-all duration-300 inline-block cursor-pointer">
              {t('bookCall')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

