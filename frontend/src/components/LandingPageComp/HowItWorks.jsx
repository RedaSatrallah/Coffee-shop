export default function HowItWorks() {
  return (
    <section className="bg-peach pt-[280px] pb-[100px]">
      <h2 className="text-center text-brown text-xl md:text-3xl tracking-widest mb-12 font-semibold">
        HOW IT WORKS ?
      </h2>
      

      <div className="flex justify-center px-6 sm:px-20">
        <div className="flex flex-col sm:flex-row gap-12 w-full max-w-7xl justify-between">
          
          {/* STEP 1 */}
          <div className="flex flex-col items-center flex-1">
<div className="
  w-[200px] h-[200px] 
  sm:w-[300px] sm:h-[300px] 
  rounded-full 
  overflow-hidden 
  bg-brown
  shadow-[0_0_35px_8px_rgba(27,21,21,0.35)]
">

              <img src="/assets/step1.jpg" alt="step1" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center max-w-xs">
              <h4 className="font-robotoSerif font-bold text-lg">
                STEP 1 — We source rare beans
              </h4>
              <p className="font-instrument-sans italic text-sm mt-2">
                Single-origin coffee from limited harvests
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col items-center flex-1">
<div className="
  w-[200px] h-[200px] 
  sm:w-[300px] sm:h-[300px] 
  rounded-full 
  overflow-hidden 
  bg-brown
  shadow-[0_0_35px_8px_rgba(27,21,21,0.35)]
">

              <img src="/assets/step2.jpg" alt="step2" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center max-w-xs">
              <h4 className="font-robotoSerif font-bold text-lg">
                STEP 2 — Roasted in batches
              </h4>
              <p className="font-instrument-sans italic text-sm mt-2">
                Freshly roasted for peak flavor
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col items-center flex-1">
<div className="
  w-[200px] h-[200px] 
  sm:w-[300px] sm:h-[300px] 
  rounded-full 
  overflow-hidden 
  bg-brown
  shadow-[0_0_35px_8px_rgba(27,21,21,0.35)]
">

              <img src="/assets/step3.jpg" alt="step3" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center max-w-xs">
              <h4 className="font-robotoSerif font-bold text-lg">
                STEP 3 — Monthly Delivery
              </h4>
              <p className="font-instrument-sans italic text-sm mt-2">
                Whole bean or ground, tailored to you
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
