import { useState, useEffect } from "react";
import CoffeeCard from "../../components/common/CoffeeCard.component";
import Filters from "../../components/common/Filters.component";
import Footer from "../../components/layouts/Footer";
import PeachLayout from "../../components/layouts/PeachLayout";

export default function Coffeespage() {
  const [coffees, setCoffees] = useState([]);
  const [filteredCoffees, setFilteredCoffees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCoffees = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/Coffees`);
        const data = await res.json();
        setCoffees(data);
        setFilteredCoffees(data); // initially show all
      } catch (err) {
        console.error("Error fetching coffees:", err);
      }
      setLoading(false);
    };

    fetchCoffees();
  }, []);

  // Apply filters
const handleApplyFilters = (filters) => {
  if (!filters) {
    setFilteredCoffees(coffees); // clear filters
    return;
  }

  const result = coffees.filter((coffee) => {
    // Roast Level
    if (filters.roastLevel?.length && !filters.roastLevel.includes(coffee.roastLevel))
      return false;

    // Taste Profile
    if (filters.tasteProfile?.length && !coffee.tasteProfile.some((t) => filters.tasteProfile.includes(t)))
      return false;

    // Intensity
    if (filters.intensity?.length && !filters.intensity.includes(coffee.intensity))
      return false;

    // Origin
    if (filters.origin?.length && !filters.origin.includes(coffee.origin)) return false;

    // Price (just compare number)
    if (filters.price !== undefined && coffee.price > filters.price) return false;

    return true;
  });

  setFilteredCoffees(result);
};


  return (
    <PeachLayout>
      <div className="max-w-3xl mx-auto py-10 text-center">
        <h1 className="text-5xl text-brown font-instrument-serif mt-10">Our Coffees</h1>
        <p className="font-instrument-sans text-sm mt-2 italic">
          Choose from a wide variety of coffee from the top roasters in the US.
          <br />
          All our specialty coffee is roasted to order and shipped fresh to your door.
        </p>
      </div>

      <div className="flex gap-10 px-10">
        <Filters coffees={coffees} onApply={handleApplyFilters} />

        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {loading ? (
            <p className="col-span-full text-center">Loading...</p>
          ) : filteredCoffees.length > 0 ? (
            filteredCoffees.map((coffee) => <CoffeeCard key={coffee._id} coffee={coffee} />)
          ) : (
            <p className="text-gray-500 col-span-full text-center">No coffees found.</p>
          )}
        </section>
      </div>

      <Footer />
    </PeachLayout>
  );
}
