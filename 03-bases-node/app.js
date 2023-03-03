const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');


const base = argv.b;
const listar = argv.l;
const limite = argv.h

crearArchivo(base, limite, listar)
    .then(archivo => console.log(colors.rainbow(`Archivo creado correctamente con el nombre: ${archivo}`)))
    .catch(err => console.log(`Ha ocurrido un error: ${err}`));
