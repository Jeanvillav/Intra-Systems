export default function PillarsSection() {
  return (
    <div className="w-full">
      {/* Without Lasers vs With Lasers */}
      <section className="flex flex-col md:flex-row w-full text-center">
        <div className="flex-1 bg-[var(--color-accent-green)] px-6 py-16 text-[#091124] flex flex-col items-center">
          <h3 className="font-bold text-2xl uppercase mb-8">Without Lasers</h3>
          <ul className="space-y-6 max-w-sm text-left font-medium">
            <li className="flex gap-2"><span>×</span> You lose patients to practices offering faster, more comfortable treatments.</li>
            <li className="flex gap-2"><span>×</span> Referral rates stall.</li>
            <li className="flex gap-2"><span>×</span> Traditional methods limit efficiency and production.</li>
          </ul>
        </div>
        <div className="flex-1 bg-white px-6 py-16 text-[#091124] flex flex-col items-center">
          <h3 className="font-bold text-2xl uppercase mb-8">With Lasers</h3>
          <ul className="space-y-6 max-w-sm text-left font-medium">
            <li className="flex gap-2 text-green-600"><span className="font-bold">✓</span> Provide faster, more comfortable treatments.</li>
            <li className="flex gap-2 text-green-600"><span className="font-bold">✓</span> Perform advanced procedures in-house.</li>
            <li className="flex gap-2 text-green-600"><span className="font-bold">✓</span> Attract new patients effortlessly.</li>
          </ul>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="w-full bg-white px-4 py-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-black uppercase text-center mb-16 text-[#091124] max-w-3xl">
          ACHIEVE PRACTICE GROWTH, PATIENT LOYALTY AND LOVE LASER DENTISTRY
        </h2>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--color-accent-green)] text-[#091124] p-8 text-center flex flex-col items-center">
            <h4 className="font-bold text-lg uppercase mb-4">Patient Growth</h4>
            <p className="font-medium text-sm">Attracts more patients effortlessly, helping you grow your practice by offering modern, comfortable procedures.</p>
          </div>
          <div className="bg-white border-2 border-gray-100 shadow-xl text-[#091124] p-8 text-center flex flex-col items-center">
            <h4 className="font-bold text-lg uppercase mb-4">Patient Loyalty</h4>
            <p className="font-medium text-sm">Achieve balance, and cultivate patient loyalty through superior clinical outcomes and less post-op discomfort.</p>
          </div>
          <div className="bg-[var(--color-accent-green)] text-[#091124] p-8 text-center flex flex-col items-center">
            <h4 className="font-bold text-lg uppercase mb-4">Love Laser Dentistry</h4>
            <p className="font-medium text-sm">All the new production comes from the soft tissue, expanding your services and reigniting your passion for dentistry.</p>
          </div>
        </div>
      </section>

      {/* The Smarter Solution */}
      <section className="w-full bg-white px-4 pb-24 pt-8 flex flex-col items-center text-[#091124]">
        <h3 className="text-2xl font-bold uppercase text-center mb-12">
          LASERS ARE THE SMARTER SOLUTION FOR DENTAL PRACTICES...
        </h3>
        <ul className="flex flex-col md:flex-row gap-6 md:gap-12 font-bold uppercase tracking-wide mb-16">
          <li className="flex items-center gap-2"><span className="text-yellow-500 text-xl">✓</span> Delivers affordability</li>
          <li className="flex items-center gap-2"><span className="text-yellow-500 text-xl">✓</span> Delivers Patient Growth</li>
          <li className="flex items-center gap-2"><span className="text-yellow-500 text-xl">✓</span> Delivers Guaranteed ROI</li>
        </ul>

        <div className="bg-[#091124] text-white max-w-4xl w-full p-8 md:p-12 text-center rounded-sm">
          <h4 className="text-xl md:text-2xl font-semibold mb-6 uppercase">
            IF YOU ARE READY TO LEARN MORE ABOUT LASERS / BOOK A CALL WITH ME OR MY TEAM
          </h4>
          <p className="mb-10 text-gray-300 font-medium max-w-2xl mx-auto">
            This call is not a hard sell. It's simply giving you the information you need to either say: Yes... or No.
          </p>
          <a href="#booking" className="border-2 border-white px-8 py-4 uppercase tracking-wider font-bold hover:bg-white hover:text-[#091124] transition-all duration-300 inline-block cursor-pointer">
            BOOK A TIME
          </a>
        </div>
      </section>
    </div>
  );
}
