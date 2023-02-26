/*setTimeout(()=>{
    console.log("Hola Mundo");
},1000)*/

const getUsuarioByID = (id, callback) => {

    const usuario = {
        id,
        nombre: 'Sebastian'
    }

    setTimeout(() => {
        callback(usuario)
    }, 3000)

}

getUsuarioByID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})