import { useTranslations } from 'next-intl';

export default function ComparisonSection() {
  const t = useTranslations();

  return (
    <section className="bg-transparent py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          {/* Without Lasers Column */}
          <div className="bg-[#DDE9CD] p-8 md:p-12 border border-transparent shadow-sm flex flex-col">
            <h2 className="font-['Aboreto'] text-[#141B4D] text-2xl md:text-3xl uppercase font-bold mb-8">
              {t('cmpTitle1')}
            </h2>
            <ul className="text-gray-900 space-y-6 text-lg leading-relaxed flex-grow">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1"><i className="fas fa-times-circle"></i></span>
                <span>{t('cmpDesc1a')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1"><i className="fas fa-times-circle"></i></span>
                <span>{t('cmpDesc1b')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1"><i className="fas fa-times-circle"></i></span>
                <span>{t('cmpDesc1c')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1"><i className="fas fa-times-circle"></i></span>
                <span>{t('cmpDesc1d')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1"><i className="fas fa-times-circle"></i></span>
                <span>{t('cmpDesc1e')}</span>
              </li>
            </ul>
          </div>

          {/* With Lasers Column */}
          <div className="bg-white p-8 md:p-12 border border-transparent shadow-xl flex flex-col transform md:-translate-y-4">
            <h2 className="font-['Aboreto'] text-[#141B4D] text-2xl md:text-3xl uppercase font-bold mb-8 flex items-center">
              <span className="text-[#141B4D] mr-3"><i className="fas fa-check-circle"></i></span>
              {t('cmpTitle2')}
            </h2>
            <ul className="text-gray-900 space-y-6 text-lg leading-relaxed flex-grow">
              <li className="flex items-start">
                <span className="text-[#141B4D] mr-3 mt-1"><i className="fas fa-check"></i></span>
                <span>{t('cmpDesc2a')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#141B4D] mr-3 mt-1"><i className="fas fa-check"></i></span>
                <span>{t('cmpDesc2b')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#141B4D] mr-3 mt-1"><i className="fas fa-check"></i></span>
                <span>{t('cmpDesc2c')}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
