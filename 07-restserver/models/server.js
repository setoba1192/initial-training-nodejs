/** @format */
require("dotenv").config();
const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // Middlewares
    this.middlewares();


    // Rutas de mi aplicación
    this.routes();
  }

  middlewares(){

    // Directorio público
    this.app.use( express.static('public'))

  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.send("Hola mundo");
    });
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
    });
  }
}

module.exports = Server;
