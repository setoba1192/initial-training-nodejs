const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false
    })
    .argv;


const base = argv.b;
const listar = argv.l;

crearArchivo(base, listar)
    .then(archivo => console.log(`Archivo creado correctamente con el nombre: ${archivo}`))
    .catch(err => console.log(`Ha ocurrido un error: ${err}`));
