/** @format */
const hbs = require("hbs");
const express = require("express");
const app = express();
const port = 8080;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido stático
app.use(express.static("public"));

const params = {
  nombre: "Joan Sebastian Roa",
  titulo: "Curso de Node",
};

app.get("/", (req, res) => {
  res.render("home", params);
});

app.get("/generic", (req, res) => {
  let genericParams = {
    ...params,
    header_class: "alt",
  };

  res.render("generic", genericParams);
});

app.get("/elements", (req, res) => {
  let elementsParams = {
    ...params,
    header_class: "alt",
  };

  res.render("elements", elementsParams);
});

app.get("/hola-mundo", (req, res) => {
  res.send("Ahora si, hola mundo!");
});

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});
app.listen(port, () => {
  console.log(`Running app on port ${port}`);
});
