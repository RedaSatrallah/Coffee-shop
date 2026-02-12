export default function CoffeeCard({ coffee }) {
  return (
    <div className="border rounded p-4 flex flex-col gap-2 w-60">
      <img
        src={coffee.images?.[0] || "/assets/placeholder.png"}
        alt={coffee.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-semibold">{coffee.name}</h2>
      <p className="text-sm text-gray-600">{coffee.description}</p>
      <p className="text-sm font-medium">Origin: {coffee.origin}</p>
      <p className="text-sm font-medium">Roast: {coffee.roastLevel}</p>
      <p className="text-sm font-medium">Price: ${coffee.price}</p>
    </div>
  );
}
