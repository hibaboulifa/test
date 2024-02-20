const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
{
   nom: String, 
   prenom: String,
   email: String, 
   password: String, 
   age: Number,
}, {
timestamps: true,

}
);
module.exports = mongoose.model("User", UserSchema)