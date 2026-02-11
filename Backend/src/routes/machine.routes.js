const express = require("express");
const router = express.Router();

// Import your controllers (CommonJS style)
const machineController = require("../controllers/machines.controller");

// Define routes
router.get("/", machineController.getAllMachines);
router.get("/:id", machineController.getMachineById);
router.post("/", machineController.createMachine);
router.put("/:id", machineController.updateMachine);
router.delete("/:id", machineController.deleteMachine);

module.exports = router; 
