import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalCoffees: 0,
    totalMachines: 0,
    activeSubscriptions: 0,
    cancelledSubscriptions: 0,
    totalRevenue: 0,
  });
  const [salesData, setSalesData] = useState([]);
  const [period, setPeriod] = useState("month"); // default month
  const [bestSellers, setBestSellers] = useState([]); // Added state for best sellers

  // Fetch dashboard stats
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/dashboard")
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Fetch sales data based on period
  useEffect(() => {
    let url = "http://localhost:5001/api/dashboard/sales/month";
    if (period === "week") url = "http://localhost:5001/api/dashboard/sales/week";
    if (period === "year") url = "http://localhost:5001/api/dashboard/sales/year";

    axios
      .get(url)
      .then((res) => setSalesData(res.data))
      .catch((err) => console.error(err));
  }, [period]);

useEffect(() => {
  axios
    .get("http://localhost:5001/api/dashboard/best-sellers")
    .then((res) => {
      console.log("BEST SELLERS RESPONSE:", res.data);
      setBestSellers(res.data);
    })
    .catch((err) => console.error(err));
}, []);


  return (
    <div className="flex flex-col px-6 min-h-fit">
      <h1 className="text-2xl font-semibold text-brown mb-8">Statistics</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-md shadow-sm px-5 py-4">
          <p className="text-sm font-medium text-brown mb-3">Products</p>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Coffees</span>
            <span className="font-instrument-serif text-xl font-semibold text-gray-900">
              {stats.totalCoffees}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Machines</span>
            <span className="font-instrument-serif text-xl font-semibold text-gray-900">
              {stats.totalMachines}
            </span>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm px-5 py-4 flex flex-col justify-between">
          <p className="text-sm font-medium text-brown">Active Subscriptions</p>
          <div className="flex justify-between items-center mt-4">
            <span className="font-instrument-serif text-2xl font-semibold text-gray-900">
              {stats.activeSubscriptions}
            </span>
            <span className="text-xs font-semibold text-green-600">+2% ↑</span>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm px-5 py-4 flex flex-col justify-between">
          <p className="text-sm font-medium text-brown">Total Sales</p>
          <p className="text-xs text-gray-500 mt-1">
            {stats.totalCoffees} Coffees · {stats.totalMachines} Machines
          </p>
          <div className="flex justify-between items-center mt-3">
            <span className="font-instrument-serif text-2xl font-semibold text-gray-900">
              {stats.totalRevenue} MAD
            </span>
            <span className="text-xs font-semibold text-green-600">+5% ↑</span>
          </div>
        </div>

        <div className="bg-white rounded-md shadow-sm px-5 py-4 flex flex-col justify-between">
          <p className="text-sm font-medium text-brown">Cancelled Subscriptions</p>
          <div className="flex justify-between items-center mt-4">
            <span className="font-instrument-serif text-2xl font-semibold text-gray-900">
              {stats.cancelledSubscriptions}
            </span>
            <span className="text-xs font-semibold text-red-600">-1% ↓</span>
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-10 w-full mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Sales Overview</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Show:</span>
            <select
              className="border border-gray-300 rounded px-2 py-1"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="month">This month</option>
              <option value="week">This week</option>
              <option value="year">This year</option>
            </select>
          </div>
        </div>

        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={salesData}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={period === "year" ? "month" : period} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#7C3AED"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
{/* Best Sellers */}
<div className="bg-white rounded-lg shadow-md w-full max-w-md border-t-4 mb-10">
    <div className="bg-brown p-4 rounded-t-lg ">
  <h2 className="text-lg font-semibold text-white ">Best Sellers</h2>
</div>
  

  <hr className="mb-3" />

  {bestSellers.map((coffee, index) => {
     const image = coffee.image ? `http://localhost:5001/${coffee.image}`
: "/assets/coffee-beans.jpg";

  return (
    <div
      key={coffee._id}
      className="bg-white rounded-md p-3 flex items-center gap-3 mb-3 shadow-sm"
    >
      <div className="w-6 font-bold text-green-600">#{index + 1}</div>

      <img
        src={image}
        alt={coffee.name}
        className="w-12 h-12 object-cover rounded"
        onError={(e) => {
          e.currentTarget.src = "/assets/coffee-beans.jpg";
        }}
      />

      <div className="flex-1 font-semibold">{coffee.name}</div>

      <div className="flex-1 text-xs text-gray-500">
        Taste: {coffee.tasteProfile} 
        <br />Roast: {coffee.roast}
      </div>
    </div>
  );
})}

</div>



    </div>
  );
}
