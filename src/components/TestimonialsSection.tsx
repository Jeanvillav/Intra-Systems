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
        <div className="bg-white rounded-xl p-8 shadow-xl flex flex-col relative pt-12 mt-8">
          <div className="absolute -top-10 left-8">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src="/doc1.jpeg" alt="Dr. Ruxandra" fill className="object-cover" />
            </div>
          </div>
          <p className="text-gray-700 italic leading-relaxed flex-grow">
            "{t('t1')}"
          </p>
          <div className="mt-6 flex flex-col items-end border-t border-gray-100 pt-4">
            <h4 className="font-bold text-[#141B4D] text-lg">{t('author1')}</h4>
            <p className="text-sm text-gray-500">{t('clinic1')}</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white rounded-xl p-8 shadow-xl flex flex-col relative pt-12 mt-8">
          <div className="absolute -top-10 left-8">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image src="/doc2.jpeg" alt="Dr. Brent" fill className="object-cover" />
            </div>
          </div>
          <p className="text-gray-700 italic leading-relaxed flex-grow">
            "{t('t2')}"
          </p>
          <div className="mt-6 flex flex-col items-end border-t border-gray-100 pt-4">
            <h4 className="font-bold text-[#141B4D] text-lg">{t('author2')}</h4>
            <p className="text-sm text-gray-500">{t('clinic2')}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
