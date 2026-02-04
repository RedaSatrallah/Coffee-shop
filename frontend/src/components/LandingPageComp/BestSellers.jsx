import image from "../../assets/Rectangle83.png";
export default function BestSellers() {
  const products = [
    {
      title: "Law Breakers - Espresso Blend",
      image: image,
    },
    {
      title: "Ethiopia - Amity Brothers",
      image: image,
    },
    {
      title: "Columbian Brew Coffee",
      image: image,
    },
  ];

  return (
    <section className="bg-charcoal py-20">
      <h2 className="text-center text-peach-light text-3xl tracking-widest mb-12">
        OUR BEST SELLERS
      </h2>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3 px-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-dark-brown rounded-2xl pb-4 text-center shadow-lg"
          >
            <div className="overflow-hidden rounded-t-xl mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
            </div>

            <h3 className="text-white text-sm uppercase tracking-wide mb-4 font-semibold">
              {product.title}
            </h3>

            <button className="bg-white font-semibold text-black text-xs px-4 py-2 rounded-md hover:bg-gray-200 transition">
              SHOP NOW
            </button>
          </div>
        ))}
      </div>
    </section>
  );}
