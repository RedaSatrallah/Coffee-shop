import productsData from "../../data/products.json";

export default function BestSellers() {
  const bestSellers = productsData.products.filter(
    (product) => product.isBestSeller
  );

  return (
    <section className="bg-charcoal py-20">
      <h2 className="text-center text-xl text-peach-light md:text-3xl tracking-widest mb-16">
        OUR BEST SELLERS
      </h2>

      <div
        className="
          mx-auto
          px-6
          grid gap-12
          grid-cols-1
          md:grid-cols-3
          max-w-4xl
          lg:max-w-6xl
          2xl:max-w-7xl
        "
      >
        {bestSellers.map((product) => (
          <div
            key={product.id}
            className="bg-dark-brown rounded-2xl pb-6 text-center shadow-lg"
          >
            <div className="overflow-hidden rounded-t-2xl mb-5">
              <img
                src={product.image}
                alt={product.title}
                className="
                  w-full
                  h-64
                  lg:h-80
                  2xl:h-96
                  object-cover
                "
              />
            </div>

            <h3 className="
              text-white 
              text-sm 
              lg:text-base
              uppercase 
              tracking-wide 
              mb-6 
              font-semibold
              px-4
            ">
              {product.title}
            </h3>

            <button className="
              bg-white 
              font-semibold 
              text-black 
              text-xs 
              lg:text-sm
              px-5 
              py-2.5
              rounded-md 
              hover:bg-gray-200 
              transition
            ">
              SHOP NOW
            </button>
          </div>



        ))}
      </div>


    </section>
  );
}
