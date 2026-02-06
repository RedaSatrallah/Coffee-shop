export default function WhyUs() {
  return (
    <section className="bg-white py-20 px-4">
      <h2 className="text-center text-brown text-xl tracking-widest mb-16 font-semibold">
        WHY US ?
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 max-w-3xl md:max-w-6xl mx-auto">
        
        <div className="flex flex-col items-center text-center w-full">
          <img src="/assets/original.png" alt="Original" className="w-32 h-32 md:w-40 md:h-40" />
          <p className="font-instrument-sans text-sm font-thin max-w-xs mt-5">
            Carefully sourced beans from the world’s finest coffee-growing regions,
            chosen for their unique flavor and character.
          </p>
        </div>

        <div className="flex flex-col items-center text-center w-full">
          <img src="/assets/original.png" alt="Quality" className="w-32 h-32 md:w-40 md:h-40" />
          <p className="font-instrument-sans text-sm font-thin max-w-xs mt-5">
            Roasted in small batches to preserve aroma, freshness, and balance in every cup.
          </p>
        </div>

        <div className="flex flex-col items-center text-center w-full">
          <img src="/assets/original.png" alt="Trust" className="w-32 h-32 md:w-40 md:h-40" />
          <p className="font-instrument-sans text-sm font-thin max-w-xs mt-5">
            Committed to transparency, consistency, and lasting relationships with growers
            and customers alike.
          </p>
        </div>
      </div>

      {/* Divider + CTA */}
      <div className="mt-20 flex flex-col items-center max-w-3xl mx-auto">
        <hr className="w-full border-t border-brown mb-10" />

        <p className="text-2xl md:text-3xl text-center font-instrument-sans italic mb-8">
          Elevate your coffee experience.
        </p>

        <button className="bg-brown text-white rounded-lg px-6 py-2 font-instrument-sans font-semibold hover:bg-peach hover:text-brown transition">
          Subscribe
        </button>
      </div>
    </section>
  );
}
