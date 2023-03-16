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

                if (id === '0') continue;

                const lugarSeleccionado = lugares.find(lugar => lugar.id === id);

                busquedas.agregarHistorial(lugarSeleccionado.nombre);

                const climaLugarSeleccionado = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng)


                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', lugarSeleccionado.nombre);
                console.log('Lat:', lugarSeleccionado.lat);
                console.log('Lng:', lugarSeleccionado.lng);
                console.log('Temperatura:', climaLugarSeleccionado.temp);
                console.log('Mínima:', climaLugarSeleccionado.min);
                console.log('Máxima:', climaLugarSeleccionado.max);
                console.log('¿Cómo está el clima?:'.red, climaLugarSeleccionado.desc.green);
                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar, index) => {
                    console.log(`${index + 1}.`.green, `${lugar}`);
                })
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