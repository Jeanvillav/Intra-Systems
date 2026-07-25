export default function ProblemSection() {
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
          
          <p className="font-bold pt-4">
            TL;DR- <span className="underline decoration-2 underline-offset-4">RETRACTION CORD DOES NOT MAKE IT EASY...</span>
          </p>
        </div>
      </div>
    </section>
  );
}
