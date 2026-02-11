// src/services/coffees.service.js
const coffeeRepository = require("../repositories/coffee.repository");

const getAllCoffees = () => coffeeRepository.getAllCoffees();
const getCoffeeById = (id) => coffeeRepository.getCoffeeById(id);
const createCoffee = (data) => coffeeRepository.createCoffee(data);
const updateCoffee = (id, data) => coffeeRepository.updateCoffee(id, data);
const deleteCoffee = (id) => coffeeRepository.deleteCoffee(id);

module.exports = {
  getAllCoffees,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee,
};
