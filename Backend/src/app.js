const express = require("express");
const cors = require("cors");
const path = require("path");

const coffeeRoutes = require("./routes/coffee.routes");
const machinesRoutes = require("./routes/machine.routes");
const publicRoutes = require("./routes/public.routes");
const dashboardRoutes = require("./routes/admindashboard.routes");
const errorHandler = require("./middlewares/error.middleware");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/coffees", coffeeRoutes);
app.use("/api/machines", machinesRoutes);
app.use("/api", publicRoutes);

app.use(errorHandler);



module.exports = app;
