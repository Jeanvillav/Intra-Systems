import { useTranslations } from 'next-intl';

export default function SmarterSolutionSection() {
  const t = useTranslations();

  return (
    <section className="bg-[#F9F9F9] py-20 px-4 border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Main Headline */}
        <h2 className="font-['Aboreto'] text-[#091124] text-3xl md:text-5xl uppercase font-bold text-center leading-tight mb-16 max-w-3xl">
          {t('smSmarterHeadline')}
        </h2>

        {/* 3 Rows (Left-aligned Checkmarks) */}
        <div className="w-full space-y-12">
          
          {/* Row 1 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-white p-4 rounded shadow-sm mr-6">
              <div className="bg-[#DDE9CD] rounded-full p-2 w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#091124]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
            <div>
              <h3 className="text-[#091124] font-bold text-xl md:text-2xl mb-2">
                {t('smTitle1')}
              </h3>
              <p className="text-[#091124] text-lg opacity-80">
                {t('smDesc1')}
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-white p-4 rounded shadow-sm mr-6">
              <div className="bg-[#DDE9CD] rounded-full p-2 w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#091124]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
            <div>
              <h3 className="text-[#091124] font-bold text-xl md:text-2xl mb-2">
                {t('smTitle2')}
              </h3>
              <p className="text-[#091124] text-lg opacity-80">
                {t('smDesc2')}
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-white p-4 rounded shadow-sm mr-6">
              <div className="bg-[#DDE9CD] rounded-full p-2 w-12 h-12 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#091124]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
            <div>
              <h3 className="text-[#091124] font-bold text-xl md:text-2xl mb-2">
                {t('smTitle3')}
              </h3>
              <p className="text-[#091124] text-lg opacity-80">
                {t('smDesc3')}
              </p>
            </div>
          </div>

        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <p className="text-[#091124] font-['Aboreto'] uppercase text-xl md:text-2xl mb-6">
            {t('smReadyText')}
          </p>
          <p className="text-[#091124] uppercase text-xl mb-10 tracking-widest font-bold">
            {t('smBookCallText')}
          </p>
          <a 
            href="#booking"
            className="border border-[#091124] text-[#091124] font-['Aboreto'] font-bold uppercase tracking-wider px-10 py-5 hover:bg-[#091124] hover:text-white transition-colors duration-300 shadow-sm inline-block rounded"
          >
            {t('makeAppointment')}
          </a>
        </div>

      </div>
    </section>
  );
}
