const coffeeService = require("../services/coffees.service");
const fs = require("fs");
const path = require("path");

// GET all coffees
const getAllCoffees = async (req, res, next) => {
  try {
    const coffees = await coffeeService.getAllCoffees();
    res.json(coffees);
  } catch (err) {
    next(err);
  }
};

// GET coffee by ID
const getCoffeeById = async (req, res, next) => {
  try {
    const coffee = await coffeeService.getCoffeeById(req.params.id);
    res.json(coffee);
  } catch (err) {
    next(err);
  }
};

// CREATE new coffee
const createCoffee = async (req, res, next) => {
  try {
    const image = req.file ? `/uploads/coffees/${req.file.filename}` : null;

    const coffee = await coffeeService.createCoffee({
      ...req.body,
      price: Number(req.body.price),
      image,
    });

    res.status(201).json(coffee);
  } catch (err) {
    next(err);
  }
};

// UPDATE coffee
const updateCoffee = async (req, res, next) => {
  try {
    const data = { ...req.body, price: Number(req.body.price) };
    const coffee = await coffeeService.getCoffeeById(req.params.id);

    if (!coffee) return res.status(404).json({ message: "Produit introuvable" });

    // Supprimer ancienne image si nouvelle uploadée
    if (req.file && coffee.image) {
      const oldImagePath = path.join(process.cwd(), coffee.image);
      fs.unlink(oldImagePath, (err) => {
        if (err) console.warn("Impossible de supprimer l'ancienne image :", err.message);
      });
      data.image = `/uploads/coffees/${req.file.filename}`;
    }

    const updatedCoffee = await coffeeService.updateCoffee(req.params.id, data);
    res.json(updatedCoffee);
  } catch (err) {
    next(err);
  }
};

// DELETE coffee
const deleteCoffee = async (req, res, next) => {
  try {
    const coffee = await coffeeService.getCoffeeById(req.params.id);
    if (!coffee) return res.status(404).json({ message: "Produit introuvable" });

    // Supprimer image si existante
    if (coffee.image) {
      const imagePath = path.join(process.cwd(), coffee.image);
      fs.unlink(imagePath, (err) => {
        if (err) console.warn("Impossible de supprimer l'image :", err.message);
      });
    }

    await coffeeService.deleteCoffee(req.params.id);
    res.json({ message: "Produit supprimé" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCoffees,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee,
};
