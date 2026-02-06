export default function HowItWorks() {
  return (
    <section className="bg-peach py-20">
      <h2 className="text-center text-brown text-xl tracking-widest mb-12 font-semibold">
        HOW IT WORKS ?
      </h2>

      <div className="flex flex-col items-center gap-12 md:gap-0 px-6 sm:px-20">
        {/* Top row with Step 1 and Step 3 */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-brown">
              <img  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full" src="/assets/step1.jpg" alt="step1"/>
            </div>
            <div className="mt-4 text-center">
              <h4 className="font-robotoSerif font-bold text-lg">STEP 1 — We source rare beans</h4>
              <p className="font-instrument-sans italic text-sm mt-2">Single-origin coffee from limited harvests</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-brown">
              <img  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full" src="/assets/step3.jpg" alt="step3"/>
            </div>
            <div className="mt-4 text-center">
              <h4 className="font-robotoSerif font-bold text-lg">STEP 3 — Monthly Delivery</h4>
              <p className="font-instrument-sans italic text-sm mt-2">Whole bean or ground, tailored to you</p>
            </div>
          </div>
        </div>

        {/* Step 2 centered below */}
        <div className="flex flex-col items-center -mt-6">
          <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-brown">
            <img  className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full" src="/assets/step2.jpg" alt="step2"/>
          </div>
          <div className="mt-4 text-center">
            <h4 className="font-robotoSerif font-bold text-lg">STEP 2 — Roasted in batches</h4>
            <p className="font-instrument-sans italic text-sm mt-2">Freshly roasted for peak flavor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

