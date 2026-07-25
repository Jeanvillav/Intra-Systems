import Image from "next/image";

export default function LetterSection() {
  return (
    <section className="w-full bg-[var(--color-accent-green)] px-4 py-16 flex flex-col items-center text-[#091124]">
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-12">
          WORKING TOGETHER FOR BETTER DENTISTRY.
        </h2>

        <div className="text-lg md:text-xl text-left space-y-6 font-medium">
          <p>Dear Dental Practice Owner/Associate,</p>
          <p>
            Applying retraction cord can turn an otherwise straightforward task into a laborious one.
          </p>
          <p>And you know this already...</p>
          <ul className="space-y-4 pl-4">
            <li>* It is frustrating,</li>
            <li>* It is difficult to control blood & fluids,</li>
            <li>* It is stressful,</li>
          </ul>
          
          <p className="font-bold pt-4 uppercase">
            TL;DR- <span className="underline decoration-2 underline-offset-4">RETRACTION CORD DOES NOT MAKE IT EASY...</span>
          </p>

          <p className="font-bold pt-6 text-xl">The Solution Means:</p>
          <ul className="space-y-4">
            <li>You don't have to worry about how many cords to use.</li>
            <li>You don't have to worry about waiting for bleeding to stop.</li>
            <li>You don't have to worry about gums colapsing.</li>
          </ul>

          <div className="w-full flex justify-center py-8">
            <div className="relative w-full max-w-2xl h-[600px]">
              <Image 
                src="/diagrama.jpeg" 
                alt="Retraction Cord vs Diode Laser" 
                fill 
                className="object-contain"
              />
            </div>
          </div>

          <p className="font-bold text-xl pt-4">Instead...</p>
          <ul className="space-y-4 pl-4">
            <li>* You get a quick and easy lateral retraction.</li>
            <li>* You get instant hemostasis.</li>
            <li>* You get total moisture control.</li>
            <li>* You get perfect clear margins every time.</li>
            <li>* You are guaranteed result in under ONE minute.</li>
            <li>* You get to speed up your procedures 3X.</li>
          </ul>

          <p className="font-bold text-2xl uppercase pt-8">The Solution: Soft Tissue Lasers!</p>
          <p>
            Perfect clear margins and all the new production revenue comes from the soft tissue applications which most practices don't have a good way of doing.
          </p>

          <p className="font-bold text-2xl uppercase text-center pt-8 tracking-widest">
            THAT'S THE DIFFERENCE.
          </p>

          <div className="bg-[#141B4D] text-white p-8 mt-12 text-center rounded-lg space-y-6">
            <h3 className="text-xl md:text-2xl font-bold uppercase leading-relaxed text-yellow-400">
              IF YOU ARE INTERESTED TO LEARN MORE ABOUT SOFT TISSUE LASERS...<br/>BOOK A CALL WITH ME OR MY TEAM.
            </h3>
            <p className="text-lg">We will explain exactly how this approach would work for your dental practice.</p>
            <p className="text-lg">This call is not a hard sell.<br/>It's simply giving you the information you need to either say:<br/>Yes... or No.</p>
            <p className="text-lg font-bold">Click the button below.<br/>Book a time and date that works for you.</p>
            <p className="text-xl font-bold uppercase text-yellow-400">Talk soon!</p>
            
            <div className="pt-6">
              <a href="#booking" className="bg-yellow-400 text-[#141B4D] border-2 border-yellow-400 px-8 py-4 uppercase tracking-wider font-bold hover:bg-transparent hover:text-yellow-400 transition-all duration-300 inline-block cursor-pointer">
                MAKE AN APPOINTMENT
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
