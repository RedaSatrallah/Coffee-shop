
import backgroundImage from "../../assets/Rectangle83.png";


export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Background image */}
      <img
        src={backgroundImage}
        alt="Coffee background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="text-white max-w-xl sm:max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-instrument-serif mb-2 leading-tight">
            WHERE EVERY BEAN
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-instrument-serif mb-6 leading-tight">
            TELLS A STORY
          </h1>
          <p className="text-[0.8rem] md:text-[1rem] mb-8 text-gray-200 font-instrument-sans">
            Thoughtfully sourced coffees, crafted to elevate everyday moments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-peach-light text-black font-semibold font-instrument-sans rounded-lg hover:bg-peach transition">
              Subscribe
            </button>
            <button className="px-8 py-3 border-2 border-peach-light text-white font-semibold font-instrument-sans rounded-lg bg-peach/20 hover:bg-peach hover:text-black hover:border-peach transition">
              Discover
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
