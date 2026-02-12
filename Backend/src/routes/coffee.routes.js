import express from "express";
import { getAllCoffees, getCoffeeById, createCoffee, updateCoffee, deleteCoffee } from "../controllers/coffees.controller.js";

const router = express.Router();

// GET all coffees
router.get("/", getAllCoffees);
// GET single coffee by ID
router.get("/:id", getCoffeeById);
// POST a new coffee
router.post("/", createCoffee);
// PUT update a coffee
router.put("/:id", updateCoffee);
// DELETE a coffee
router.delete("/:id", deleteCoffee);
export default router;

