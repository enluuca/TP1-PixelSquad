document.addEventListener("DOMContentLoaded", function() {
    
    // 1️⃣ INTERACCIÓN OBLIGATORIA (Botón sable de luz)
    const botonGalactico = document.getElementById('btn-saludo');
    const mensajeLaser = document.getElementById('mensaje-dinamico');
    
    if (botonGalactico && mensajeLaser) {
        botonGalactico.addEventListener('click', () => {
            mensajeLaser.innerHTML = "✨ ¡PixelSquad reportándose! Cuatro开发者 al servicio del código y la galaxia. ✨";
            mensajeLaser.style.animation = "none";
            setTimeout(() => {
                mensajeLaser.style.animation = "laser 0.5s ease";
            }, 10);
        });
    }
    
    // 2️⃣ CONTROL DE ANIMACIÓN CRAWL
    const crawl = document.getElementById("crawl");
    if (crawl) {
        crawl.addEventListener("animationiteration", () => {
            console.log("🌀 El texto galáctico continúa su viaje...");
        });
    }
    
    // 3️⃣ SUBMENÚ PARA TÁCTILES (mejora mobile)
    const integrantesBtn = document.querySelector('.integrantes-btn');
    const submenu = document.querySelector('.submenu');
    
    if (integrantesBtn && submenu) {
        integrantesBtn.addEventListener('click', function(event) {
            event.preventDefault();
            submenu.classList.toggle('show-submenu');
            // Para móviles: mostrar/ocultar con clase
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
        
        // Cerrar submenú si se clickea fuera
        document.addEventListener('click', function(e) {
            if (!integrantesBtn.contains(e.target) && !submenu.contains(e.target)) {
                submenu.style.display = 'none';
                submenu.classList.remove('show-submenu');
            }
        });
    }
    
    // 4️⃣ EFECTO EXTRA: las tarjetas tienen brillo al cargar
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach((tarjeta, index) => {
        setTimeout(() => {
            tarjeta.style.opacity = '1';
            tarjeta.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Estilo dinámico para la animación del mensaje
const style = document.createElement('style');
style.textContent = `
    @keyframes laser {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
    }
    .tarjeta {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.5s ease;
    }
`;
document.head.appendChild(style);
