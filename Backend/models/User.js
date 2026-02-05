const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ //la structure d’un document utilisateur
    name: String,
    email:String,
    password: String, 
    confirmPassword: String
});//MongoDB va stocker ça sous forme de documents JSON.


const UserModel = mongoose.model('User', userSchema); //crée un modèle Mongoose et lié à une collection MongoDB //MongoDB créera automatiquement une collection
module.exports = UserModel; //Rend le modèle utilisable ailleurs