import beans from "../../assets/coffee-beans.jpg";
import espresso from "../../assets/espresso.jpg";
import powder from "../../assets/coffee-powder.jpg";

export default function ProductSection() {
  return (
    <section className="bg-[#7B553A] py-20">
      
      {/* Title */}
      <h2 className="text-center text-white text-xl tracking-widest mb-12">
        OUR PRODUCTS
      </h2>

      {/* Grid */}
<div className="max-w-4xl mx-auto grid grid-cols-3 grid-rows-2">

        {/* Image 1 */}
        <div className="aspect-square">
          <img
            src={beans}
            alt="Coffee Beans"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Coffee Machines */}
        <div className="aspect-square bg-brown text-white flex flex-col justify-center items-center text-center px-6">
          <h3 className="text-xl font-serif mb-2">Coffee Machines</h3>
          <p className="text-sm opacity-80 mb-4">Highest Quality Offered</p>
          <button className="bg-white text-black px-4 py-2 text-xs rounded font-medium">
            SHOP NOW
          </button>
        </div>

        {/* Image 2 */}
        <div className="aspect-square">
          <img
            src={powder}
            alt="Coffee Powder"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Coffee Beans */}
        <div className="aspect-square bg-brown text-white flex flex-col justify-center items-center text-center px-6">
          <h3 className="text-xl font-serif mb-2">Coffee Beans</h3>
          <p className="text-sm opacity-80 mb-4">Highest Quality Offered</p>
          <button className="bg-white text-black px-4 py-2 text-xs rounded font-medium">
            SHOP NOW
          </button>
        </div>

        {/* Image 3 */}
        <div className="aspect-square">
          <img
            src={espresso}
            alt="Espresso"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Coffee Powder */}
        <div className="aspect-square bg-brown text-white flex flex-col justify-center items-center text-center px-6">
          <h3 className="text-xl font-serif mb-2">Coffee Powder</h3>
          <p className="text-sm opacity-80 mb-4">
            Aiming to serve a fresh quality Cup
          </p>
          <button className="bg-white text-black px-4 py-2 text-xs rounded font-medium">
            SHOP NOW
          </button>
        </div>

      </div>
 
    </section>
  );
}
