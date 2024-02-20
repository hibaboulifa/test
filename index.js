const express = require("express");
const mongoose = require("./config/database");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


const PORT = 3900;
app.listen(PORT, () => {
      console.log("Serveur en écoute sur le port " , PORT );

});

const UserRoutes = require("./Routes/UserRoutes");
app.use("/api",  UserRoutes);