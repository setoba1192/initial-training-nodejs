const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');


const base = argv.b;
const listar = argv.l;

crearArchivo(base, listar)
    .then(archivo => console.log(`Archivo creado correctamente con el nombre: ${archivo}`))
    .catch(err => console.log(`Ha ocurrido un error: ${err}`));
