let correo = document.querySelector(".correo");
let mensaje_error = document.querySelector(".error_email");
let alerta = document.querySelector(".alerta");
let formulario = document.querySelector(".contenido");

function subscribirse(event) {
    event.preventDefault();

    correo.style.color = "black";
    if (correo.value === "" || !correo.value.includes("@")) {
        mensaje_error.style.display = "block";
        correo.style.color = "hsl(4, 100%, 67%)";
        correo.style.borderColor = 'hsl(4, 100%, 67%)';
        correo.classList.add("correo_rojo");
        correo.style.backgroundColor = 'hsl(4, 100%, 67%, 0.2)';
        alerta.style.display = 'none';
        formulario.style.display = 'flex';
    }
    else {
        formulario.style.display = 'none';
        alerta.style.display = 'flex';
        document.querySelector(".mensaje_correo").innerHTML = `A confirmation email has been sent to <strong>${correo.value}</strong>. 
        Please open it and click the button inside to confirm your subscription.`;
    }
}

function ocultar_mensaje() {
    alerta.style.display = 'none';
    formulario.style.display = 'flex';
    correo.value = "";
    mensaje_error.style.display = "none";
    correo.style.borderColor = 'hsl(0, 0%,58%)';
    correo.classList.remove("correo_rojo");
    correo.style.backgroundColor = 'hsl(0, 0%, 100%)';
}