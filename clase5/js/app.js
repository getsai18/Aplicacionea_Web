const persona ={
    nombre: "Getsao",
    edad: 19,
    pais: "Mexico",
    hobies: ["jugar play", "basquetball", "boly", "jugar HollowKnight", "jugar free fire"]
}

//convertir objeto a Json
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);

const resultado = document.querySelector(".resultado");

resultado.textContent= personaJSON;