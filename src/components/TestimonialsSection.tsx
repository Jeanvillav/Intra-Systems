import React from "react";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function TestimonialsSection() {
  const t = useTranslations('TestimonialsSection');
  return (
    <section className="w-full bg-[#141B4D] px-4 py-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide text-white mb-16 text-center">
        {t('title')}
      </h2>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Testimonial 1 */}
        <div className="bg-white rounded-xl p-8 shadow-xl flex flex-col mt-8">
          <p className="text-gray-700 italic leading-relaxed flex-grow mb-12">
            "{t('t1')}"
          </p>
          <div className="mt-auto">
            <div className="w-24 h-12 mb-4 relative">
              <Image src="/testimonial_logo.png" alt="3 Dental Dublin Logo" fill className="object-contain object-left" />
            </div>
            <h4 className="font-bold text-[#141B4D] text-lg uppercase tracking-wide">{t('author1')}</h4>
            <p className="text-sm text-gray-500 uppercase tracking-wide">{t('clinic1')}</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-xl p-8 shadow-xl flex flex-col mt-8">
          <p className="text-gray-700 italic leading-relaxed flex-grow mb-12">
            "{t('t2')}"
          </p>
          <div className="mt-auto">
            <div className="w-24 h-12 mb-4 relative">
              <Image src="/testimonial_logo.png" alt="Chapel House Dentistry Logo" fill className="object-contain object-left" />
            </div>
            <h4 className="font-bold text-[#141B4D] text-lg uppercase tracking-wide">{t('author2')}</h4>
            <p className="text-sm text-gray-500 uppercase tracking-wide">{t('clinic2')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
