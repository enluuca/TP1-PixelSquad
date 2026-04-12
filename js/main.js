// Interacción obligatoria
const boton = document.getElementById('btn-saludo');
const mensaje = document.getElementById('mensaje-dinamico');

boton.addEventListener('click', () => {
    mensaje.innerText = "AGREGAR MENSAJE";
    mensaje.style.color = "#007bff";
});

//El CSS ya hace loop infinito, pero si querés controlar el reinicio:

const crawl = document.getElementById("crawl");

crawl.addEventListener("animationiteration", () => {
  console.log("Se reinició la animación");
});

// Esperamos a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
  
  // Seleccionamos el botón de integrantes
  const integrantesBtn = document.querySelector('.integrantes-btn');
  // Seleccionamos el submenú
  const submenu = document.querySelector('.submenu');

  // Añadimos el evento de click
  integrantesBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evitamos que el enlace recargue la página
    
    // Alternamos una clase CSS para mostrar/ocultar
    submenu.classList.toggle('show-submenu'); 
  });
});

// Esperamos a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
  
  // Seleccionamos el botón de integrantes
  const integrantesBtn = document.querySelector('.integrantes-btn');
  // Seleccionamos el submenú
  const submenu = document.querySelector('.submenu');

  // Añadimos el evento de click
  integrantesBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evitamos que el enlace recargue la página
    
    // Alternamos una clase CSS para mostrar/ocultar
    submenu.classList.toggle('show-submenu'); 
  });
});