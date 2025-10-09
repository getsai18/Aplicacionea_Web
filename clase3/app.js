let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let dividir = document.getElementById("dividir");
let multiplicar = document.getElementById("multiplicar");
function realizarSuma(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let operacionSuma = numero1 + numero2;

    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML= "<p>El resultado es "+operacionSuma+"</p>";
    console.log("El resultado de la suma es "+operacionSuma);
}

function realizarResta(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let operacionResta = numero1 - numero2;

    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML= "<p>El resultado es "+operacionResta+"</p>";
    console.log("El resultado de la suma es "+operacionResta);

}

function realizarMultiplicacion(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let operacionMultiplicacion = numero1 * numero2;

    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML= "<p>El resultado es "+operacionMultiplicacion+"</p>";
    console.log("El resultado de la suma es "+operacionMultiplicacion);

}

function realizarDivicion(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);

    let operacionDivicion = numero1 / numero2;

    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML= "<p>El resultado es "+operacionDivicion+"</p>";
    console.log("El resultado de la suma es "+operacionDivicion);

}


sumar.addEventListener("click", realizarSuma);
restar.addEventListener("click", realizarResta);
dividir.addEventListener("click",realizarDivicion);
multiplicar.addEventListener("click", realizarMultiplicacion);
