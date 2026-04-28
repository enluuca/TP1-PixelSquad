document.addEventListener("DOMContentLoaded", function() {
    
    // 1️⃣ INTERACCIÓN OBLIGATORIA (Botón sable de luz)
    const botonGalactico = document.getElementById('btn-saludo');
    const mensajeLaser = document.getElementById('mensaje-dinamico');


    const mensajesAlianza = [
    "✨ ¡PixelSquad reportándose! Cuatro desarrolladores al servicio del código. ✨",
    "🚀 ¡Que la Fuerza del Clean Code te acompañe siempre!",
    "🛰️ Transmisión entrante: La lógica es el camino a la victoria.",
    "⚔️ Un Jedi no usa Force Push... usa Git Push.",
    "🛡️ Escudos levantados. Protegiendo el repositorio de los bugs del Imperio.",
    "🌌 En una galaxia muy, muy lejana, alguien olvidó cerrar un <div>.",
    "🤖 R2-D2 dice: 01001000 01101111 01101100 01100001 (Hola).",
    "🛸 ¡A la velocidad de la luz! Optimizando el tiempo de carga.",
    "🌟 La Alianza Rebelde agradece tu contribución al sistema.",
    "🌑 Eso no es una luna... ¡es una base de datos mal indexada!"
    ];
    
    let indiceMensaje = 0; // Para llevar la cuenta de cuál mensaje mostrar

    if (botonGalactico && mensajeLaser) {
        botonGalactico.addEventListener('click', () => {
        mensajeLaser.textContent = mensajesAlianza[indiceMensaje];
        mensajeLaser.style.animation = "none";
        setTimeout(() => {
            mensajeLaser.style.animation = "laser 0.5s ease";
        }, 10);
        indiceMensaje = (indiceMensaje + 1) % mensajesAlianza.length;
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
        });
        
        document.addEventListener('click', function(e) {
            if (!integrantesBtn.contains(e.target) && !submenu.contains(e.target)) {
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
    
    // 5️⃣ BOTÓN DE INTERACCIÓN EN PÁGINAS DE INTEGRANTES
    const btnInteraccion = document.getElementById('btn-interaccion');
    const infoExtra = document.getElementById('info-extra');
    
    if (btnInteraccion && infoExtra) {
        btnInteraccion.addEventListener('click', () => {
            if (infoExtra.style.display === 'none') {
                infoExtra.style.display = 'block';
                btnInteraccion.textContent = '✨ Ocultar';
            } else {
                infoExtra.style.display = 'none';
                btnInteraccion.textContent = '✨ Mostrar más sobre mí';
            }
        });
    }
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
    .show-submenu {
        display: block !important;
    }
`;
document.head.appendChild(style);

const formContacto = document.getElementById('form-contacto');
const modal = document.getElementById('modal-galactico');

if (formContacto && modal) {
    formContacto.addEventListener('submit', (e) => {
        e.preventDefault(); 
        modal.style.display = 'flex';
        formContacto.reset();
        setTimeout(() => {
            window.location.href = "index.html";
        }, 6000);
    });
}
