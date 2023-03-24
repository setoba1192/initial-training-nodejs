/** @format */

const { Router } = require("express");
const {
  usuariosGet,
  usuariosPut,
  usuariosDelete,
  usuariosPost,
} = require("../controllers/user.controller");

const router = Router();

router.get("/", usuariosGet);

router.post("/", usuariosPost);

router.put("/:id", usuariosPut);

router.delete("/", usuariosDelete);

router.patch("/", (req, res) => {
  res.json({ msg: "patch API" });
});

module.exports = router;
