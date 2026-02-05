import step1 from "../../assets/step1.jpg";
import step2 from "../../assets/step2.jpg";
import step3 from "../../assets/step3.jpg";

export default function HowItWorks() {
  return (
    <section className="bg-peach py-20">
      <h2 className="text-center text-brown text-xl tracking-widest mb-12 font-semibold">
        HOW IT WORKS ?
      </h2>

      <div className="flex flex-col items-center gap-16 px-6 sm:px-20">
        {/* Top row with Step 1 and Step 3 */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-20">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div
              className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${step1})`,
                boxShadow: "0 15px 35px #1B1515", // prominent brown shadow
              }}
            ></div>
            <div className="mt-4 text-center">
              <h4 className="font-robotoSerif font-bold text-lg">
                STEP 1 — We source rare beans
              </h4>
              <p className="font-instrument-sans italic text-sm mt-2">
                Single-origin coffee from limited harvests
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div
              className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${step3})`,
                boxShadow: "0 15px 35px #1B1515", // brown shadow
              }}
            ></div>
            <div className="mt-4 text-center">
              <h4 className="font-robotoSerif font-bold text-lg">
                STEP 3 — Monthly Delivery
              </h4>
              <p className="font-instrument-sans italic text-sm mt-2">
                Whole bean or ground, tailored to you
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 centered below and raised higher */}
        <div className="flex flex-col items-center -mt-20 sm:-mt-24">
          <div
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${step2})`,
              boxShadow: "0 15px 35px #1B1515", // stronger brown shadow
            }}
          ></div>
          <div className="mt-4 text-center">
            <h4 className="font-robotoSerif font-bold text-lg">
              STEP 2 — Roasted in batches
            </h4>
            <p className="font-instrument-sans italic text-sm mt-2">
              Freshly roasted for peak flavor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
