const { crearArchivo } = require('./helpers/multiplicar')


const [,,arg3 = 'base=5'] = process.argv;

const [,base = 5] = arg3.split('=');

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado correctamente con el nombre: ${archivo}`))
    .catch(err => console.log(`Ha ocurrido un error: ${err}`));
