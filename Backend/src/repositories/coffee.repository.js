// src/services/coffees.service.js
const Coffee = require("../models/coffees.model");

// Get all coffees
const getAllCoffees = () => Coffee.find();

// Get one coffee by ID
const getCoffeeById = (id) => Coffee.findById(id);

// Create a coffee
const createCoffee = (data) => Coffee.create(data);

// Update a coffee
const updateCoffee = (id, data) => Coffee.findByIdAndUpdate(id, data, { new: true });

// Delete a coffee
const deleteCoffee = (id) => Coffee.findByIdAndDelete(id);

module.exports = {
  getAllCoffees,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee,
};
