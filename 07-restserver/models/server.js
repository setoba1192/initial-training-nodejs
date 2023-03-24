/** @format */
require("dotenv").config();
const cors = require("cors");
const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.usuariosPath = "/api/usuarios";

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Parseo y lectura de body
    this.app.use(express.json());

    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
    });
  }
}

module.exports = Server;
