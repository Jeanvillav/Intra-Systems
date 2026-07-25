export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white px-4 py-16 flex flex-col items-center text-[#091124]">
      <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">TESTIMONIALS</h2>
      <h3 className="text-3xl font-bold uppercase mb-16">OUR CLIENT REVIEWS</h3>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Testimonial 1 */}
        <div className="bg-gray-50 p-8 flex flex-col shadow-sm border border-gray-100">
          <p className="italic text-lg text-gray-700 flex-grow mb-12">
            "Everything is great, I have used it a few times and I have to say I am really impresed. The quality and performance have exceeded my expectations, and it's been a pleasure to use. It’s reliable, easy to use, and definitely worth it. I am very happy with it."
          </p>
          <div className="mt-auto">
            <div className="w-12 h-12 mb-4 text-yellow-500">
              {/* Logo Placeholder */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5l6.5 6.5-6.5 6.5-6.5-6.5L12 5.5z"/></svg>
            </div>
            <p className="font-bold uppercase tracking-wide">Dr. Ruxandra.</p>
            <p className="uppercase tracking-wide">3 Dental Dublin.</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-50 p-8 flex flex-col shadow-sm border border-gray-100">
          <p className="italic text-lg text-gray-700 flex-grow mb-12">
            "I have been using the laser and it is performing just as I hoped. It’s been reliable, smooth, and overall a great experience. Looking forward to more results with continued use."
          </p>
          <div className="mt-auto">
            <div className="w-12 h-12 mb-4 text-yellow-500">
              {/* Logo Placeholder */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5l6.5 6.5-6.5 6.5-6.5-6.5L12 5.5z"/></svg>
            </div>
            <p className="font-bold uppercase tracking-wide">Dr. Brent.</p>
            <p className="uppercase tracking-wide">Chapel House Dentistry.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
