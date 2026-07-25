export default function SolutionSection() {
  return (
    <section className="w-full bg-white px-4 py-16 flex flex-col items-center text-[#091124]">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-12 text-lg">
          
          <div className="flex-1 space-y-6 relative">
            <h3 className="font-bold uppercase text-xl">Retraction cord</h3>
            <div className="border-l-4 border-yellow-400 pl-6 space-y-3 font-medium">
              <p>* Time-consuming</p>
              <p>* Technique sensitive</p>
              <p>* Multiple cord size</p>
              <p>* Stressful</p>
              <p>* Blood & moisture</p>
              <p>* Tedious</p>
              <p>* Bad taste for patients</p>
            </div>
          </div>

          <div className="flex-1 space-y-6 relative">
            <h3 className="font-bold uppercase text-xl flex items-center gap-2">
              <span className="bg-green-500 text-white rounded-sm w-6 h-6 flex items-center justify-center text-sm">✓</span>
              Diode Laser
            </h3>
            <div className="border-l-4 border-teal-300 pl-6 space-y-6 font-medium h-full justify-center flex flex-col">
              <p>* Perfect margins 1 minute</p>
              <p>* Speed up your procedures 3X</p>
              <p>* Total hemostasis</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-black uppercase text-center mt-16 tracking-wide">
          THAT IS THE DIFFERENCE !...
        </h2>

        <div className="mt-16 text-center">
          <a href="#booking" className="border-2 border-[#091124] text-[#091124] px-8 py-4 uppercase tracking-wider font-bold hover:bg-[#091124] hover:text-white transition-all duration-300 inline-block cursor-pointer">
            MAKE AN APPOINTMENT
          </a>
        </div>
      </div>
    </section>
  );
}
