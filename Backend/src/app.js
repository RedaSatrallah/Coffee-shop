import express from "express";
import coffeeRoutes from "./routes/coffee.routes.js"; 
import machinesRoutes from "./routes/machine.routes.js"; 
const app = express();

app.use(express.json()); 

app.use("/api/coffees", coffeeRoutes);
app.use("/api/machines", machinesRoutes);


export default app;
