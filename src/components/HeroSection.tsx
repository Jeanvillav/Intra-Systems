export default function HeroSection() {
  return (
    <section className="w-full bg-hero px-4 py-16 flex flex-col items-center text-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed tracking-wide text-white uppercase">
          HERE IS HOW WE GIVE YOU <span className="text-highlight">TOTAL CONTROL OF GINGIVAL MARGINS, FLUIDS, AND MOISTURE IN UNDER 1 MINUTE</span>, ALLOWING YOU TO ACHIEVE FAST DETAILED IMPRESSIONS AND FLAWLESS RESTORATIONS EVERY TIME, <span className="text-highlight">WITHOUT USING COMPLICATED, TIME-CONSUMING RETRACTION CORDS.</span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-white uppercase tracking-wider">
          (WITHOUT COMPLEX IMPLEMENTATIONS OR BREAKING THE BANK)
        </p>

        <div className="my-12 relative w-full pt-[56.25%] bg-black border-2 border-white/20 rounded-lg shadow-2xl overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/50">
            <span className="mb-2">▶ Enable sound</span>
            <span>[ 5-Minute Video Pitch Placeholder ]</span>
          </div>
        </div>

        <a href="#booking" className="btn-primary">
          MAKE AN APPOINTMENT
        </a>
      </div>
    </section>
  );
}
