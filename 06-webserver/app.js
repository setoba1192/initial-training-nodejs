/** @format */

const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/hola-mundo", (req, res) => {
  res.send("Ahora si, hola mundo!");
});

app.get("/*", (req, res) => {
  res.send("404 | page not found");
});
app.listen(port, () => {
  console.log(`Running app on port ${port}`);
});
