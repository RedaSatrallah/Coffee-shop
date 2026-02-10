import express from "express";
import { getAllMachines, getMachineById, createMachine, updateMachine, deleteMachine } from "../controllers/machines.controller.js";

const router = express.Router();

// GET all machines
router.get("/", getAllMachines);

// GET single machine by ID
router.get("/:id", getMachineById);

// POST a new machine
router.post("/", createMachine);

// PUT update a machine
router.put("/:id", updateMachine);

// DELETE a machine
router.delete("/:id", deleteMachine);

export default router;
