const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer-menu");
const Busquedas = require("./models/busquedas");

const main = async () => {

    const busquedas = new Busquedas();

    let opt;
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:

                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);

                // Buscar lugar

                // Seleccionar Lugar

                // Clima

                // Mostrar Resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:',);
                console.log('Lat:',);
                console.log('Lng:',);
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