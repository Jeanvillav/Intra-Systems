export default function PillarsSection() {
  return (
    <div className="w-full">
      {/* 1. 3 Pillars */}
      <section className="w-full bg-[#F9F9F9] px-4 py-24 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-16 text-[#141B4D] max-w-4xl leading-tight">
          Achieve practice growth, patient loyalty and love laser dentistry
        </h2>
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-[#091124] p-10 flex flex-col items-start rounded-xl shadow-sm border border-gray-100">
            <div className="bg-[#141B4D] text-white p-3 rounded-md mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 font-serif text-[#141B4D]">Patient Growth</h4>
            <p className="font-normal text-base leading-relaxed text-gray-800">Attracts more patients effortlessly, helping you grow your practice.</p>
            <p className="font-normal text-base leading-relaxed text-gray-800 mt-4">Retain more patients, allows you to handle more treatments in-house keeping patients with you.</p>
          </div>
          <div className="bg-[#DDE9CD] text-[#091124] p-10 flex flex-col items-start rounded-xl">
            <div className="text-[#141B4D] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm9 6.845v-4.103a1.996 1.996 0 0 0-1.127-1.796L16.275 9.17A8.956 8.956 0 0 0 12 14c-4.97 0-9 4.03-9 9v1h5.366c.214-2.827 2.05-5.183 4.634-6.026V13l7.009 3.504A1.002 1.002 0 0 1 21 17.399v1.446c0 1.259-2.071 3.525-5 4.975v2.244c4.372-1.921 7-5.176 7-7.219z"/></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 font-serif text-[#141B4D]">Patient loyalty</h4>
            <p className="font-normal text-base leading-relaxed text-gray-800">Achieve balance, and cultivate patient loyalty. Elevate your dental practice with lasting patient relationships and the success you deserve, offering new procedures patients want and need.</p>
          </div>
          <div className="bg-[#F5F5F5] text-[#091124] p-10 flex flex-col items-start rounded-xl">
            <div className="text-[#141B4D] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            </div>
            <h4 className="font-bold text-xl mb-4 font-serif text-[#141B4D]">Love laser dentistry</h4>
            <p className="font-normal text-base leading-relaxed text-gray-800">All the new production comes from the soft tissue and photobiomodulation applications that most practices don't have a good way of doing, this means you'll have the ability to do them very quickly very easily and profitably.</p>
            <p className="font-normal text-base leading-relaxed text-gray-800 mt-4">Lasers are versatile and suitable for every dental specialty, bringing passion and purpose to your dentistry.</p>
          </div>
        </div>
      </section>

      {/* 2. The Smarter Solution */}
      <section className="w-full bg-[#F3F4F6] px-4 py-24 flex flex-col items-center">
        <h3 className="text-3xl md:text-5xl font-serif text-center mb-16 text-[#141B4D] max-w-4xl">
          Lasers are the smarter solution for dental practices...
        </h3>

        <div className="w-full max-w-4xl mb-16 relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <img 
            src="/diagrama.jpeg" 
            alt="Laser vs Retraction Cord Diagram" 
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-2xl font-serif text-[#141B4D] mb-4">Delivers affordability</h4>
            <p className="text-gray-700 text-lg">Keeps costs under control without compromising quality, ensuring excellent value for your investment</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-2xl font-serif text-[#141B4D] mb-4">Delivers Patient Growth</h4>
            <p className="text-gray-700 text-lg">Attracts new patients in autopilot, helping your practice stand out in a competitive market</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-2xl font-serif text-[#141B4D] mb-4">Delivers Guaranteed ROI</h4>
            <p className="text-gray-700 text-lg">Offering tangible results you can count on to grow your practice sustainably</p>
          </div>
        </div>

        <div className="mt-20 text-center space-y-6">
          <h4 className="text-xl md:text-2xl font-serif text-[#141B4D]">
            If you are ready to learn more about lasers
          </h4>
          <p className="text-lg md:text-xl font-serif text-[#141B4D] pb-4">
            book a call with me or my team
          </p>
          <a href="#booking" className="bg-transparent text-[#141B4D] border border-[#141B4D] px-10 py-4 font-bold text-sm tracking-widest hover:bg-[#141B4D] hover:text-white transition-all duration-300 inline-block cursor-pointer uppercase">
            MAKE AN APPOINTMENT
          </a>
        </div>
      </section>

      {/* 3. Without Lasers vs With Lasers */}
      <section className="flex flex-col md:flex-row w-full text-center">
        <div className="flex-1 bg-white px-6 py-20 text-[#091124] flex flex-col items-center">
          <h3 className="font-bold font-serif text-3xl mb-12 text-[#141B4D]">Without Lasers:</h3>
          <ul className="space-y-8 max-w-md text-left font-normal text-lg">
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-xl">×</span> <span className="pt-1">You lose patients to practices offering faster, more comfortable treatments.</span></li>
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-xl">×</span> <span className="pt-1">Referral rates increase, reducing revenue and patient loyalty.</span></li>
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-xl">×</span> <span className="pt-1">Traditional methods limit efficiency, treatment options, and practice growth.</span></li>
            <li className="flex gap-4 items-start"><span className="text-red-500 font-bold text-xl">×</span> <span className="pt-1">You blend in with every other clinic, competing for the same patients who don't see any distinction between practices.</span></li>
            <li className="flex gap-4 items-start font-semibold mt-4">Without them, it's harder to attract and retain patients.</li>
          </ul>
        </div>
        <div className="flex-1 bg-[#DDE9CD] px-6 py-20 text-[#091124] flex flex-col items-center border-l border-gray-200">
          <h3 className="font-bold font-serif text-3xl mb-12 text-[#141B4D]">With Lasers:</h3>
          <ul className="space-y-8 max-w-md text-left font-normal text-lg">
            <li className="flex gap-4 items-start text-[#141B4D]"><span className="font-bold text-xl">✓</span> <span className="pt-1">Provide faster, more comfortable treatments that patients love.</span></li>
            <li className="flex gap-4 items-start text-[#141B4D]"><span className="font-bold text-xl">✓</span> <span className="pt-1">Perform advanced procedures in-house, reducing referrals and boosting revenue.</span></li>
            <li className="flex gap-4 items-start text-[#141B4D]"><span className="font-bold text-xl">✓</span> <span className="pt-1">Attract new patients effortlessly, improve efficiency, and build long-term loyalty. Achieve professional success.</span></li>
            <li className="flex gap-4 items-start text-[#141B4D]"><span className="font-bold text-xl">✓</span> <span className="pt-1">Total pain management, precise fluid and blood control, essential particulary during composite restorations.</span></li>
            <li className="flex gap-4 items-start font-semibold mt-4 text-[#141B4D]">Perform them quickly, easily, and profitably— Lasers are versatile and suitable for every dental specialty, reigniting your passion and purpose for dentistry.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
