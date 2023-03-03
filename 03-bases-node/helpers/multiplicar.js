const fyleSystem = require('fs');
const colors = require('colors');

const crearArchivo = async (numero = 5, limite, listar) => {

    console.log('============='.green);
    console.log('Tabla del:'.green, colors.red(numero));
    console.log('============='.green);

    let salida = '';
    let consola = '';

    for (let i = 1; i <= limite; i++) {
        salida += `${numero} ${'x'.green} ${i} ${'='.green} ${numero * i}\n`;
        consola += `${numero} x ${i} = ${numero * i}\n`;
    }

    if (listar) {
        console.log(salida);
    }

    try {

        fyleSystem.writeFileSync(`./salida/tabla-${numero}.txt`, consola);

    } catch (err) {
        throw err;
    }

    console.log('Archivo guardado correctamente');

    return `tabla-${numero}.txt`

}

module.exports = {
    crearArchivo
}