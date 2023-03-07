const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer-menu');
const Tareas = require('./models/tareas');

require('colors');

console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    do {

        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                console.log(desc);
                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.listadoArray);
                break;
        }

        await pausa();

    } while (opt !== '0')

}

main();