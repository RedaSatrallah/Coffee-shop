// src/services/machines.service.js
const Machine = require("../models/machines.model");

// Get all machines
const getAllMachines = () => Machine.find();

// Get one machine by ID
const getMachineById = (id) => Machine.findById(id);

// Create a machine
const createMachine = (data) => Machine.create(data);

// Update a machine
const updateMachine = (id, data) => Machine.findByIdAndUpdate(id, data, { new: true });

// Delete a machine
const deleteMachine = (id) => Machine.findByIdAndDelete(id);

module.exports = {
  getAllMachines,
  getMachineById,
  createMachine,
  updateMachine,
  deleteMachine,
};
