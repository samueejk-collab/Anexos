//ejercicio 1
async function crearTarea(tarea) {

    const respuesta = await fetch("http://localhost:3000/tareas",{
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            texto: tarea,
            hecha: false,
        }),
       
    })
    const tareaCreada= await respuesta.json();
    console.log("tarea creada, tareaCreada");
    return tareaCreada;
}
crearTarea("Hacer la tarea de JS")


async function borrarTarea(id) {
    const respuesta = await fetch (`http://localhost:3000/tareas/${id}`, {
        method: "DELETE",
    })
    
    if (respuesta.ok){
        throw new Error(`Error al borrar la tarea ${respuesta.status}`)
    }
    console.log("tarea eliminada",id);
}
borrarTarea("qK-eMWyGje0");

async function marcarTareaHecha(id,estado) {
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`,{
        method: "PATCH",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            hecha: estado,
        }),

    });
    const tareaModificada = await respuesta.json();
    console.log("tareaModificada")
    return tareaModificada;
}

marcarTareaHecha("0OFIaTaOaag", true)

async function modificarTarea(id,estado,tarea) {
    const respuesta = await fetch(`http://localhost:3000/tareas/${id}`,{
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            hecha: estado,
            texto:tarea,
        }),

    });
    const tareaModificada = await respuesta.json();
    console.log("tareaModificadaput")
    return tareaModificada;
}
modificarTarea("0-N-IE6wQUg", false, "Texto modificado")