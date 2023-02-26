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

const getEmpleado = (id, callback) => {

    const empleado = empleados.find(e => e.id == id);

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }

}

const getSalario = (id, callback) => {

    const salario = salarios.find(s => s.id == id);

    if (salario)
        callback(null, salario)

    else
        callback(`Salario con id ${id} no existe`)

}


const id = 4;
getEmpleado(id, (err, empleado) => {

    if (err) {
        console.error('ERROR!!')
        return console.log(err);
    }
    getSalario(id, (err, salario) => {

        if (err) {
            return console.log(err)
        }
    
        console.log('El empleado', empleado?.nombre, 'tiene un salario de:',salario?.salario);
    })
    
})


