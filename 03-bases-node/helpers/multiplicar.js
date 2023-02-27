const fyleSystem = require('fs');

const crearArchivo = async (numero = 5) => {

    console.log('=============');
    console.log(`Tabla del:${numero}`);
    console.log('=============');

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${numero} x ${i} = ${numero * i}\n`;
    }

    console.log(salida);

    try {

        fyleSystem.writeFileSync(`tabla-${numero}.txt`, salida);

    } catch (err) {
        throw err;
    }

    console.log('Archivo guardado correctamente');

    return `tabla-${numero}.txt`

}

module.exports = {
    crearArchivo
}