import { useTranslations } from 'next-intl';

export default function PillarsSection() {
  const t = useTranslations('PillarsSection');
  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. The Problems & Solution Framework */}
      <section className="w-full max-w-7xl mx-auto px-4 py-20">
        <h3 className="text-3xl md:text-5xl font-serif text-center mb-16 text-[#141B4D]">
          {t('section1Title')}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#DDE9CD] text-[#091124] p-10 flex flex-col items-start rounded-xl">
            <div className="text-[#141B4D] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 font-serif text-[#141B4D]">{t('pillar1Title')}</h4>
            <p className="font-normal text-base leading-relaxed text-gray-800">{t('pillar1Desc1')}</p>
            <p className="font-normal text-base leading-relaxed text-gray-800 mt-4">{t('pillar1Desc2')}</p>
          </div>
          <div className="bg-[#F5F5F5] text-[#091124] p-10 flex flex-col items-start rounded-xl">
            <div className="text-[#141B4D] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 font-serif text-[#141B4D]">{t('pillar2Title')}</h4>
            <p className="font-normal text-base leading-relaxed text-gray-800">{t('pillar2Desc1')}</p>
          </div>
          <div className="bg-[#DDE9CD] text-[#091124] p-10 flex flex-col items-start rounded-xl">
            <div className="text-[#141B4D] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 font-serif text-[#141B4D]">{t('pillar3Title')}</h4>
            <p className="font-normal text-base leading-relaxed text-gray-800">{t('pillar3Desc1')}</p>
            <p className="font-normal text-base leading-relaxed text-gray-800 mt-4">{t('pillar3Desc2')}</p>
          </div>
          <div className="bg-[#DDE9CD] text-[#091124] p-10 flex flex-col items-start rounded-xl">
            <div className="text-[#141B4D] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm9 6.845v-4.103a1.996 1.996 0 0 0-1.127-1.796L16.275 9.17A8.956 8.956 0 0 0 12 14c-4.97 0-9 4.03-9 9v1h5.366c.214-2.827 2.05-5.183 4.634-6.026V13l7.009 3.504A1.002 1.002 0 0 1 21 17.399v1.446c0 1.259-2.071 3.525-5 4.975v2.244c4.372-1.921 7-5.176 7-7.219z"/></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 font-serif text-[#141B4D]">{t('pillar4Title')}</h4>
            <p className="font-normal text-base leading-relaxed text-gray-800">{t('pillar4Desc1')}</p>
          </div>
          <div className="bg-[#F5F5F5] text-[#091124] p-10 flex flex-col items-start rounded-xl">
            <div className="text-[#141B4D] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 font-serif text-[#141B4D]">{t('pillar5Title')}</h4>
            <p className="font-normal text-base leading-relaxed text-gray-800">{t('pillar5Desc1')}</p>
            <p className="font-normal text-base leading-relaxed text-gray-800 mt-4">{t('pillar5Desc2')}</p>
          </div>
        </div>
      </section>

      {/* 2. The Smarter Solution */}
      <section className="w-full bg-[#F3F4F6] px-4 py-24 flex flex-col items-center">
        <h3 className="text-3xl md:text-5xl font-serif text-center mb-16 text-[#141B4D] max-w-4xl">
          {t('section2Title')}
        </h3>

        <div className="w-full max-w-4xl mb-16 relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <img 
            src="/diagrama.jpeg" 
            alt="Laser vs Retraction Cord Diagram" 
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-2xl font-serif text-[#141B4D] mb-4">{t('deliversAffordability')}</h4>
            <p className="text-gray-700 text-lg">{t('affordabilityDesc')}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-2xl font-serif text-[#141B4D] mb-4">{t('deliversGrowth')}</h4>
            <p className="text-gray-700 text-lg">{t('growthDesc')}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-2xl font-serif text-[#141B4D] mb-4">{t('deliversROI')}</h4>
            <p className="text-gray-700 text-lg">{t('roiDesc')}</p>
          </div>
        </div>

        <div className="mt-20 text-center space-y-6">
          <h4 className="text-xl md:text-2xl font-serif text-[#141B4D]">
            {t('readyToLearn')}
          </h4>
          <p className="text-lg md:text-xl font-serif text-[#141B4D] pb-4">
            {t('bookCall')}
          </p>
          <a href="#booking" className="bg-transparent text-[#141B4D] border border-[#141B4D] px-10 py-4 font-bold text-sm tracking-widest hover:bg-[#141B4D] hover:text-white transition-all duration-300 inline-block cursor-pointer uppercase">
            {t('makeAppointment')}
          </a>
        </div>
      </section>

      {/* 3. Without Lasers vs With Lasers */}
      <section className="flex flex-col md:flex-row w-full text-center">
        <div className="flex-1 bg-white px-6 py-20 text-[#091124] flex flex-col items-center">
          <h3 className="font-bold font-serif text-3xl mb-12 text-[#141B4D]">{t('withoutLasersTitle')}</h3>
          <ul className="space-y-8 max-w-md text-left font-normal text-lg">
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-xl">×</span> <span className="pt-1">{t('without1')}</span></li>
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-xl">×</span> <span className="pt-1">{t('without2')}</span></li>
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-xl">×</span> <span className="pt-1">{t('without3')}</span></li>
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-xl">×</span> <span className="pt-1">{t('without4')}</span></li>
            <li className="flex gap-4 items-start font-semibold mt-4">{t('withoutSummary')}</li>
          </ul>
        </div>
        <div className="flex-1 bg-[#DDE9CD] px-6 py-20 text-[#091124] flex flex-col items-center border-l border-gray-200">
          <h3 className="font-bold font-serif text-3xl mb-12 text-[#141B4D]">{t('withLasersTitle')}</h3>
          <ul className="space-y-8 max-w-md text-left font-normal text-lg">
            <li className="flex gap-4 items-start text-[#141B4D]"><span className="font-bold text-xl">✓</span> <span className="pt-1">{t('with1')}</span></li>
            <li className="flex gap-4 items-start text-[#141B4D]"><span className="font-bold text-xl">✓</span> <span className="pt-1">{t('with2')}</span></li>
            <li className="flex gap-4 items-start text-[#141B4D]"><span className="font-bold text-xl">✓</span> <span className="pt-1">{t('with3')}</span></li>
            <li className="flex gap-4 items-start text-[#141B4D]"><span className="font-bold text-xl">✓</span> <span className="pt-1">{t('with4')}</span></li>
            <li className="flex gap-4 items-start font-semibold mt-4 text-[#141B4D]">{t('withSummary')}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
