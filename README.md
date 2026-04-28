# PixelSquad - Trabajo Práctico 1

**Link al Deploy:** [Insertar Link de Vercel aquí]

## 1. Descripción del Proyecto

PixelSquad es un sitio web colaborativo que funciona como carta de presentación del equipo. El proyecto muestra una portada principal con el nombre del grupo, una breve descripción del objetivo, enlaces a las páginas individuales de cada integrante, y una bitácora con el proceso de desarrollo. El trabajo incluye HTML semántico, diseño responsivo con CSS y funcionalidades dinámicas con JavaScript.

## 2. Integrantes

- Ivan - https://github.com/ii-v-vi
- Enzo - https://github.com/enluuca
- Pablo - https://github.com/Poff93
- Alejandro - https://github.com/AleR25

## 3. Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts (Inter, Exo 2, Pathway Gothic One, Orbitron)
- GitHub
- Vercel
- Gemini AI (NanoBanana)

## 4. Estructura de archivos

- `index.html` — Portada principal ubicada en el directorio raíz.
- `bitacora.html` — Página de bitácora ubicada en el directorio raíz.
- `contacto.html` — Página de contacto ubicada en el directorio raíz.
- `integrantes/` — Carpeta con las páginas individuales de cada integrante.
- `css/style.css` — Archivo de estilos centralizado.
- `js/main.js` — Archivo JavaScript principal para las interacciones.
- `img/` — Carpeta de imágenes y avatares.
- `README.md` — Documentación del proyecto.

## 5. Checklist de cumplimiento

### 5.1 Estructura del proyecto
- [x] `index.html` en la raíz del proyecto
- [x] Páginas individuales dentro de `integrantes/`
- [x] Hoja de estilos en `css/style.css`
- [x] Lógica dinámica en `js/main.js`
- [x] Bitácora en `bitacora.html`
- [x] Página de contacto en `contacto.html`
- [x] Carpeta `img/` con imágenes y avatares

### 5.2 Navegación y enlaces
- [x] Navegación consistente en todas las páginas
- [x] Enlaces funcionales entre páginas
- [x] Submenú de integrantes desplegable
- [x] Modal de contacto funcional

### 5.3 Diseño y estilos
- [x] Paleta de colores centralizada con variables CSS y base RGB semántica; colores hardcoded solo en `:root`
- [x] Responsive en `@media` para `400px`, `900px` y `1200px`
- [x] Tipografías Google Fonts aplicadas correctamente
- [x] Espaciado y consistencia visual
- [x] Animaciones y transiciones suaves (efecto staggered en tarjetas)

### 5.4 Contenido
- [x] HTML semántico (header, nav, main, article, section, etc.)
- [x] Información completa en perfiles de Ivan y Pablo
- [ ] Completar datos de perfil en `integrantes/enzo.html`
- [ ] Completar datos de perfil en `integrantes/alejandro.html`
- [x] Bitácora con proceso de desarrollo
- [x] Uso de avatares e ilustraciones (no fotos reales)

### 5.5 Funcionalidades JavaScript
- [x] Interacción obligatoria (botón sable de luz)
- [x] Control de animación crawl
- [x] Submenú táctil para móviles
- [x] Efectos en tarjetas al cargar
- [x] Botón de interacción en páginas de integrantes

### 5.6 Calidad y optimización
- [x] Código limpio y comentado
- [x] Sin errores de HTML/CSS/JS
- [x] Eliminación de redundancias (fonts duplicadas, estilos inline)
- [ ] Agregar capturas de pantalla reales
- [ ] Insertar enlace de deploy final

## 6. Guía de estilos

### 6.1 Paleta de colores
- Base RGB: `--yellow` = `255, 232, 31`
- Base RGB: `--orange` = `255, 102, 0`
- Base RGB: `--red` = `255, 68, 68`
- Base RGB: `--dark` = `5, 5, 5`
- Base RGB: `--white` = `255, 255, 255`
- Base RGB: `--black` = `0, 0, 0`

A partir de estas seis bases se generan variables semánticas en `:root` para:
- Fondo: `--color-bg`
- Superficie: `--color-surface`
- Superficie secundaria: `--color-surface-alt`
- Texto principal: `--color-text`
- Texto secundario: `--color-text-muted`
- Acento: `--color-accent`
- Acento fuerte: `--color-accent-strong`
- Aviso / error: `--color-warning` / `--color-warning-strong`

