import Filters from "../../components/common/Filters.component";
import Footer from "../../components/layouts/Footer";
import PeachLayout from "../../components/layouts/PeachLayout";

export default function Catalogue() {
  return (
    <>
      <PeachLayout>
        <div className="max-w-3xl mx-auto py-10">
          <h1 className="text-4xl font-instrument-serif mt-10 text-center">
            Our Coffees
          </h1>
          <p className="text-center font-instrument-sans text-md mt-4">
            Choose from a wide variety of coffee from the top roasters in the
            US.
            <br />
            All our specialty coffee is roasted to order and shipped fresh to
            your door.
          </p>
        </div>

        <Filters />
      </PeachLayout>
      <Footer />
    </>
  );
}
