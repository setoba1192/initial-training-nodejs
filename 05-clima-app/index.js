require('dotenv').config();
const { leerInput, inquirerMenu, pausa, opcionesMenu } = require("./helpers/inquirer-menu");
const Busquedas = require("./models/busquedas");

const main = async () => {

    const busquedas = new Busquedas();

    let opt;
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:

                // Mostrar mensaje
                const lugarBuscar = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(lugarBuscar);

                const id = await opcionesMenu(lugares);

                console.log({ id });

                const lugarSeleccionado = lugares.find(lugar => lugar.id === id);

                // Buscar lugar

                // Seleccionar Lugar

                // Clima

                // Mostrar Resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:',lugarSeleccionado.nombre);
                console.log('Lat:',lugarSeleccionado.lat);
                console.log('Lng:',lugarSeleccionado.lng);
                console.log('Temperatura:',);
                console.log('Mínima:',);
                console.log('Máxima:',);
                break;
            case 2:
                console.log('Historial');
                break;

            case 0:
                console.log('Salir');
                break;

            default:
                break;
        }

        if (opt !== 0) {
            await pausa();
        }

    } while (opt !== 0);
}

main();