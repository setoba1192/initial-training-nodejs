require('colors');
const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};
    }

    get listadoArray() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        })

        return listado;
    }

    borrarTarea(id = '') {

        if (this._listado[id]) {
            delete this._listado[id];
        }

        
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(t => this._listado[t.id] = t)
    }

    listadoCompleto() {
        console.log();
        this.listadoArray.forEach((tarea, index) => {
            const idx = `${index + 1}.`.green
            console.log(`${idx} ${tarea.desc} :: ${tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red}`);
        })
    }

    listarPendientesCompletadas(completadas = true) {
        console.log();
        this.listadoArray
            .filter(tarea => completadas ? tarea.completadoEn : !tarea.completadoEn)
            .forEach((tarea, index) => {
                const idx = `${index + 1}.`.green
                console.log(`${idx} ${tarea.desc} :: ${tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red}`);
            })
    }


    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

}


module.exports = Tareas;