Se usan variantes con alfa mediante `rgba(var(--yellow), ...)`, `rgba(var(--red), ...)`, `rgba(var(--dark), ...)` y `rgba(var(--white), ...)` para sombras, fondos translúcidos y hover states.

### 6.2 Tipografías
- `Inter` — Texto general y párrafos.
- `Exo 2` — Navegación, botones y enlaces.
- `Pathway Gothic One` — Títulos principales y secciones destacadas.
- `Orbitron` — Etiquetas especiales, fijadores y secciones de bitácora.

Google Fonts usado: `https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&family=Inter:wght@400;700&family=Orbitron:wght@400;700;900&family=Pathway+Gothic+One&display=swap`

### 6.3 Espaciado y consistencia
- Márgenes y padding base de `20px` entre secciones.
- Contenedores y tarjetas con padding entre `25px` y `40px`.
- Botones con padding uniforme entre `12px` y `28px`.
- Listas y bloques con gaps de `8px` a `30px` para mantener ritmo visual.
- Tipografías escaladas de forma consistente en los breakpoints `400px`, `900px` y `1200px`.
- En el CSS se usan variables para centralizar colores y evitar duplicación.

### 6.4 Iconografía y privacidad
No se usan fotos personales reales. El sitio utiliza avatares e ilustraciones, y preserva la privacidad de los integrantes mediante imágenes generadas con IA.

## 7. Funcionalidades JavaScript

### 7.1 Portada (`index.html`)
- Botón `🔊 Activar mensaje de la Alianza`: alterna mensajes dinámicos en la sección principal.
- Animación de texto tipo crawl en la portada.
- Efecto de brillo en las tarjetas de los integrantes al cargar la página.
- Menú táctil para el submenú de integrantes en dispositivos móviles.

### 7.2 Páginas individuales (`integrantes/*.html`)
- Botón `✨ Mostrar más sobre mí`: despliega contenido adicional en cada tarjeta individual.
- Esta interacción se aplica a todas las páginas de integrante mediante el mismo script.

### 7.3 Contacto y modal
- Modal de contacto funcional en `contacto.html`.

## 8. Capturas de pantalla

- Portada principal (`index.html`)
- Página de integrante individual
- Bitácora o contacto

> Reemplazar estas referencias con imágenes reales dentro de `img/` cuando estén disponibles.

- El formulario de contacto muestra un modal de confirmación cuando se envía.

## Diseño adaptable

El sitio responde a los siguientes breakpoints requeridos:

- `400px` — móviles pequeños.
- `900px` — tablets y pantallas medianas.
- `1200px` — escritorio grande.

Las secciones se ajustan para mantener legibilidad, evitar desbordes y permitir una navegación clara en todos los tamaños.

## Bitácora

La bitácora está disponible en `bitacora.html` y describe:

- decisiones de diseño tomadas por el equipo,
- dificultades encontradas y cómo se resolvieron,
- cambios importantes durante la implementación.

## Uso de IA

- Herramientas: Gemini AI con modelo NanoBanana.
- Uso en imágenes: generación de avatares e ilustraciones de estilo cartoon/galáctico para evitar fotos personales.
- Uso en contenido y código: la IA asistió en la redacción del README y en la optimización de CSS y JavaScript.
- Prompt base para avatares:

  > "Genera un Avatar cartoon estilo guerra de las galaxias: un zorro naranja, vestido con túnica de Jedi pero con una laptop flotante con el logo de visual fox pro en algun lado. Fondo de estrella de la muerte de fondo. Colores cálidos, estilo ilustración vectorial."

  A partir de esa imagen, se pidió "Haz una imagen en este mismo estilo pero reemplaza el animal por [animal deseado]" para las demás versiones.

### Estructura del proyecto

- `index.html` — Portada principal.
- `bitacora.html` — Bitácora.
- `contacto.html` — Página de contacto.
- `integrantes/pablo.html`, `integrantes/enzo.html`, `integrantes/ivan.html`, `integrantes/alejandro.html` — Páginas individuales.
- `css/style.css` — Estilos del sitio.
- `js/main.js` — Lógica de interacción.
- `img/` — Imágenes y avatares.
