let correo = document.getElementById("email").value;
let contra = document.getElementById("contra").value;
let button = document.getElementById("button");
function verificarCorreo(){
    if(correo == "  " && contra == ""){
        console.log("Correo y contraseña correctos");
    }else{
        console.log("Correo y/o contraseña incorrectos");
    }   
}

button.addEventListener("click", verificarCorreo);      

