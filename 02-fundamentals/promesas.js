const empleados = [
    {
        id: 1,
        nombre: 'Sebastian'
    },
    {
        id: 2,
        nombre: 'Paula'
    },
    {
        id: 3,
        nombre: 'Tony'
    },
    {
        id: 4,
        nombre: 'Coco'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
    {
        id: 3,
        salario: 3000
    }
];

const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id == id);

        empleado ? resolve(empleado) : reject(`Empleado con id ${id} no existe`)
    });
}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find(s => s.id == id);

        salario ? resolve(salario) : reject(`Salario con id ${id} no existe`)
    });
}

const id = 4;
/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err)); */


getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log('El empleado: ', empleado, 'tiene un salario de:', salario);
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err));