const { guardarDB, leerDB } = require('./helpers/guardar-archivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer-menu');
const Tareas = require('./models/tareas');

require('colors');

console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

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

        guardarDB(JSON.stringify(tareas.listadoArray));

        await pausa();

    } while (opt !== '0')

}

main();