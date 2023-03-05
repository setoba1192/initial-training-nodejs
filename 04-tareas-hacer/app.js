const { inquirerMenu } = require('./helpers/inquirer-menu')

require('colors');

//console.clear();

const main = async () => {

    let opt = '';
    do {
        opt = await inquirerMenu();
        console.log({ opt });

    } while (opt !== '0')

}

main();