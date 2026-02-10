import machineService from "../services/machines.service.js";
import fs from "fs";
import path from "path";

// GET all machines
export const getAllMachines = async (req, res, next) => {
  try {
    const machines = await machineService.getAllMachines();
    res.json(machines);
  } catch (err) {
    next(err);
  }
};

// GET machine by ID
export const getMachineById = async (req, res, next) => {
  try {
    const machine = await machineService.getMachineById(req.params.id);
    res.json(machine);
  } catch (err) {
    next(err);
  }
};

// CREATE new machine
export const createMachine = async (req, res, next) => {
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
export const updateMachine = async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      price: Number(req.body.price),
    };

    const machine = await machineService.getMachineById(req.params.id);

    if (!machine) {
      return res.status(404).json({ message: "Produit introuvable" });
    }

    // Si une nouvelle image est uploadée, supprimer l’ancienne
    if (req.file) {
      if (machine.image) {
        const oldImagePath = path.join(process.cwd(), machine.image);
        fs.unlink(oldImagePath, (err) => {
          if (err) console.warn("Impossible de supprimer l'ancienne image :", err.message);
        });
      }
      data.image = `/uploads/machines/${req.file.filename}`;
    }

    const updatedMachine = await machineService.updateMachine(req.params.id, data);
    res.json(updatedMachine);
  } catch (err) {
    next(err);
  }
};

// DELETE machine
export const deleteMachine = async (req, res, next) => {
  try {
    const machine = await machineService.getMachineById(req.params.id);

    if (!machine) {
      return res.status(404).json({ message: "Produit introuvable" });
    }

    // Supprimer l'image si elle existe
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
