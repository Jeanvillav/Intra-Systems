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
            <div className="text-[#141B4D] text-4xl mb-6">
              <i className="fas fa-list-ul bg-[#141B4D] text-white p-3 rounded-md text-2xl"></i>
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
            <div className="text-[#141B4D] text-4xl mb-6 flex items-center">
              <i className="fas fa-user-shield text-5xl"></i>
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
            <div className="text-[#141B4D] text-4xl mb-6 flex items-center">
              <i className="fas fa-bullseye text-5xl"></i>
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
