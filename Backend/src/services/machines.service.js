import * as machineRepository from "../repositories/machines.repository.js";

const getAllMachines = () => machineRepository.getAllMachines();
const getMachineById = (id) => machineRepository.getMachineById(id);
const createMachine = (data) => machineRepository.createMachine(data);
const updateMachine = (id, data) => machineRepository.updateMachine(id, data);
const deleteMachine = (id) => machineRepository.deleteMachine(id);

export default {
  getAllMachines,
  getMachineById,
  createMachine,
  updateMachine,
  deleteMachine,
};
