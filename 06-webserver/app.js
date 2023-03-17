/** @format */

const http = require("http");

http
  .createServer((request, response) => {
    response.write("Hola mundo");
    response.end();
  })
  .listen(8080);

let a = [];

a.map((a) => a).forEach((a) => {});

console.log("Hola mundo");
