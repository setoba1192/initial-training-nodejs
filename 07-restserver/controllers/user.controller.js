/** @format */
const { Response } = require("express");

const controllerName = "Controller!";

const usuariosGet = (req, res) => {
  res.json({ msg: "get API - " + controllerName });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;
  res.status(201).json({ msg: "post API - " + controllerName, nombre, edad });
};

const usuariosPut = (req, res) => {
  res.status(400).json({ msg: "put API - " + controllerName });
};

const usuariosDelete = (req, res) => {
  res.json({ msg: "delete API - " + controllerName });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
