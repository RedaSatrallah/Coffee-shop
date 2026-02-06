export default function ProductSection() {
  return (
    <section className="bg-[#7B553A] py-20">
      {/* Title */}
      <h2 className="text-center text-white text-xl md:text-xl tracking-widest mb-12">
        OUR PRODUCTS
      </h2>

      {/* Desktop Layout (unchanged) */}
      <div className="hidden md:grid max-w-4xl mx-auto grid-cols-3 grid-rows-2 gap-0">
        {/* Image 1 */}
        <div className="aspect-square">
          <img src="/assets/coffee-beans.jpg" alt="Coffee Beans" className="w-full h-full object-cover" />
        </div>

        {/* Coffee Machines */}
        <div className="aspect-square border-b-2 border-peach md:border-none bg-brown text-white flex flex-col justify-center items-center text-center px-6">
          <h3 className="text-4xl font-instrument-serif mb-1 font-medium">Coffee Machines</h3>
          <hr className="w-20 mb-6"></hr>
          <p className="text-sm font-instrument-sans opacity-80 mb-4">Highest Quality Offered</p>
          <button className="bg-white text-black px-4 py-2 text-xs rounded font-medium">
            SHOP NOW
          </button>
        </div>

        {/* Image 2 */}
        <div className="aspect-square">
          <img src="/assets/coffeepowder.jpg" alt="CoffeePowder" className="w-full h-full object-cover" />
        </div>

        {/* Coffee Beans */}
        <div className="aspect-square border-2 border-x-0 border-t-0 border-peach md:border-none bg-brown text-white flex flex-col justify-center items-center text-center px-6">
          <h3 className="text-4xl font-instrument-serif mb-1">Coffee Beans</h3>
          <hr className="w-20 mb-6"></hr>
          <p className="text-sm font-instrument-sans opacity-80 mb-4">Highest Quality Offered</p>
          <button className="bg-white text-black px-4 py-2 text-xs rounded font-medium">
            SHOP NOW
          </button>
        </div>

        {/* Image 3 */}
        <div className="aspect-square">
          <img src="/assets/machine.jpg" alt="machine" className="w-full h-full object-cover" />
        </div>

        {/* Coffee Powder */}
        <div className="aspect-square bg-brown text-white flex flex-col justify-center items-center text-center px-6">
          <h3 className="text-4xl font-instrument-serif mb-1">Coffee Powder</h3>
          <hr className="w-20 mb-6"></hr>
          <p className="text-sm font-instrument-sans opacity-80 mb-4">
            Aiming to serve a fresh quality Cup
          </p>
          <button className="bg-white text-black px-4 py-2 text-xs rounded font-medium">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Mobile Layout - glued squares, no gaps */}
      <div className="md:hidden mx-auto w-full max-w-[500px] gap-0">
        {/* Beans Row */}
        <div className="flex w-full gap-0">
          <div className="aspect-square w-1/2">
            <img src="/assets/coffee-beans.jpg" alt="Coffee Beans" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square w-1/2 border-b-2 border-peach bg-brown text-white flex flex-col justify-center items-center text-center px-6">
            <h3 className="text-3xl md:text-4xl  font-instrument-serif mb-1">Coffee Beans</h3>
            <hr className="w-20 mb-6"></hr>
            <p className="text-sm font-instrument-sans opacity-80 mb-4">Highest Quality Offered</p>
            <button className="bg-white text-black px-4 py-2 text-xs rounded font-medium">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Machines Row */}
        <div className="flex w-full gap-0">
          <div className="aspect-square w-1/2">
            <img src="/assets/machine.jpg" alt="Coffee Machines" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square w-1/2 border-b-2 border-peach bg-brown text-white flex flex-col justify-center items-center text-center px-6">
            <h3 className="text-3xl md:text-4xl font-instrument-serif mb-1 font-medium">Coffee Machines</h3>
            <hr className="w-20 mb-6"></hr>
            <p className="text-sm font-instrument-sans opacity-80 mb-4 tracking-[0.9px]">Highest Quality Offered</p>
            <button className="bg-white text-black px-4 py-2 text-xs rounded font-medium">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Powder Row */}
        <div className="flex w-full gap-0">
          <div className="aspect-square w-1/2">
            <img src="/assets/coffeepowder.jpg" alt="Coffee Powder" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square w-1/2 border-b-2 border-peach bg-brown text-white flex flex-col justify-center items-center text-center px-6">
            <h3 className="text-3xl md:text-4xl  font-instrument-serif mb-1">Coffee Powder</h3>
            <hr className="w-20 mb-6"></hr>
            <p className="text-sm font-instrument-sans opacity-80 mb-4">
              Aiming to serve a fresh quality Cup
            </p>
            <button className="bg-white text-black px-4 py-2 text-xs rounded font-medium">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
