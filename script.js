// Función para validar el acceso al libro de recuerdos
function verificarPassword() {
    const entrada = document.getElementById('password-input').value.trim();
    const error = document.getElementById('error-msg');
    
    // Contraseña asignada estrictamente por el usuario
    const claveCorrecta = "7 06 2026";

    if (entrada === claveCorrecta) {
        // Transición: Oculta el login y revela el contenido del libro
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('book-container').style.display = 'block';
    } else {
        // Alerta visual en caso de ingresar un dato incorrecto
        error.textContent = "Contraseña incorrecta. Inténtalo de nuevo ❤️";
        // Limpieza de campo automatizada
        document.getElementById('password-input').value = "";
    }
}

// Escuchador de teclado: permite ejecutar la función al presionar "Enter"
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verificarPassword();
    }
});
