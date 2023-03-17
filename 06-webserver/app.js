/** @format */

const express = require("express");
const app = express();
const port = 8080;

// Servir contenido stático
app.use(express.static("public"));

app.get("/hola-mundo", (req, res) => {
  res.send("Ahora si, hola mundo!");
});

app.get("/*", (req, res) => {
  res.sendFile(__dirname+"/public/404.html");
});
app.listen(port, () => {
  console.log(`Running app on port ${port}`);
});
