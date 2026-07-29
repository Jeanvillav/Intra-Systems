import { useTranslations } from 'next-intl';

export default function PracticeGrowthSection() {
  const t = useTranslations();

  return (
    <section className="bg-[#F9F9F9] py-16 px-4 border-t-2 border-black">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Main Headline */}
        <h2 className="font-['Aboreto'] text-[#141B4D] text-3xl md:text-5xl uppercase font-bold max-w-4xl leading-tight mb-16">
          {t('pgHeadline')}
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="text-[#141B4D] text-4xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-[#141B4D] font-['Aboreto'] font-bold text-xl uppercase mb-4 tracking-wide">
              {t('pgTitle1')}
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg">
              {t('pgDesc1')}
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="text-[#141B4D] text-4xl mb-4">
              <i className="fas fa-heart"></i>
            </div>
            <h3 className="text-[#141B4D] font-['Aboreto'] font-bold text-xl uppercase mb-4 tracking-wide">
              {t('pgTitle2')}
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg">
              {t('pgDesc2')}
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <div className="text-[#141B4D] text-4xl mb-4">
              <i className="fas fa-tooth"></i>
            </div>
            <h3 className="text-[#141B4D] font-['Aboreto'] font-bold text-xl uppercase mb-4 tracking-wide">
              {t('pgTitle3')}
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg">
              {t('pgDesc3')}
            </p>
          </div>

        </div>

        <div className="mt-16">
          <a 
            href="#booking"
            className="border border-[#141B4D] text-[#141B4D] font-['Aboreto'] font-bold uppercase tracking-wider px-10 py-5 hover:bg-[#141B4D] hover:text-white transition-colors duration-300 shadow-md inline-block"
          >
            {t('makeAppointment')}
          </a>
        </div>

      </div>
    </section>
  );
}
