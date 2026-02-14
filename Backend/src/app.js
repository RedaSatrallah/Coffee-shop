const express = require("express");
const publicRoutes = require("./routes/public.routes");
const coffeeRoutes = require( "./routes/coffee.routes");
const machinesRoutes = require( "./routes/machine.routes"); 
//const adminRoutes = require("./routes/admin.routes");
//const clientRoutes = require("./routes/client.routes");
const errorHandler = require("./middlewares/error.middleware");
const path = require("path");
const app = express();
// in app.js
const cors = require("cors");


app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(express.json());

app.use("/api/coffees", coffeeRoutes);

app.use("/api", publicRoutes);
app.use("/api/machines", machinesRoutes);
app.use("/uploads", express.static("uploads"));
//app.use("/api/admin", adminRoutes);
//app.use("/api/client", clientRoutes);
//app.use("/uploads", express.static("uploads"));
app.use(errorHandler);

module.exports = app;  