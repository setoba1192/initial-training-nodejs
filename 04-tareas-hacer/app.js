const { inquirerMenu, pausa } = require('./helpers/inquirer-menu')

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