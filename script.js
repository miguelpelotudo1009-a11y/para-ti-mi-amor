// Variable global para controlar en qué página está Jessica
let paginaActual = 1;
const totalPaginas = 3;

function verificarPassword() {
    const entrada = document.getElementById('password-input').value.trim();
    const error = document.getElementById('error-msg');
    
    // Contraseña asignada exactamente
    const claveCorrecta = "7 06 2026";

    if (entrada === claveCorrecta) {
        document.getElementById('password-screen').style.display = 'none';
        document.getElementById('book-container').style.display = 'block';
    } else {
        error.textContent = "Contraseña incorrecta. Inténtalo de nuevo ❤️";
        document.getElementById('password-input').value = "";
    }
}

// Función interactiva para saltar entre las páginas del libro
function cambiarPagina(direccion) {
    // Calcula la nueva página validando los límites (1 a 3)
    let nuevaPagina = paginaActual + direccion;
    if (nuevaPagina < 1 || nuevaPagina > totalPaginas) return;

    // Quita la clase 'active' de la página que se está viendo
    document.getElementById(`page-${paginaActual}`).classList.remove('active');
    
    // Actualiza el número de página global
    paginaActual = nuevaPagina;
    
    // Añade la clase 'active' para revelar la nueva página con su animación
    document.getElementById(`page-${paginaActual}`).classList.add('active');

    // Actualiza el contador de texto en la zona inferior
    document.getElementById('page-number').textContent = `Pág. ${paginaActual} de ${totalPaginas}`;

    // Controla si los botones deben estar encendidos o apagados según la página
    document.getElementById('prev-btn').disabled = (paginaActual === 1);
    document.getElementById('next-btn').disabled = (paginaActual === totalPaginas);
}

// Permite presionar "Enter" para enviar la contraseña desde el input
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        verificarPassword();
    }
});
