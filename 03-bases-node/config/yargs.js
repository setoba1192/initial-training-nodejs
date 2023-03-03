const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe : 'Base de la tabla de multiplicar'
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
        default: false,
        describe : 'Lista la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe : 'Hasta que número?'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'El # hasta tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;