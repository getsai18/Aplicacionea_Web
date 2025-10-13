// Selección de elementos
const btnGuardar = document.querySelector(".btnGuardar");
const nombre = document.querySelector(".nombre");
const apellido = document.querySelector(".apellido");
const fecha = document.querySelector(".fecha");
const saludo = document.querySelector(".saludo");

// Mostrar datos guardados al cargar la página
const datosGuardados = localStorage.getItem("usuario");

if (datosGuardados) {
    const usuario = JSON.parse(datosGuardados);
    saludo.textContent = `Guardado: ${usuario.nombre} ${usuario.apellido} (${usuario.fecha})`;
}

// Guardar nombre, apellido y fecha escritos por el usuario
btnGuardar.addEventListener("click", () => {
    const nombreValor = nombre.value.trim();
    const apellidoValor = apellido.value.trim();
    const fechaValor = fecha.value;

    if (nombreValor !== "" && apellidoValor !== "" && fechaValor !== "") {
        const usuario = {
            nombre: nombreValor,
            apellido: apellidoValor,
            fecha: fechaValor
        };

        // Guardar el objeto como JSON
        localStorage.setItem("usuario", JSON.stringify(usuario));

        saludo.textContent = `Guardado: ${usuario.nombre} ${usuario.apellido} (${usuario.fecha})`;
    } else {
        saludo.textContent = "Por favor, completa todos los campos antes de guardar.";
    }
});
