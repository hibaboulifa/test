const mongoose = require("mongoose");

mongoose
.connect("mongodb://127.0.0.1:27017/crud")
.then(() => {

console.log("Connecté à la base de données ");

})
.catch(() => {
console.log((err) =>
console.error("Erreur de connexion à la base de données:", err)

);
});

module.exports = mongoose;
