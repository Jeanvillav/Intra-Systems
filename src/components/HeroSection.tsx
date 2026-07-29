import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('HeroSection');
  const tGlobal = useTranslations();

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#141B4D] px-4 pt-28 pb-16 flex flex-col items-center text-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-relaxed md:leading-relaxed lg:leading-relaxed tracking-wide text-white uppercase">
          {t('titlePrefix')} <span className="text-highlight">{t('titleHighlight1')}</span>{t('titleMiddle')}<span className="text-highlight">{t('titleHighlight2')}</span>
        </h1>
        
        <hr className="my-8 border-white/40 w-full" />

        <p className="mt-8 mb-12 text-xl md:text-2xl text-white uppercase tracking-wider font-serif">
          {t('subtitle')}
        </p>

        <div className="mb-12 relative w-full pt-[56.25%] bg-black border-2 border-white/20 rounded-lg shadow-2xl overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Hv8_lFwsaQs?autoplay=1&mute=1&rel=0"
            title="Intra-Systems Pitch"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <button 
          onClick={scrollToBooking}
          className="border border-white text-white bg-transparent font-['Aboreto'] font-bold uppercase tracking-wider px-10 py-5 hover:bg-white hover:text-[#141B4D] transition-colors duration-300 shadow-md"
        >
          {tGlobal('makeAppointment')}
        </button>
      </div>
    </section>
  );
}
