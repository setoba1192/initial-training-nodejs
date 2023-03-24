/** @format */
const { Response, Request } = require("express");

const controllerName = "Controller!";

const usuariosGet = (req, res) => {
  const { q, nombre = "No name", apikey } = req.query;
  res.json({ msg: "get API - " + controllerName, q, nombre, apikey });
};

const usuariosPost = (req, res) => {
  const { nombre, edad } = req.body;
  res.status(201).json({ msg: "post API - " + controllerName, nombre, edad });
};

const usuariosPut = (req, res) => {
  const id = req.params.id;
  res.status(400).json({ msg: "put API - " + controllerName, id });
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
