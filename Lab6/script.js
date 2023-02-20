function validarContraseña(event) {
    event.preventDefault(); // evitar el envío del formulario

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const message = document.getElementById("message");

    if (passwordInput.value === "" || confirmPasswordInput.value === "") {
        message.innerText =
            "Por favor, ingrese una contraseña y confirme su contraseña.";
        message.style.color = "red";
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        message.innerText = "Las contraseñas no coinciden.";
        message.style.color = "red";
    } else {
        message.innerText = "¡Las contraseñas coinciden!";
        message.style.color = "white";
    }
}

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", validarContraseña);


// Obtener el elemento de texto
const hoverText = document.getElementById("hover-text");

//
