import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';

export default function LetterSection() {
  const t = useTranslations('LetterSection');
  const locale = useLocale();
  const diagramSrc = locale === 'es' ? '/DiagramaES.png' : '/DiagramaEN.jpeg';

  return (
    <section className="w-full bg-[var(--color-accent-green)] px-4 py-16 flex flex-col items-center text-[#091124]">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12">
          {t('title')}
        </h2>

        <div className="text-lg md:text-xl text-left space-y-6 font-medium">
          <p>{t('greeting')}</p>
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <ul className="space-y-4 pl-4">
            <li>* {t('li1')}</li>
            <li>* {t('li2')}</li>
            <li>* {t('li3')}</li>
          </ul>
          
          <p className="font-bold pt-4 uppercase">
            {t('tldr').split('-')[0]}- <span className="underline decoration-2 underline-offset-4">{t('tldr').split('-')[1]}</span>
          </p>

          <p className="font-bold pt-6 text-xl">{t('solutionMeans')}</p>
          <ul className="space-y-4">
            <li>{t('sol1')}</li>
            <li>{t('sol2')}</li>
            <li>{t('sol3')}</li>
          </ul>

          <p className="font-bold text-xl pt-4">{t('instead')}</p>
          <ul className="space-y-4 pl-4">
            <li>* {t('inst1')}</li>
            <li>* {t('inst2')}</li>
            <li>* {t('inst3')}</li>
            <li>* {t('inst4')}</li>
            <li>* {t('inst5')}</li>
            <li>* {t('inst6')}</li>
          </ul>

          <p className="font-bold text-2xl uppercase pt-8">{t('solutionIs')}</p>
          <p>{t('solutionDesc')}</p>

          <p className="font-bold text-2xl uppercase text-center pt-8 tracking-widest">
            {t('difference')}
          </p>

          {/* Diagram embedded here */}
          <div className="w-full flex justify-center py-8">
            <Image 
              src={diagramSrc}
              alt="Process Diagram"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg shadow-xl"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          <div className="bg-[#141B4D] text-white p-8 mt-12 text-center rounded-lg space-y-6">
            <h3 className="text-xl md:text-2xl font-bold uppercase leading-relaxed text-[#fdf354]" dangerouslySetInnerHTML={{__html: t('ctaTitle')}}></h3>
            <p className="text-lg">{t('ctaP1')}</p>
            <p className="text-lg" dangerouslySetInnerHTML={{__html: t('ctaP2')}}></p>
            <p className="text-lg font-bold" dangerouslySetInnerHTML={{__html: t('ctaP3')}}></p>
            <p className="text-xl font-bold uppercase text-[#fdf354]">{t('talkSoon')}</p>
            
            <div className="pt-6">
              <a href="#booking" className="bg-[#fdf354] text-[#141B4D] border-2 border-[#fdf354] px-8 py-4 uppercase tracking-wider font-bold hover:bg-transparent hover:text-[#fdf354] transition-all duration-300 inline-block cursor-pointer">
                {t('makeAppointment')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
