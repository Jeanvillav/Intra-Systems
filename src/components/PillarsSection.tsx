export default function PillarsSection() {
  return (
    <div className="w-full">
      {/* 1. 3 Pillars */}
      <section className="w-full bg-white px-4 py-16 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-black uppercase text-center mb-16 text-[#091124] max-w-3xl">
          ACHIEVE PRACTICE GROWTH, PATIENT LOYALTY AND LOVE LASER DENTISTRY
        </h2>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[var(--color-accent-green)] text-[#091124] p-8 text-center flex flex-col items-center">
            <h4 className="font-bold text-lg uppercase mb-4">Patient Growth</h4>
            <p className="font-medium text-sm">Attracts more patients effortlessly, helping you grow your practice.</p>
            <p className="font-medium text-sm mt-2">Retain more patients, allows you to handle more treatments in-house keeping patients with you.</p>
          </div>
          <div className="bg-white border-2 border-gray-100 shadow-xl text-[#091124] p-8 text-center flex flex-col items-center">
            <h4 className="font-bold text-lg uppercase mb-4">Patient Loyalty</h4>
            <p className="font-medium text-sm">Achieve balance, and cultivate patient loyalty.</p>
            <p className="font-medium text-sm mt-2">Elevate your dental practice with lasting patient relationships and the success you deserve, offering new procedures patients want and need.</p>
          </div>
          <div className="bg-[var(--color-accent-green)] text-[#091124] p-8 text-center flex flex-col items-center">
            <h4 className="font-bold text-lg uppercase mb-4">Love Laser Dentistry</h4>
            <p className="font-medium text-sm">All the new production comes from the soft tissue and photobiomodulation applications that most practices don't have a good way of doing, this means you'll have the ability to do them very quickly very easily and profitably.</p>
            <p className="font-medium text-sm mt-2">Lasers are versatile and suitable for every dental specialty, bringing passion and purpose to your dentistry.</p>
          </div>
        </div>
        <div className="mt-12">
          <a href="#booking" className="bg-[#141B4D] text-white border-2 border-[#141B4D] px-8 py-4 uppercase tracking-wider font-bold hover:bg-transparent hover:text-[#141B4D] transition-all duration-300 inline-block cursor-pointer">
            MAKE AN APPOINTMENT
          </a>
        </div>
      </section>

      {/* 2. The Smarter Solution */}
      <section className="w-full bg-[#141B4D] px-4 py-16 flex flex-col items-center text-white">
        <h3 className="text-2xl font-bold uppercase text-center mb-12 tracking-wide text-yellow-400">
          LASERS ARE THE SMARTER SOLUTION FOR DENTAL PRACTICES...
        </h3>
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 font-medium">
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-xl uppercase mb-2">Delivers affordability</h4>
            <p className="text-gray-300">Keeps costs under control without compromising quality, ensuring excellent value for your investment.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-xl uppercase mb-2">Delivers Patient Growth</h4>
            <p className="text-gray-300">Attracts new patients in autopilot, helping your practice stand out in a competitive market.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-xl uppercase mb-2">Delivers Guaranteed ROI</h4>
            <p className="text-gray-300">Offering tangible results you can count on to grow your practice sustainably.</p>
          </div>
        </div>

        <div className="mt-16 text-center space-y-8">
          <h4 className="text-xl md:text-2xl font-semibold uppercase">
            IF YOU ARE READY TO LEARN MORE ABOUT LASERS BOOK A CALL WITH ME OR MY TEAM
          </h4>
          <a href="#booking" className="bg-yellow-400 text-[#141B4D] border-2 border-yellow-400 px-8 py-4 uppercase tracking-wider font-bold hover:bg-transparent hover:text-yellow-400 transition-all duration-300 inline-block cursor-pointer">
            MAKE AN APPOINTMENT
          </a>
        </div>
      </section>

      {/* 3. Without Lasers vs With Lasers */}
      <section className="flex flex-col md:flex-row w-full text-center">
        <div className="flex-1 bg-[var(--color-accent-green)] px-6 py-16 text-[#091124] flex flex-col items-center">
          <h3 className="font-bold text-2xl uppercase mb-8">Without Lasers:</h3>
          <ul className="space-y-6 max-w-md text-left font-medium">
            <li className="flex gap-2"><span>×</span> You lose patients to practices offering faster, more comfortable treatments.</li>
            <li className="flex gap-2"><span>×</span> Referral rates increase, reducing revenue and patient loyalty.</li>
            <li className="flex gap-2"><span>×</span> Traditional methods limit efficiency, treatment options, and practice growth.</li>
            <li className="flex gap-2"><span>×</span> You blend in with every other clinic, competing for the same patients who don't see any distinction between practices.</li>
            <li className="flex gap-2 font-bold mt-4">Without them, it's harder to attract and retain patients.</li>
          </ul>
        </div>
        <div className="flex-1 bg-white px-6 py-16 text-[#091124] flex flex-col items-center border-l-2 border-gray-100">
          <h3 className="font-bold text-2xl uppercase mb-8">With Lasers:</h3>
          <ul className="space-y-6 max-w-md text-left font-medium">
            <li className="flex gap-2 text-green-600"><span className="font-bold">✓</span> Provide faster, more comfortable treatments that patients love.</li>
            <li className="flex gap-2 text-green-600"><span className="font-bold">✓</span> Perform advanced procedures in-house, reducing referrals and boosting revenue.</li>
            <li className="flex gap-2 text-green-600"><span className="font-bold">✓</span> Attract new patients effortlessly, improve efficiency, and build long-term loyalty. Achieve professional success.</li>
            <li className="flex gap-2 text-green-600"><span className="font-bold">✓</span> Total pain management, precise fluid and blood control, essential particulary during composite restorations.</li>
            <li className="flex gap-2 font-bold mt-4">Perform them quickly, easily, and profitably— Lasers are versatile and suitable for every dental specialty, reigniting your passion and purpose for dentistry.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
