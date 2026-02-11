const machineService = require("../services/machines.service");
const fs = require("fs");
const path = require("path");

// GET all machines
const getAllMachines = async (req, res, next) => {
  try {
    const machines = await machineService.getAllMachines();
    res.json(machines);
  } catch (err) {
    next(err);
  }
};

// GET machine by ID
const getMachineById = async (req, res, next) => {
  try {
    const machine = await machineService.getMachineById(req.params.id);
    res.json(machine);
  } catch (err) {
    next(err);
  }
};

// CREATE new machine
const createMachine = async (req, res, next) => {
  try {
    const image = req.file ? `/uploads/machines/${req.file.filename}` : null;

    const machine = await machineService.createMachine({
      ...req.body,
      price: Number(req.body.price),
      image,
    });

    res.status(201).json(machine);
  } catch (err) {
    next(err);
  }
};

// UPDATE machine
const updateMachine = async (req, res, next) => {
  try {
    const data = { ...req.body, price: Number(req.body.price) };
    const machine = await machineService.getMachineById(req.params.id);

    if (!machine) return res.status(404).json({ message: "Produit introuvable" });

    if (req.file && machine.image) {
      const oldImagePath = path.join(process.cwd(), machine.image);
      fs.unlink(oldImagePath, (err) => {
        if (err) console.warn("Impossible de supprimer l'ancienne image :", err.message);
      });
      data.image = `/uploads/machines/${req.file.filename}`;
    }

    const updatedMachine = await machineService.updateMachine(req.params.id, data);
    res.json(updatedMachine);
  } catch (err) {
    next(err);
  }
};

// DELETE machine
const deleteMachine = async (req, res, next) => {
  try {
    const machine = await machineService.getMachineById(req.params.id);
    if (!machine) return res.status(404).json({ message: "Produit introuvable" });

    if (machine.image) {
      const imagePath = path.join(process.cwd(), machine.image);
      fs.unlink(imagePath, (err) => {
        if (err) console.warn("Impossible de supprimer l'image :", err.message);
      });
    }

    await machineService.deleteMachine(req.params.id);
    res.json({ message: "Produit supprimé" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllMachines,
  getMachineById,
  createMachine,
  updateMachine,
  deleteMachine,
};
