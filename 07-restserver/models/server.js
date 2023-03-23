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

  middlewares() {
    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({ msg: "get API" });
    });

    this.app.post("/api", (req, res) => {
      res.status(201).json({ msg: "post API" });
    });

    this.app.put("/api", (req, res) => {
      res.status(400).json({ msg: "put API" });
    });

    this.app.delete("/api", (req, res) => {
      res.json({ msg: "delete API" });
    });

    this.app.patch("/api", (req, res) => {
        res.json({ msg: "patch API" });
      });
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
    });
  }
}

module.exports = Server;
