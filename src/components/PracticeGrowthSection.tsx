import { useTranslations } from 'next-intl';

export default function PracticeGrowthSection() {
  const t = useTranslations();

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Headline */}
        <h2 className="font-['Aboreto'] text-[#141B4D] text-3xl md:text-5xl uppercase font-bold max-w-4xl leading-tight mb-16">
          {t('pgHeadline')}
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full max-w-6xl">
          
          {/* Column 1 - White Card */}
          <div className="flex flex-col bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
            <div className="text-[#141B4D] mb-6">
              <div className="bg-[#141B4D] text-white p-3 rounded-md inline-block">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </div>
            </div>
            <h3 className="text-[#141B4D] font-['Aboreto'] font-bold text-xl uppercase mb-4 tracking-wide">
              {t('pgTitle1')}
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg flex-grow">
              {t('pgDesc1')}
            </p>
          </div>

          {/* Column 2 - Green Card */}
          <div className="flex flex-col bg-[#DDE9CD] p-8 md:p-10 rounded-xl shadow-lg border border-transparent">
            <div className="text-[#141B4D] mb-6 flex items-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-[#141B4D] font-['Aboreto'] font-bold text-xl uppercase mb-4 tracking-wide">
              {t('pgTitle2')}
            </h3>
            <p className="text-gray-900 leading-relaxed text-lg flex-grow">
              {t('pgDesc2')}
            </p>
          </div>

          {/* Column 3 - Light Gray Card */}
          <div className="flex flex-col bg-[#F9F9F9] p-8 md:p-10 rounded-xl shadow-lg border border-gray-50">
            <div className="text-[#141B4D] mb-6 flex items-center">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-[#141B4D] font-['Aboreto'] font-bold text-xl uppercase mb-4 tracking-wide">
              {t('pgTitle3')}
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg flex-grow">
              {t('pgDesc3')}
            </p>
          </div>

        </div>

        <div className="mt-16">
          <a 
            href="#booking"
            className="border border-[#141B4D] text-[#141B4D] bg-transparent font-['Aboreto'] font-bold uppercase tracking-wider px-10 py-5 hover:bg-[#141B4D] hover:text-white transition-colors duration-300 shadow-sm inline-block rounded"
          >
            {t('makeAppointment')}
          </a>
        </div>

      </div>
    </section>
  );
}
