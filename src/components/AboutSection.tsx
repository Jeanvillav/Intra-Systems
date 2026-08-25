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
      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 w-full space-y-12 order-2 md:order-1">
          
          <div className="bg-[var(--color-accent-green)] p-6 rounded-sm">
            <p className="text-[#091124] leading-relaxed text-lg md:text-xl font-medium">
              {t('p1')}
            </p>
            <p className="text-[#091124] leading-relaxed text-lg md:text-xl mt-4 font-medium">
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
        <div className="w-full md:w-1/3 flex flex-col items-center order-1 md:order-2">
          <div className="w-64 h-64 relative rounded-full shadow-xl overflow-hidden mb-6">
            <Image
              src="/TioKevin.jpeg"
              alt="Kevin Easter"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-bold text-xl uppercase text-center tracking-wide">{t('title')}</h3>
        </div>
      </div>
    </section>
  );
}

