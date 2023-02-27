// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 10 = 50
const fyleSystem = require('fs');

const numero = 5;

console.clear();


console.clear();
console.log('=============');
console.log(`Tabla del:${numero}`);
console.log('=============');


let salida = '';

for (let i = 1; i <= 10; i++) {
    salida += `${numero} x ${i} = ${numero * i}\n`;
}

console.log(salida);

fyleSystem.writeFile(`tabla-${numero}.txt`, salida, (err) => {
    if (err)
        throw err;

    console.log('Archivo guardado correctamente');
})