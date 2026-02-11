const express = require("express");
const router = express.Router();

// Import your controllers (CommonJS style)
const coffeeController = require("../controllers/coffees.controller");

// Define routes
router.get("/", coffeeController.getAllCoffees);
router.get("/:id", coffeeController.getCoffeeById);
router.post("/", coffeeController.createCoffee);
router.put("/:id", coffeeController.updateCoffee);
router.delete("/:id", coffeeController.deleteCoffee);

module.exports = router;
