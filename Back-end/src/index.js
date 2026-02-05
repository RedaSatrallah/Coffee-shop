const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret_change_me";



const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Coffee_Shop');


app.post("/Login", async (req, res) => { //On extrait les champs envoyés par le frontend
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });////Recherche de l’utilisateur dans la base de données
    if (!user) return res.status(401).json({ message: "Invalid " });

    const ok = await bcrypt.compare(password, user.password);////bcrypt.compare retourne true si ça correspond, sinon false.
    if (!ok) return res.status(401).json({ message: "Invalid " });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "2h" }
    );//cree un token JWT valide pendant 2 heures

    return res.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
      
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});




app.post('/Signup', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body; //On extrait les champs envoyés par le frontend

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({ //Enregistre l’utilisateur dans MongoDB
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({//201 = ressource créée////Si l’insertion réussit //res.json(user) = renvoie l’utilisateur au frontend
      message: "User created successfully",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
})
