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


const getInfoUsuario = async (id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado?.nombre} es de: ${salario?.salario}`
    } catch (error) {
        throw error;
    }
}

const id = 10;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log('error:', err));
