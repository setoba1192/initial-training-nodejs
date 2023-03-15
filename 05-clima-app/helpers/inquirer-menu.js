/** @format */

require("colors");
const inquirer = require("inquirer");

const info_pausa = [
    {
        type: "input",
        name: "enter",
        message: `Presione ${"ENTER".green} para continuar`,
    },
];

const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Qué desea hacer?",
        choices: [
            {
                value: 1,
                name: `${'1.'.red} Buscar ciudad`,
            },
            {
                value: 2,
                name: `${'2.'.red} Historial`,
            },
            {
                value: 0,
                name: `${'0.'.red} Salir`,
            }
        ],
    },
];

const inquirerMenu = async () => {
    console.clear();
    console.log("==========================".green);
    console.log("   Seleccione una opción");
    console.log("==========================\n".green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
};

const pausa = async () => {
    console.log("\n");
    await inquirer.prompt(info_pausa);
};

const leerInput = async (message) => {
    const question = [
        {
            type: "input",
            name: "desc",
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true;
            }
        }];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

const opcionesMenu = async (opciones = []) => {

    const choices = opciones.map((opcion, i) => {
        return {
            value: opcion.id,
            name: `${i + 1}.`.green + opcion.nombre
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: "list",
            name: "id",
            message: "Seleccione lugar:",
            choices
        }];

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message) => {
    const question = [{
        type: "confirm",
        name: "ok",
        message
    }];

    const { ok } = await inquirer.prompt(question);

    return ok;
}

const mostrarListadoCheckList = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        return {
            value: tarea.id,
            name: `${i + 1}.`.green + tarea.desc,
            checked: (tarea.completadoEn ? true : false)
        }
    });

    const pregunta = [
        {
            type: "checkbox",
            name: "ids",
            message: "Sleccione",
            choices
        }];

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    opcionesMenu,
    confirmar,
    mostrarListadoCheckList
};
