const { number } = require('yargs');

/**
 * Lectura de parámetros por consola
 */
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
    .argv;

console.log(argv);

console.log(argv.base);

