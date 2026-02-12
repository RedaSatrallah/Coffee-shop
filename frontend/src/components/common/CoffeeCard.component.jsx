export default function CoffeeCard({ coffee }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2 hover:shadow-lg transition">
      <img
        src={coffee.image || "/assets/default-coffee.png"}
        alt={coffee.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <h2 className="font-semibold text-lg">{coffee.name}</h2>
      <p className="text-sm text-gray-500">Roast: {coffee.roastLevel}</p>
      <p className="text-sm text-gray-500">
        Taste: {coffee.tasteProfile.join(", ")}
      </p>
      <p className="text-sm text-gray-500">Intensity: {coffee.intensity}</p>
      <p className="text-sm text-gray-500">Origin: {coffee.origin}</p>
      <p className="text-sm font-semibold">${coffee.price}</p>
    </div>
  );
}
