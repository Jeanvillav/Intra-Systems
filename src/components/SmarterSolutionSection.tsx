import { useTranslations } from 'next-intl';

export default function SmarterSolutionSection() {
  const t = useTranslations();

  return (
    <section className="bg-[#141B4D] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Headline */}
        <h2 className="font-['Aboreto'] text-[#FAF089] text-3xl md:text-5xl uppercase font-bold max-w-4xl leading-tight mb-16">
          {t('smSmarterHeadline')}
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl w-full">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-['Aboreto'] font-bold text-xl uppercase mb-4 tracking-wide border-b border-white pb-2">
              {t('smTitle1')}
            </h3>
            <p className="text-white leading-relaxed text-lg px-2">
              {t('smDesc1')}
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-['Aboreto'] font-bold text-xl uppercase mb-4 tracking-wide border-b border-white pb-2">
              {t('smTitle2')}
            </h3>
            <p className="text-white leading-relaxed text-lg px-2">
              {t('smDesc2')}
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-['Aboreto'] font-bold text-xl uppercase mb-4 tracking-wide border-b border-white pb-2">
              {t('smTitle3')}
            </h3>
            <p className="text-white leading-relaxed text-lg px-2">
              {t('smDesc3')}
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-white font-['Aboreto'] uppercase text-xl md:text-2xl mb-8">
            {t('smReadyText')}
          </p>
          <a 
            href="#booking"
            className="border border-[#DDE9CD] text-white font-['Aboreto'] font-bold uppercase tracking-wider px-10 py-5 hover:bg-white hover:text-[#141B4D] transition-colors duration-300 shadow-md inline-block"
          >
            {t('makeAppointment')}
          </a>
        </div>

      </div>
    </section>
  );
}
