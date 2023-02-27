const { crearArchivo } = require('./helpers/multiplicar')

const numero = 3;

crearArchivo(numero)
    .then(archivo => console.log(`Archivo creado correctamente con el nombre: ${archivo}`))
    .catch(err => console.log(`Ha ocurrido un error: ${err}`));
