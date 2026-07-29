import { useTranslations, useLocale } from 'next-intl';

export default function ComparisonSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="bg-transparent py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Diagram Image */}
        <div className="w-full max-w-5xl mb-16 text-center">
          <img 
            src={locale === 'es' ? '/DiagramaES.png' : '/DiagramaEN.jpeg'} 
            alt={locale === 'es' ? 'Diagrama' : 'Diagram'} 
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          {/* Without Lasers Column */}
          <div className="bg-[#DDE9CD] p-8 md:p-12 border border-transparent shadow-sm flex flex-col">
            <h2 className="font-['Aboreto'] text-[#091124] text-2xl md:text-3xl uppercase font-bold mb-8">
              {t('cmpTitle1')}
            </h2>
            <ul className="text-gray-900 space-y-6 text-lg leading-relaxed flex-grow">
              <li className="flex items-start">
                <svg className="w-6 h-6 flex-shrink-0 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{t('cmpDesc1a')}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 flex-shrink-0 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{t('cmpDesc1b')}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 flex-shrink-0 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{t('cmpDesc1c')}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 flex-shrink-0 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{t('cmpDesc1d')}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 flex-shrink-0 text-red-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{t('cmpDesc1e')}</span>
              </li>
            </ul>
          </div>

          {/* With Lasers Column */}
          <div className="bg-white p-8 md:p-12 border border-transparent shadow-xl flex flex-col transform md:-translate-y-4">
            <h2 className="font-['Aboreto'] text-[#091124] text-2xl md:text-3xl uppercase font-bold mb-8 flex items-center">
              <svg className="w-8 h-8 flex-shrink-0 text-[#091124] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {t('cmpTitle2')}
            </h2>
            <ul className="text-gray-900 space-y-6 text-lg leading-relaxed flex-grow">
              <li className="flex items-start">
                <svg className="w-6 h-6 flex-shrink-0 text-[#091124] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <span>{t('cmpDesc2a')}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 flex-shrink-0 text-[#091124] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <span>{t('cmpDesc2b')}</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 flex-shrink-0 text-[#091124] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <span>{t('cmpDesc2c')}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
