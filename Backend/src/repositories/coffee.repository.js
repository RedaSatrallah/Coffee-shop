import Coffee from "../models/coffees.model.js";

// Get all coffees
export const getAllCoffees = () => Coffee.find();

// Get one coffee by ID
export const getCoffeeById = (id) => Coffee.findById(id);

// Create a coffee
export const createCoffee = (data) => Coffee.create(data);

// Update a coffee
export const updateCoffee = (id, data) =>
  Coffee.findByIdAndUpdate(id, data, { new: true });

// Delete a coffee
export const deleteCoffee = (id) => Coffee.findByIdAndDelete(id);
