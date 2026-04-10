// Interacción obligatoria
const boton = document.getElementById('btn-saludo');
const mensaje = document.getElementById('mensaje-dinamico');

boton.addEventListener('click', () => {
    mensaje.innerText = "AGREGAR MENSAJE";
    mensaje.style.color = "#007bff";
});