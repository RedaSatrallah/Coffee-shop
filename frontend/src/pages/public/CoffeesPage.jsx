import { useState, useEffect } from "react";
import CoffeeCard from "../../components/common/CoffeeCard.component";
import Filters from "../../components/common/Filters.component";
import Footer from "../../components/layouts/Footer";
import PeachLayout from "../../components/layouts/PeachLayout";

export default function Coffeespage() {
  const [coffees, setCoffees] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all coffees from backend
  useEffect(() => {
    const fetchCoffees = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/api/coffees");
        const data = await res.json();
        setCoffees(data);
      } catch (error) {
        console.error("Error fetching coffees:", error);
      }
      setLoading(false);
    };

    fetchCoffees();
  }, []);

  return (
    <>
      <PeachLayout>
        <div className="max-w-3xl mx-auto py-10">
          <h1 className="text-4xl font-instrument-serif mt-10 text-center">
            Our Coffees
          </h1>
          <p className="text-center font-instrument-sans text-md mt-4">
            Choose from a wide variety of coffee from the top roasters in the US.
            <br />
            All our specialty coffee is roasted to order and shipped fresh to your door.
          </p>
        </div>

        <div className="flex gap-10 px-10">
          {/* Filters */}
          <Filters onApply={(filters) => {
            console.log("Filters applied:", filters);
            // Later: fetch filtered coffees from backend here
          }} />

          {/* Products */}
           <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            Aucun produit trouvé.
          </p>
        )}
      </section>
        </div>
      </PeachLayout>

      <Footer />
    </>
  );
}
