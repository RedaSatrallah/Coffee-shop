const Coffee = require("../models/coffees.model");
const Machine = require("../models/machines.model");
const Subscription = require("../models/subscription.model");
const mongoose = require("mongoose");

// DASHBOARD STATS
const getDashboardStats = async (req, res) => {
  try {
    // Total products
    const totalCoffees = await Coffee.countDocuments();
    const totalMachines = await Machine.countDocuments();

    // Revenue from coffees
    const coffeeAgg = await Coffee.aggregate([
      {
        $project: {
          revenue: { $multiply: [{ $ifNull: ["$Sales", 0] }, { $ifNull: ["$price", 0] }] },
        },
      },
      { $group: { _id: null, total: { $sum: "$revenue" } } },
    ]);
    const coffeeRevenue = coffeeAgg[0]?.total || 0;

    // Revenue from machines
    const machineAgg = await Machine.aggregate([
      {
        $project: {
          revenue: { $multiply: [{ $ifNull: ["$sales", 0] }, { $ifNull: ["$price", 0] }] },
        },
      },
      { $group: { _id: null, total: { $sum: "$revenue" } } },
    ]);
    const machineRevenue = machineAgg[0]?.total || 0;

    const totalRevenue = coffeeRevenue + machineRevenue;

    // Subscriptions
    const activeSubscriptions = await Subscription.countDocuments({ isActive: true });
    const cancelledSubscriptions = await Subscription.countDocuments({ isCancelled: true });

    res.json({
      totalCoffees,
      totalMachines,
      totalRevenue,
      activeSubscriptions,
      cancelledSubscriptions,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// SALES STATISTICS
// Helper to format aggregation result
const formatSales = (agg, key) =>
  agg.map((item) => ({
    [key]: item._id.toString(),
    sales: item.total,
  }));

// Monthly sales (by day)
const getSalesMonth = async (req, res) => {
  try {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

    const sales = await Subscription.aggregate([
      {
        $match: {
          isActive: true,
          isCancelled: false,
          createdAt: { $gte: startOfMonth, $lte: endOfMonth },
        },
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt", timezone: "Africa/Casablanca" }
          },
          total: { $sum: 1 },
        },
      },
      { $sort: { "_id": 1 } },
    ]);

    // Fill missing days
    const result = [];
    const daysInMonth = endOfMonth.getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${startOfMonth.getFullYear()}-${String(startOfMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const sale = sales.find(s => s._id === dateStr);
      result.push({ day: day.toString(), sales: sale ? sale.total : 0 });
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


// Weekly sales (by week number)
const getSalesWeek = async (req, res) => {
  try {
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const today = new Date();

    const sales = await Subscription.aggregate([
      {
        $match: {
          isActive: true,
          isCancelled: false,
          createdAt: { $gte: startOfMonth, $lte: today },
        },
      },
      { $group: { _id: { $week: "$createdAt" }, total: { $sum: 1 } } },
      { $sort: { "_id": 1 } },
    ]);

    res.json(formatSales(sales, "week"));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Yearly sales (by month)
const getSalesYear = async (req, res) => {
  try {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);
    const today = new Date();

    const sales = await Subscription.aggregate([
      {
        $match: {
          isActive: true,
          isCancelled: false,
          createdAt: { $gte: startOfYear, $lte: today },
        },
      },
      { $group: { _id: { $month: "$createdAt" }, total: { $sum: 1 } } },
      { $sort: { "_id": 1 } },
    ]);

    res.json(formatSales(sales, "month"));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


// Get top 3 best-selling coffees
const getBestSellers = async (req, res) => {
  try {
    const coffees = await Coffee.find()
      .sort({ sales: -1 }) 
      .limit(3);

    const normalized = coffees.map((coffee) => {
  let images = [];
  if (Array.isArray(coffee.images) && coffee.images.length > 0) {
    images = coffee.images.map(img => img.replace(/^\/+/, "").replace(/\\/g, "/"));
  }

  return {
    _id: coffee._id,
    name: coffee.name,
    tasteProfile: coffee.tasteProfile,
    roast: coffee.roastLevel,
    sales: coffee.sales || 0,
    image: images[0] || null, // first image
    images, // all images
  };
});


    res.status(200).json(normalized);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch best sellers" });
  }
};


module.exports = {
  getDashboardStats,
  getSalesMonth,
  getSalesWeek,
  getSalesYear,
  getBestSellers,
};
