// Función para validar el formulario de contacto
function validateForm() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var reason = document.getElementById("reason").value;
    var terms = document.getElementById("terms").checked;

    if (name === "" || surname === "" || email === "" || message === "" || reason === "" || !terms) {
        alert("Por favor complete todos los campos obligatorios.");
        return false;
    }

    return true;
}

// Listener de evento para el formulario de contacto
document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            if (!validateForm()) {
                event.preventDefault(); // Evita que el formulario se envíe si la validación falla
            }
        });
    }
});