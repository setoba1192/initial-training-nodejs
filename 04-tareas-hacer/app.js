const { inquirerMenu, pausa } = require('./helpers/inquirer-menu');
const Tarea = require('./models/tarea');

require('colors');

//console.clear();

const main = async () => {

    let opt = '';
    do {

        opt = await inquirerMenu();
        console.log({ opt });
        await pausa();

    } while (opt !== '0')

}

main();