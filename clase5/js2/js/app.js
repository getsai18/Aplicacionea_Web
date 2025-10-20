function cargarDatos(datos){
    
    const contenido = document.querySelector(".contenido");
    contenido.innerHTML =`<p>Nombre:${datos.nombre} </p>
                         <p>Apellido:${datos.apellido} </p>
                         <p>Correo:${datos.correo} </p>`;
                        
}

fetch("datos.json")
.then(respuesta => respuesta.json)
.then(datos => cargarDatos(datos))
.catch(error=> console.error("Error al cargar el JSON",error))