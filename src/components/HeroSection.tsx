export default function HeroSection() {
  return (
    <section className="w-full bg-hero px-4 py-16 flex flex-col items-center text-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-relaxed md:leading-relaxed lg:leading-relaxed tracking-wide text-white uppercase">
          HERE IS HOW WE GIVE YOU <span className="text-highlight">TOTAL CONTROL OF GINGIVAL MARGINS, FLUIDS, AND MOISTURE IN UNDER 1 MINUTE</span>, ALLOWING YOU TO ACHIEVE FAST DETAILED IMPRESSIONS AND FLAWLESS RESTORATIONS EVERY TIME, <span className="text-highlight">WITHOUT USING COMPLICATED, TIME-CONSUMING RETRACTION CORDS.</span>
        </h1>
        
        <hr className="my-8 border-white/40 w-full" />

        <p className="mt-8 mb-12 text-xl md:text-2xl text-white uppercase tracking-wider font-serif">
          (WITHOUT COMPLEX IMPLEMENTATIONS OR BREAKING THE BANK)
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

        <a href="#booking" className="btn-primary">
          MAKE AN APPOINTMENT
        </a>
      </div>
    </section>
  );
}
