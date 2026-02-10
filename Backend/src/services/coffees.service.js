import * as coffeeRepository from "../repositories/coffee.repository.js";

const getAllCoffees = () => coffeeRepository.getAllCoffees();
const getCoffeeById = (id) => coffeeRepository.getCoffeeById(id);
const createCoffee = (data) => coffeeRepository.createCoffee(data);
const updateCoffee = (id, data) => coffeeRepository.updateCoffee(id, data);
const deleteCoffee = (id) => coffeeRepository.deleteCoffee(id);

export default {
  getAllCoffees,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee,
};
