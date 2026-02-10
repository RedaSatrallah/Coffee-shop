import Machine from "../models/machines.model.js";

// Get all Machines
export const getAllMachines = () => Machine.find();

// Get one Machine by ID
export const getMachineById = (id) => Machine.findById(id);

// Create a Machine
export const createMachine = (data) => Machine.create(data);

// Update a Machine
export const updateMachine = (id, data) =>
  Machine.findByIdAndUpdate(id, data, { new: true });

// Delete a Machine
export const deleteMachine = (id) => Machine.findByIdAndDelete(id);
