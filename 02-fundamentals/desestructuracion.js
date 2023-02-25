const { log } = require("console");

const deadpool = {
    nombre : 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    //edad : 50
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

function imprimeHeroe({nombre, apellido, poder}) {

    console.log(nombre, apellido, poder)
}

imprimeHeroe(deadpool);

//const {nombre, apellido, poder, edad = 0} = deadpool;
//console.log(nombre, apellido, poder, edad)

const heroes = ['Deadpool', 'Superman', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const [, , h3] = heroes;

console.log(h3);