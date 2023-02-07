/**
 * Stop using var, it can introduce errors and bugs. It defines variables globally
 */
var name = 'Sebastian';

/**
 * let has a context
 */
let name2 = 'Sebastian'

/**
 * use const to define values that no changes
 */
const name3 = 'Sanchez'

if(true){
    name = 'Joan'
    /**
     * I can use name2 as variable as well inside a if block
     */
    let name2 = 'Roa';
}

console.log(name);
console.log(name2);