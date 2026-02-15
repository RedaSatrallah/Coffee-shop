const express = require("express");
const router = express.Router();
const { getDashboardStats, getSalesMonth, getSalesWeek, getSalesYear, getBestSellers } = require("../controllers/admindashboard.controller");

router.get("/", getDashboardStats);
router.get("/sales/month", getSalesMonth);
router.get("/sales/week", getSalesWeek);
router.get("/sales/year", getSalesYear);

// GET top 3 best sellers
router.get("/best-sellers",getBestSellers);

module.exports = router;

