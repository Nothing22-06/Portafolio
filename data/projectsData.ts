export interface WeekProject {
    id: string;
    semana: string;
    title: string;
    description: string;
    image: string;
    content: {
        theory: string[];
        examples: {
            title: string;
            description: string;
            code: string;
            language: string;
        }[];
        resources: {
            name: string;
            url: string;
            type: string;
        }[];
        reflection: string;
    };
    tech: any[];
    cover: string;
    link: string;
}

export const projectsData: WeekProject[] = [
    {
        id: "semana01",
        semana: "SEMANA 01",
        title: "Exposición de sílabo y Fundamentos de la Tecnología Web",
        description: "Introducción a los conceptos fundamentales del desarrollo web, explorando HTML, CSS y JavaScript como pilares básicos.",
        image: "/semana_1.png",
        content: {
            theory: [
                "La tecnología web se basa en tres pilares fundamentales: HTML para la estructura, CSS para el diseño y JavaScript para la interactividad.",
                "HTML (HyperText Markup Language) es el lenguaje de marcado que define la estructura y contenido de las páginas web mediante elementos y etiquetas.",
                "CSS (Cascading Style Sheets) es el lenguaje de estilos que controla la presentación visual, incluyendo colores, tipografías, espaciado y diseño responsivo.",
                "JavaScript es el lenguaje de programación que añade funcionalidad e interactividad a las páginas web, permitiendo manipular el DOM y responder a eventos del usuario.",
                "El desarrollo web moderno requiere comprensión de protocolos HTTP/HTTPS, arquitectura cliente-servidor y herramientas de desarrollo como navegadores y editores de código."
            ],
            examples: [
                {
                    title: "Estructura HTML Básica",
                    description: "Ejemplo de la estructura fundamental de un documento HTML",
                    code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página Web</title>
</head>
<body>
    <header>
        <h1>Bienvenido a mi sitio web</h1>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-mi">Sobre mí</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="inicio">
            <h2>Inicio</h2>
            <p>Esta es mi primera página web.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 Mi Sitio Web</p>
    </footer>
</body>
</html>`,
                    language: "html"
                },
                {
                    title: "Estilos CSS Básicos",
                    description: "Aplicación de estilos fundamentales con CSS",
                    code: `/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

header {
    background: linear-gradient(135deg, #000, #ff0000);
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

nav li {
    margin: 0 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #ff6b6b;
}`,
                    language: "css"
                },
                {
                    title: "JavaScript Interactivo",
                    description: "Funcionalidad básica con JavaScript para interacción del usuario",
                    code: `// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Cambio dinámico de contenido
    const welcomeText = document.getElementById('welcome');
    const messages = [
        '¡Bienvenido a mi sitio web!',
        '¡Explora mi portafolio!',
        '¡Conoce mis proyectos!'
    ];
    
    let currentIndex = 0;
    
    function changeMessage() {
        if (welcomeText) {
            welcomeText.textContent = messages[currentIndex];
            currentIndex = (currentIndex + 1) % messages.length;
        }
    }
    
    // Cambiar mensaje cada 3 segundos
    setInterval(changeMessage, 3000);
    
    // Smooth scrolling para navegación
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});`,
                    language: "javascript"
                }
            ],
            resources: [
                {
                    name: "MDN Web Docs - HTML",
                    url: "https://developer.mozilla.org/es/docs/Web/HTML",
                    type: "Documentación"
                },
                {
                    name: "MDN Web Docs - CSS",
                    url: "https://developer.mozilla.org/es/docs/Web/CSS",
                    type: "Documentación"
                },
                {
                    name: "MDN Web Docs - JavaScript",
                    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
                    type: "Documentación"
                },
                {name: "Visual Studio Code", url: "https://code.visualstudio.com/", type: "Herramienta"}
            ],
            reflection: "Esta primera semana estableció las bases fundamentales del desarrollo web. Aprendimos que el desarrollo web moderno requiere dominar tres tecnologías core que trabajan en conjunto: HTML para estructura semántica, CSS para presentación visual atractiva, y JavaScript para interactividad dinámica. La combinación efectiva de estas tecnologías es lo que permite crear experiencias web completas y profesionales."
        },
        tech: [],
        cover: "/semana_1.png",
        link: "/semana01"
    },
    {
        id: "semana02",
        semana: "SEMANA 02",
        title: "HTML y Emmet",
        description: "Profundización en HTML semántico y dominio de Emmet para acelerar el desarrollo web.",
        image: "/semana_2.jpg",
        content: {
            theory: [
                "HTML semántico utiliza elementos que describen claramente su significado tanto para desarrolladores como para navegadores y motores de búsqueda.",
                "Los elementos semánticos como <header>, <nav>, <main>, <article>, <section>, <aside> y <footer> mejoran la accesibilidad y SEO.",
                "Emmet es una herramienta que permite escribir HTML y CSS de forma rápida mediante abreviaciones que se expanden automáticamente.",
                "La estructura correcta del documento HTML incluye DOCTYPE, elementos meta para SEO y responsive design.",
                "Los formularios HTML requieren elementos específicos como input, select, textarea con atributos de validación apropiados."
            ],
            examples: [
                {
                    title: "HTML Semántico Completo",
                    description: "Estructura semántica moderna con todos los elementos principales",
                    code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portafolio profesional de desarrollo web">
    <meta name="keywords" content="desarrollo web, HTML, CSS, JavaScript">
    <title>Portafolio - Desarrollador Web</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#portafolio">Portafolio</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="inicio">
            <h1>Desarrollador Web Full Stack</h1>
            <p>Creando experiencias web excepcionales</p>
        </section>

        <section id="servicios">
            <h2>Mis Servicios</h2>
            <article>
                <h3>Desarrollo Frontend</h3>
                <p>Interfaces modernas y responsivas</p>
            </article>
            <article>
                <h3>Desarrollo Backend</h3>
                <p>APIs robustas y escalables</p>
            </article>
        </section>

        <aside>
            <h3>Tecnologías</h3>
            <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2024 - Todos los derechos reservados</p>
    </footer>
</body>
</html>`,
                    language: "html"
                },
                {
                    title: "Abreviaciones Emmet Esenciales",
                    description: "Comandos Emmet más utilizados para acelerar el desarrollo",
                    code: `/* Abreviaciones Emmet más comunes */

/* 1. Estructura básica */
! + Tab
/* Genera: <!DOCTYPE html><html><head>...</head><body></body></html> */

/* 2. Elementos con clases */
div.container + Tab
/* Genera: <div class="container"></div> */

/* 3. Elementos con IDs */
header#main-header + Tab
/* Genera: <header id="main-header"></header> */

/* 4. Múltiples elementos */
li*5 + Tab
/* Genera: <li></li><li></li><li></li><li></li><li></li> */

/* 5. Elementos anidados */
nav>ul>li*3>a + Tab
/* Genera: 
<nav>
    <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
    </ul>
</nav> */

/* 6. Elementos hermanos */
header+main+footer + Tab
/* Genera: <header></header><main></main><footer></footer> */

/* 7. Contenido de texto */
h1{Título Principal} + Tab
/* Genera: <h1>Título Principal</h1> */

/* 8. Atributos personalizados */
img[src="imagen.jpg" alt="Descripción"] + Tab
/* Genera: <img src="imagen.jpg" alt="Descripción"> */`,
                    language: "html"
                },
                {
                    title: "Formulario HTML Avanzado",
                    description: "Formulario completo con validación HTML5 y elementos modernos",
                    code: `<form action="/contacto" method="POST" novalidate>
    <fieldset>
        <legend>Información Personal</legend>
        
        <div class="form-group">
            <label for="nombre">Nombre completo *</label>
            <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                required 
                minlength="2"
                maxlength="50"
                placeholder="Ingresa tu nombre completo"
            >
        </div>

        <div class="form-group">
            <label for="email">Correo electrónico *</label>
            <input 
                type="email" 
                id="email" 
                name="email" 
                required
                placeholder="ejemplo@correo.com"
            >
        </div>

        <div class="form-group">
            <label for="telefono">Teléfono</label>
            <input 
                type="tel" 
                id="telefono" 
                name="telefono"
                pattern="[0-9]{9}"
                placeholder="999888777"
            >
        </div>
    </fieldset>

    <fieldset>
        <legend>Mensaje</legend>
        
        <div class="form-group">
            <label for="asunto">Asunto</label>
            <select id="asunto" name="asunto" required>
                <option value="">Selecciona un asunto</option>
                <option value="consulta">Consulta general</option>
                <option value="proyecto">Nuevo proyecto</option>
                <option value="soporte">Soporte técnico</option>
            </select>
        </div>

        <div class="form-group">
            <label for="mensaje">Mensaje *</label>
            <textarea 
                id="mensaje" 
                name="mensaje" 
                required
                minlength="10"
                maxlength="500"
                rows="5"
                placeholder="Escribe tu mensaje aquí..."
            ></textarea>
        </div>

        <div class="form-group">
            <input type="checkbox" id="acepto" name="acepto" required>
            <label for="acepto">
                Acepto los <a href="/terminos">términos y condiciones</a> *
            </label>
        </div>
    </fieldset>

    <div class="form-actions">
        <button type="submit">Enviar mensaje</button>
        <button type="reset">Limpiar formulario</button>
    </div>
</form>`,
                    language: "html"
                }
            ],
            resources: [
                {name: "Emmet Documentation", url: "https://docs.emmet.io/", type: "Documentación"},
                {
                    name: "HTML5 Semantic Elements",
                    url: "https://www.w3schools.com/html/html5_semantic_elements.asp",
                    type: "Tutorial"
                },
                {
                    name: "MDN HTML Forms Guide",
                    url: "https://developer.mozilla.org/en-US/docs/Learn/Forms",
                    type: "Guía"
                },
                {name: "Can I Use - HTML5", url: "https://caniuse.com/", type: "Herramienta"}
            ],
            reflection: "Esta semana profundizamos en HTML semántico y Emmet, herramientas esenciales para el desarrollo web eficiente. El HTML semántico no solo mejora la accesibilidad y SEO, sino que también hace el código más mantenible. Emmet revoluciona la velocidad de desarrollo, permitiendo crear estructuras complejas con simples abreviaciones. La combinación de ambos conceptos establece una base sólida para el desarrollo web profesional."
        },
        tech: [],
        cover: "/semana_2.jpg",
        link: "/semana02"
    },
    {
        id: "semana03",
        semana: "SEMANA 03",
        title: "CSS Básico y Avanzado",
        description: "Dominio completo de CSS desde selectores básicos hasta técnicas avanzadas como Flexbox, Grid y animaciones.",
        image: "/semana_3.png",
        content: {
            theory: [
                "CSS (Cascading Style Sheets) controla la presentación visual de documentos HTML mediante selectores, propiedades y valores.",
                "El modelo de caja CSS incluye content, padding, border y margin, fundamental para el layout y espaciado.",
                "Flexbox es un sistema de layout unidimensional ideal para alinear elementos en filas o columnas con control total sobre distribución y alineación.",
                "CSS Grid es un sistema bidimensional que permite crear layouts complejos con filas y columnas definidas.",
                "Las animaciones CSS incluyen transitions para cambios suaves y keyframes para animaciones complejas y personalizadas.",
                "El diseño responsivo utiliza media queries para adaptar estilos según el tamaño de pantalla y características del dispositivo."
            ],
            examples: [
                {
                    title: "Sistema de Layout con Flexbox",
                    description: "Implementación completa de Flexbox para layouts modernos",
                    code: `/* Layout principal con Flexbox */
.container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

.header {
    background: linear-gradient(135deg, #000, #ff0000);
    color: white;
    padding: 1rem;
    flex-shrink: 0;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
}

.main-content {
    display: flex;
    flex: 1;
    gap: 2rem;
    padding: 2rem;
}

.sidebar {
    flex: 0 0 250px;
    background: #f5f5f5;
    padding: 1rem;
    border-radius: 8px;
}

.content {
    flex: 1;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    flex-shrink: 0;
}

/* Cards con Flexbox */
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
}

.card {
    flex: 1 1 300px;
    max-width: 350px;
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}`,
                    language: "css"
                },
                {
                    title: "CSS Grid Layout Avanzado",
                    description: "Sistema de grid completo para layouts complejos",
                    code: `/* Grid Layout Principal */
.grid-container {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 250px 1fr 200px;
    min-height: 100vh;
    gap: 1rem;
    padding: 1rem;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Grid de productos/portafolio */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

.portfolio-item {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.portfolio-item:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 30px rgba(255,0,0,0.2);
}

/* Grid responsivo avanzado */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
}

.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }
.col-4 { grid-column: span 4; }
.col-6 { grid-column: span 6; }
.col-8 { grid-column: span 8; }
.col-12 { grid-column: span 12; }

/* Media queries para grid responsivo */
@media (max-width: 768px) {
    .grid-container {
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "aside"
            "footer";
        grid-template-columns: 1fr;
    }
    
    .responsive-grid {
        grid-template-columns: 1fr;
    }
    
    .col-1, .col-2, .col-3, .col-4, .col-6, .col-8 {
        grid-column: span 12;
    }
}`,
                    language: "css"
                },
                {
                    title: "Animaciones CSS Avanzadas",
                    description: "Animaciones complejas con keyframes y transitions",
                    code: `/* Animaciones con keyframes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.7);
    }
    70% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
    }
}

@keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

/* Aplicación de animaciones */
.animated-card {
    animation: fadeInUp 0.6s ease-out;
    transition: all 0.3s ease;
}

.animated-card:hover {
    animation: pulse 2s infinite;
}

.slide-in {
    animation: slideInFromLeft 0.8s ease-out;
}

/* Botón con animaciones complejas */
.animated-button {
    position: relative;
    background: linear-gradient(45deg, #000, #ff0000);
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 25px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
}

.animated-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
}

.animated-button:hover::before {
    left: 100%;
}

.animated-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255,0,0,0.4);
}

/* Loading spinner */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #ff0000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`,
                    language: "css"
                }
            ],
            resources: [
                {
                    name: "CSS Tricks - Flexbox Guide",
                    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
                    type: "Guía"
                },
                {name: "CSS Grid Garden", url: "https://cssgridgarden.com/", type: "Juego Interactivo"},
                {name: "Animate.css", url: "https://animate.style/", type: "Librería"},
                {
                    name: "MDN CSS Reference",
                    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                    type: "Documentación"
                }
            ],
            reflection: "Esta semana fue transformadora en mi comprensión de CSS. Pasé de ver CSS como simple estilizado a entenderlo como una herramienta poderosa para crear layouts complejos y experiencias interactivas. Flexbox y Grid revolucionaron mi forma de pensar sobre el diseño web, mientras que las animaciones añadieron vida a mis interfaces. La combinación de estas técnicas me permite crear diseños modernos, responsivos y visualmente atractivos."
        },
        tech: [],
        cover: "/semana_3.png",
        link: "/semana03"
    },
    {
        id: "semana04",
        semana: "SEMANA 04",
        title: "Bootstrap y Tailwind CSS",
        description: "Comparación y dominio de los frameworks CSS más populares para desarrollo rápido y eficiente.",
        image: "/semana_4.png",
        content: {
            theory: [
                "Bootstrap es un framework CSS que proporciona componentes prediseñados y un sistema de grid responsivo para desarrollo rápido.",
                "Tailwind CSS es un framework utility-first que permite construir diseños personalizados usando clases de utilidad de bajo nivel.",
                "Bootstrap utiliza un enfoque de componentes con JavaScript incluido, mientras Tailwind se enfoca en utilidades CSS puras.",
                "El sistema de grid de Bootstrap usa 12 columnas con breakpoints predefinidos para diseño responsivo.",
                "Tailwind CSS permite mayor personalización y control granular sobre el diseño, resultando en archivos CSS más pequeños en producción.",
                "Ambos frameworks aceleran el desarrollo pero requieren diferentes enfoques: Bootstrap para prototipado rápido, Tailwind para diseños únicos."
            ],
            examples: [
                {
                    title: "Layout Responsivo con Bootstrap",
                    description: "Sistema de grid y componentes de Bootstrap para diseño responsivo",
                    code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Layout</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navbar Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Mi Portfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#inicio">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#servicios">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="bg-primary text-white py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h1 class="display-4 fw-bold">Desarrollador Full Stack</h1>
                    <p class="lead">Creando soluciones web modernas y eficientes</p>
                    <button class="btn btn-light btn-lg">Ver Proyectos</button>
                </div>
                <div class="col-lg-6">
                    <img src="hero-image.jpg" class="img-fluid rounded" alt="Hero">
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Mis Servicios</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100 shadow">
                        <div class="card-body text-center">
                            <i class="bi bi-code-slash fs-1 text-primary mb-3"></i>
                            <h5 class="card-title">Frontend</h5>
                            <p class="card-text">Desarrollo de interfaces modernas con React y Vue.js</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow">
                        <div class="card-body text-center">
                            <i class="bi bi-server fs-1 text-primary mb-3"></i>
                            <h5 class="card-title">Backend</h5>
                            <p class="card-text">APIs robustas con Node.js y bases de datos</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow">
                        <div class="card-body text-center">
                            <i class="bi bi-phone fs-1 text-primary mb-3"></i>
                            <h5 class="card-title">Mobile</h5>
                            <p class="card-text">Aplicaciones móviles con React Native</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`,
                    language: "html"
                },
                {
                    title: "Diseño Moderno con Tailwind CSS",
                    description: "Implementación de diseño personalizado usando utilidades de Tailwind",
                    code: `<DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'custom-red': '#ff0000',
                        'custom-black': '#000000',
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="text-2xl font-bold text-custom-black">
                    Dev<span class="text-custom-red">Portfolio</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#inicio" class="text-gray-700 hover:text-custom-red transition-colors">Inicio</a>
                    <a href="#sobre-mi" class="text-gray-700 hover:text-custom-red transition-colors">Sobre mí</a>
                    <a href="#proyectos" class="text-gray-700 hover:text-custom-red transition-colors">Proyectos</a>
                    <a href="#contacto" class="text-gray-700 hover:text-custom-red transition-colors">Contacto</a>
                </div>
                <button class="md:hidden">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-20 pb-16 bg-gradient-to-br from-custom-black to-gray-900">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="text-white">
                    <h1 class="text-5xl md:text-6xl font-bold mb-6">
                        Desarrollador
                        <span class="text-custom-red">Full Stack</span>
                    </h1>
                    <p class="text-xl mb-8 text-gray-300">
                        Creando experiencias web excepcionales con tecnologías modernas
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button class="bg-custom-red hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            Ver Proyectos
                        </button>
                        <button class="border-2 border-custom-red text-custom-red hover:bg-custom-red hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            Contactar
                        </button>
                    </div>
                </div>
                <div class="relative">
                    <div class="w-80 h-80 bg-gradient-to-br from-custom-red to-red-700 rounded-full mx-auto opacity-20"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center text-white">
                            <div class="w-32 h-32 bg-custom-red rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span class="text-4xl font-bold">JS</span>
                            </div>
                            <p class="text-lg">JavaScript Expert</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Grid -->
    <section class="py-16">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mb-12">Tecnologías</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <div class="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3"></div>
                    <h3 class="font-semibold">React</h3>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <div class="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-3"></div>
                    <h3 class="font-semibold">Node.js</h3>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <div class="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-3"></div>
                    <h3 class="font-semibold">MongoDB</h3>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <div class="w-12 h-12 bg-yellow-500 rounded-lg mx-auto mb-3"></div>
                    <h3 class="font-semibold">JavaScript</h3>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <div class="w-12 h-12 bg-red-500 rounded-lg mx-auto mb-3"></div>
                    <h3 class="font-semibold">HTML5</h3>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                    <div class="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-3"></div>
                    <h3 class="font-semibold">CSS3</h3>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`,
                    language: "html"
                },
                {
                    title: "Comparación Bootstrap vs Tailwind",
                    description: "Mismo componente implementado con ambos frameworks",
                    code: `/* BOOTSTRAP APPROACH */
<!-- Card con Bootstrap -->
<div class="card shadow-lg">
    <img src="project.jpg" class="card-img-top" alt="Proyecto">
    <div class="card-body">
        <h5 class="card-title">Mi Proyecto</h5>
        <p class="card-text">Descripción del proyecto desarrollado con React y Node.js</p>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button class="btn btn-primary">Ver Demo</button>
                <button class="btn btn-outline-secondary">Código</button>
            </div>
            <small class="text-muted">2024</small>
        </div>
    </div>
</div>

/* TAILWIND APPROACH */
<!-- Mismo card con Tailwind -->
<div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <img src="project.jpg" class="w-full h-48 object-cover" alt="Proyecto">
    <div class="p-6">
        <h5 class="text-xl font-bold mb-2">Mi Proyecto</h5>
        <p class="text-gray-600 mb-4">Descripción del proyecto desarrollado con React y Node.js</p>
        <div class="flex justify-between items-center">
            <div class="flex space-x-2">
                <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                    Ver Demo
                </button>
                <button class="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded transition-colors">
                    Código
                </button>
            </div>
            <small class="text-gray-500">2024</small>
        </div>
    </div>
</div>

/* VENTAJAS Y DESVENTAJAS */

/* Bootstrap:
✅ Desarrollo rápido
✅ Componentes prediseñados
✅ JavaScript incluido
✅ Documentación extensa
❌ Diseños similares
❌ Archivo CSS grande
❌ Menos personalización

Tailwind:
✅ Diseños únicos
✅ Archivo final pequeño
✅ Control granular
✅ Utility-first approach
❌ Curva de aprendizaje
❌ HTML más verboso
❌ Requiere configuración */`,
                    language: "html"
                }
            ],
            resources: [
                {name: "Bootstrap Documentation", url: "https://getbootstrap.com/docs/", type: "Documentación"},
                {name: "Tailwind CSS Documentation", url: "https://tailwindcss.com/docs", type: "Documentación"},
                {
                    name: "Bootstrap vs Tailwind Comparison",
                    url: "https://blog.logrocket.com/bootstrap-vs-tailwind-css/",
                    type: "Artículo"
                },
                {name: "Tailwind UI Components", url: "https://tailwindui.com/", type: "Recursos"}
            ],
            reflection: "Esta semana exploré dos enfoques completamente diferentes para el desarrollo con CSS. Bootstrap me permitió crear interfaces rápidamente con componentes prediseñados, ideal para prototipos y proyectos con tiempos ajustados. Tailwind, por otro lado, me dio control total sobre el diseño, permitiendo crear interfaces únicas sin escribir CSS personalizado. Aprendí que la elección entre ambos depende del proyecto: Bootstrap para rapidez y consistencia, Tailwind para diseños únicos y optimización."
        },
        tech: [],
        cover: "/semana_4.png",
        link: "/semana04"
    },
    {
        id: "semana05",
        semana: "SEMANA 05",
        title: "JavaScript y TypeScript",
        description: "Fundamentos sólidos de JavaScript moderno y introducción a TypeScript para desarrollo más robusto.",
        image: "/semana_5.jpg",
        content: {
            theory: [
                "JavaScript es un lenguaje de programación dinámico que permite crear interactividad en páginas web y aplicaciones.",
                "ES6+ introdujo características modernas como arrow functions, destructuring, modules, async/await y template literals.",
                "TypeScript es un superset de JavaScript que añade tipado estático, mejorando la detección de errores y la experiencia de desarrollo.",
                "Los conceptos fundamentales incluyen variables, funciones, objetos, arrays, loops, condicionales y manejo de eventos.",
                "JavaScript moderno utiliza programación asíncrona con Promises y async/await para manejar operaciones no bloqueantes.",
                "TypeScript proporciona interfaces, tipos personalizados, generics y mejor tooling para proyectos grandes y equipos."
            ],
            examples: [
                {
                    title: "JavaScript ES6+ Moderno",
                    description: "Características esenciales de JavaScript moderno con ES6+",
                    code: `// Variables y constantes
const nombre = 'Juan';
let edad = 25;
const usuario = {
    nombre,
    edad,
    activo: true
};

// Arrow functions
const saludar = (nombre) => \`Hola, \${nombre}!\`;
const calcular = (a, b) => a + b;

// Destructuring
const { nombre: nombreUsuario, edad: edadUsuario } = usuario;
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];

// Template literals
const mensaje = \`
    Usuario: \${nombreUsuario}
    Edad: \${edadUsuario}
    Estado: \${usuario.activo ? 'Activo' : 'Inactivo'}
\`;

// Spread operator
const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5, 6];
const nuevoUsuario = { ...usuario, email: 'juan@email.com' };

// Array methods modernos
const productos = [
    { id: 1, nombre: 'Laptop', precio: 1000 },
    { id: 2, nombre: 'Mouse', precio: 25 },
    { id: 3, nombre: 'Teclado', precio: 75 }
];

// Filter, map, reduce
const productosCaros = productos.filter(p => p.precio > 50);
const nombres = productos.map(p => p.nombre);
const total = productos.reduce((sum, p) => sum + p.precio, 0);

// Find y some
const laptop = productos.find(p => p.nombre === 'Laptop');
const hayProductosCaros = productos.some(p => p.precio > 500);

// Async/await
async function obtenerDatos() {
    try {
        const response = await fetch('https://api.ejemplo.com/datos');
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Promises
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = Math.random() > 0.5;
        if (exito) {
            resolve('Operación exitosa');
        } else {
            reject('Error en la operación');
        }
    }, 1000);
});

promesa
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));

// Modules (export/import)
export const utilidades = {
    formatearFecha: (fecha) => fecha.toLocaleDateString(),
    validarEmail: (email) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)
};

export default class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    
    saludar() {
        return \`Hola, soy \${this.nombre}\`;
    }
}`,
                    language: "javascript"
                },
                {
                    title: "TypeScript Fundamentos",
                    description: "Introducción a TypeScript con tipos, interfaces y clases",
                    code: `// Tipos básicos
\`let nombre: string = 'Juan';
let edad: number = 25;
let activo: boolean = true;
let hobbies: string[] = ['programar', 'leer', 'viajar'];

// Interfaces
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad?: number; // Opcional
    activo: boolean;
}

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    enStock: boolean;
}

// Tipos personalizados
type Estado = 'pendiente' | 'completado' | 'cancelado';
type ID = string | number;

// Funciones tipadas
function crearUsuario(nombre: string, email: string, edad?: number): Usuario {
    return {
        id: Math.random(),
        nombre,
        email,
        edad: edad || 0,
        activo: true
    };
}

const calcularDescuento = (precio: number, descuento: number): number => {
    return precio * (1 - descuento / 100);
};

// Clases con TypeScript
class GestorProductos {
    private productos: Producto[] = [];
    
    constructor(readonly nombre: string) {}
    
    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    }
    
    buscarPorId(id: number): Producto | undefined {
        return this.productos.find(p => p.id === id);
    }
    
    filtrarPorCategoria(categoria: string): Producto[] {
        return this.productos.filter(p => p.categoria === categoria);
    }
    
    get totalProductos(): number {
        return this.productos.length;
    }
    
    calcularValorInventario(): number {
        return this.productos
            .filter(p => p.enStock)
            .reduce((total, p) => total + p.precio, 0);
    }
}

// Generics
function crearArray<T>(items: T[]): T[] {
    return [...items];
}

interface Respuesta<T> {
    datos: T;
    mensaje: string;
    exito: boolean;
}

async function obtenerDatos<T>(url: string): Promise<Respuesta<T>> {
    try {
        const response = await fetch(url);
        const datos = await response.json();
        return {
            datos,
            mensaje: 'Datos obtenidos correctamente',
            exito: true
        };
    } catch (error) {
        throw new Error(\`Error al obtener datos: \${error}\`);
    }
}

// Uso práctico
const gestor = new GestorProductos('Mi Tienda');

const producto: Producto = {
    id: 1,
    nombre: 'Laptop Gaming',
    precio: 1500,
    categoria: 'Electrónicos',
    enStock: true
};

gestor.agregarProducto(producto);

// Async/await con tipos
async function procesarPedido(usuarioId: ID, productoId: number): Promise<string> {
    try {
        const usuario = await obtenerDatos<Usuario>(\`/api/usuarios/\${usuarioId}\`);
        const producto = await obtenerDatos<Producto>(\`/api/productos/\${productoId}\`);
        
        if (usuario.exito && producto.exito) {
            return \`Pedido procesado para \${usuario.datos.nombre}\`;
        }
        
        throw new Error('Error al procesar pedido');
    } catch (error) {
        return \`Error: \${error}\`;
    }
}`,
                    language: "typescript"
                },
                {
                    title: "Manipulación del DOM con JavaScript",
                    description: "Interacción dinámica con elementos HTML usando JavaScript moderno",
                    code: `// Selección de elementos
\`const titulo = document.querySelector('#titulo');
const botones = document.querySelectorAll('.btn');
const formulario = document.getElementById('formulario');
const lista = document.querySelector('.lista-productos');

// Creación dinámica de elementos
function crearProductoCard(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';
    card.innerHTML = 
        <img src="\${producto.imagen}" alt="\${producto.nombre}">
        <h3>\${producto.nombre}</h3>
        <p class="precio">$\${producto.precio}</p>
        <button class="btn-comprar" data-id="\${producto.id}">
            Agregar al carrito
        </button>
    \`;
    \`return card;
}

// Event listeners modernos
document.addEventListener('DOMContentLoaded', () => {
    inicializarApp();
});

// Manejo de eventos con delegación
lista.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-comprar')) {
        const productoId = event.target.dataset.id;
        agregarAlCarrito(productoId);
    }
});

// Formularios y validación
formulario.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(formulario);
    const datos = Object.fromEntries(formData);
    
    if (validarFormulario(datos)) {
        try {
            await enviarDatos(datos);
            mostrarMensaje('Datos enviados correctamente', 'exito');
            formulario.reset();
        } catch (error) {
            mostrarMensaje('Error al enviar datos', 'error');
        }
    }
});

// Funciones de utilidad
function validarFormulario(datos) {
    const errores = [];
    
    if (!datos.nombre || datos.nombre.length < 2) {
        errores.push('El nombre debe tener al menos 2 caracteres');
    }
    
    if (!datos.email || !validarEmail(datos.email)) {
        errores.push('Email inválido');
    }
    
    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    }
    
    return true;
}

function validarEmail(email) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

function mostrarMensaje(mensaje, tipo) {
    const alerta = document.createElement('div');
    alerta.className = \`alerta alerta-\${tipo}\`;
    alerta.textContent = mensaje;
    
    document.body.appendChild(alerta);
    
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

// Animaciones y efectos
function animarElemento(elemento, animacion) {
    elemento.style.animation = animacion;
    
    elemento.addEventListener('animationend', () => {
        elemento.style.animation = '';
    }, { once: true });
}

// Local Storage
const carrito = {
    items: JSON.parse(localStorage.getItem('carrito')) || [],
    
    agregar(producto) {
        this.items.push(producto);
        this.guardar();
        this.actualizar();
    },
    
    eliminar(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.guardar();
        this.actualizar();
    },
    
    guardar() {
        localStorage.setItem('carrito', JSON.stringify(this.items));
    },
    
    actualizar() {
        const contador = document.querySelector('.contador-carrito');
        if (contador) {
            contador.textContent = this.items.length;
        }
    }
};

// Inicialización
function inicializarApp() {
    cargarProductos();
    carrito.actualizar();
    configurarEventos();
}

async function cargarProductos() {
    try {
        const productos = await fetch('/api/productos').then(r => r.json());
        
        productos.forEach(producto => {
            const card = crearProductoCard(producto);
            lista.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}`,
                    language: "javascript"
                }
            ],
            resources: [
                {
                    name: "MDN JavaScript Guide",
                    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
                    type: "Documentación"
                },
                {name: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/", type: "Documentación"},
                {name: "JavaScript.info", url: "https://javascript.info/", type: "Tutorial"},
                {name: "TypeScript Playground", url: "https://www.typescriptlang.org/play", type: "Herramienta"}
            ],
            reflection: "Esta semana marcó un punto de inflexión en mi comprensión de la programación web. JavaScript moderno con ES6+ me abrió un mundo de posibilidades con sintaxis más limpia y funcionalidades poderosas. TypeScript, aunque inicialmente desafiante, demostró ser invaluable para escribir código más robusto y mantenible. La combinación de ambos me permite escribir aplicaciones más confiables y escalables, estableciendo una base sólida para el desarrollo frontend y backend."
        },
        tech: [],
        cover: "/semana_5.jpg",
        link: "/semana05"
    },
    {
        id: "semana06",
        semana: "SEMANA 06",
        title: "Conociendo React",
        description: "Introducción a React, la librería más popular para construir interfaces de usuario modernas y dinámicas.",
        image: "/semana_6.png",
        content: {
            theory: [
                "React es una librería de JavaScript desarrollada por Facebook para construir interfaces de usuario basadas en componentes.",
                "Los componentes son bloques de construcción reutilizables que encapsulan lógica y presentación en una sola unidad.",
                "JSX es una extensión de sintaxis que permite escribir HTML dentro de JavaScript de forma más intuitiva.",
                "El estado (state) permite que los componentes mantengan y actualicen datos que pueden cambiar con el tiempo.",
                "Las props son propiedades que se pasan de componentes padre a componentes hijo para compartir datos.",
                "El Virtual DOM es una representación en memoria del DOM real que React utiliza para optimizar las actualizaciones."
            ],
            examples: [
                {
                    title: "Componentes Funcionales y JSX",
                    description: "Creación de componentes básicos con JSX y props",
                    code: "import React from 'react';\n\n// Componente funcional básico\nfunction Saludo({ nombre, edad }) {\n  return (\n    <div className=\"saludo\">\n      <h2>¡Hola, {nombre}!</h2>\n      <p>Tienes {edad} años</p>\n    </div>\n  );\n}\n\n// Componente con lógica condicional\nfunction EstadoUsuario({ usuario }) {\n  const esMayorDeEdad = usuario.edad >= 18;\n\n  return (\n    <div className=\"estado-usuario\">\n      <h3>{usuario.nombre}</h3>\n      {esMayorDeEdad ? (\n        <span className=\"badge adulto\">Adulto</span>\n      ) : (\n        <span className=\"badge menor\">Menor de edad</span>\n      )}\n      {usuario.activo && (\n        <div className=\"estado-activo\">\n          <span>✅ Usuario activo</span>\n        </div>\n      )}\n    </div>\n  );\n}\n\n// Componente con lista\nfunction ListaProductos({ productos }) {\n  if (productos.length === 0) {\n    return <p>No hay productos disponibles</p>;\n  }\n\n  return (\n    <div className=\"lista-productos\">\n      <h2>Productos ({productos.length})</h2>\n      <ul>\n        {productos.map(producto => (\n          <li key={producto.id} className=\"producto-item\">\n            <strong>{producto.nombre}</strong>\n            <span className=\"precio\">${producto.precio}</span>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\n// Componente principal\nfunction App() {\n  const usuario = {\n    nombre: 'Ana García',\n    edad: 28,\n    activo: true\n  };\n\n  const productos = [\n    { id: 1, nombre: 'Laptop', precio: 999 },\n    { id: 2, nombre: 'Mouse', precio: 25 },\n    { id: 3, nombre: 'Teclado', precio: 75 }\n  ];\n\n  return (\n    <div className=\"app\">\n      <header>\n        <h1>Mi Aplicación React</h1>\n      </header>\n      <main>\n        <Saludo nombre={usuario.nombre} edad={usuario.edad} />\n        <EstadoUsuario usuario={usuariokl} />\n        <ListaProductos productos={productos} />\n      </main>\n    </div>\n  );\n}\n\nexport default App;",
                    language: "javascript"
                },
                {
                    title: "Estado y Eventos en React",
                    description: "Manejo de estado local y eventos de usuario",
                    code: "import React, { useState } from 'react';\n\n// Contador simple con estado\nfunction Contador() {\n  const [count, setCount] = useState(0);\n\n  const incrementar = () => setCount(count + 1);\n  const decrementar = () => setCount(count - 1);\n  const reset = () => setCount(0);\n\n  return (\n    <div className=\"contador\">\n      <h2>Contador: {count}</h2>\n      <div className=\"botones\">\n        <button onClick={decrementar}>-</button>\n        <button onClick={reset}>Reset</button>\n        <button onClick={incrementar}>+</button>\n      </div>\n    </div>\n  );\n}\n\n// Formulario controlado\nfunction FormularioContacto() {\n  const [formData, setFormData] = useState({\n    nombre: '',\n    email: '',\n    mensaje: ''\n  });\n\n  const [errores, setErrores] = useState({});\n  const [enviando, setEnviando] = useState(false);\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: value\n    }));\n\n    if (errores[name]) {\n      setErrores(prev => ({\n        ...prev,\n        [name]: ''\n      }));\n    }\n  };\n\n  const validarFormulario = () => {\n    const nuevosErrores = {};\n\n    if (!formData.nombre.trim()) {\n      nuevosErrores.nombre = 'El nombre es requerido';\n    }\n\n    if (!formData.email.trim()) {\n      nuevosErrores.email = 'El email es requerido';\n    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {\n      nuevosErrores.email = 'Email inválido';\n    }\n\n    if (!formData.mensaje.trim()) {\n      nuevosErrores.mensaje = 'El mensaje es requerido';\n    }\n\n    return nuevosErrores;\n  };\n\n  const handleSubmit = async (e) => {\n    e.preventDefault();\n\n    const nuevosErrores = validarFormulario();\n\n    if (Object.keys(nuevosErrores).length > 0) {\n      setErrores(nuevosErrores);\n      return;\n    }\n\n    setEnviando(true);\n\n    try {\n      await new Promise(resolve => setTimeout(resolve, 2000));\n      alert('Mensaje enviado correctamente');\n      setFormData({ nombre: '', email: '', mensaje: '' });\n    } catch (error) {\n      alert('Error al enviar el mensaje');\n    } finally {\n      setEnviando(false);\n    }\n  };\n\n  return (\n    <form onSubmit={handleSubmit} className=\"formulario-contacto\">\n      <h2>Contacto</h2>\n      <div className=\"campo\">\n        <label htmlFor=\"nombre\">Nombre:</label>\n        <input\n          type=\"text\"\n          id=\"nombre\"\n          name=\"nombre\"\n          value={formData.nombre}\n          onChange={handleChange}\n          className={errores.nombre ? 'error' : ''}\n        />\n        {errores.nombre && <span className=\"mensaje-error\">{errores.nombre}</span>}\n      </div>\n      <div className=\"campo\">\n        <label htmlFor=\"email\">Email:</label>\n        <input\n          type=\"email\"\n          id=\"email\"\n          name=\"email\"\n          value={formData.email}\n          onChange={handleChange}\n          className={errores.email ? 'error' : ''}\n        />\n        {errores.email && <span className=\"mensaje-error\">{errores.email}</span>}\n      </div>\n      <div className=\"campo\">\n        <label htmlFor=\"mensaje\">Mensaje:</label>\n        <textarea\n          id=\"mensaje\"\n          name=\"mensaje\"\n          value={formData.mensaje}\n          onChange={handleChange}\n          rows=\"4\"\n          className={errores.mensaje ? 'error' : ''}\n        />\n        {errores.mensaje && <span className=\"mensaje-error\">{errores.mensaje}</span>}\n      </div>\n      <button type=\"submit\" disabled={enviando}>\n        {enviando ? 'Enviando...' : 'Enviar Mensaje'}\n      </button>\n    </form>\n  );\n}\n\n// Lista de tareas interactiva\nfunction ListaTareas() {\n  const [tareas, setTareas] = useState([]);\n  const [nuevaTarea, setNuevaTarea] = useState('');\n\n  const agregarTarea = () => {\n    if (nuevaTarea.trim()) {\n      const tarea = {\n        id: Date.now(),\n        texto: nuevaTarea,\n        completada: false\n      };\n      setTareas([...tareas, tarea]);\n      setNuevaTarea('');\n    }\n  };\n\n  const toggleTarea = (id) => {\n    setTareas(tareas.map(tarea =>\n      tarea.id === id\n        ? { ...tarea, completada: !tarea.completada }\n        : tarea\n    ));\n  };\n\n  const eliminarTarea = (id) => {\n    setTareas(tareas.filter(tarea => tarea.id !== id));\n  };\n\n  const tareasCompletadas = tareas.filter(t => t.completada).length;\n\n  return (\n    <div className=\"lista-tareas\">\n      <h2>Lista de Tareas</h2>\n      <p>Completadas: {tareasCompletadas} de {tareas.length}</p>\n      <div className=\"agregar-tarea\">\n        <input\n          type=\"text\"\n          value={nuevaTarea}\n          onChange={(e) => setNuevaTarea(e.target.value)}\n          placeholder=\"Nueva tarea...\"\n          onKeyPress={(e) => e.key === 'Enter' && agregarTarea()}\n        />\n        <button onClick={agregarTarea}>Agregar</button>\n      </div>\n      <ul className=\"tareas\">\n        {tareas.map(tarea => (\n          <li key={tarea.id} className={tarea.completada ? 'completada' : ''}>\n            <input\n              type=\"checkbox\"\n              checked={tarea.completada}\n              onChange={() => toggleTarea(tarea.id)}\n            />\n            <span>{tarea.texto}</span>\n            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport { Contador, FormularioContacto, ListaTareas };",
                    language: "javascript"
                },
                {
                    title: "Componentes Reutilizables y Props",
                    description: "Creación de componentes reutilizables con diferentes tipos de props",
                    code: "import React, { useState } from 'react';\n\n// Componente Button reutilizable\nfunction Button({ \n  children, \n  variant = 'primary', \n  size = 'medium', \n  disabled = false, \n  onClick,\n  ...props \n}) {\n  const baseClasses = 'btn';\n  const variantClasses = {\n    primary: 'btn-primary',\n    secondary: 'btn-secondary',\n    danger: 'btn-danger'\n  };\n  const sizeClasses = {\n    small: 'btn-small',\n    medium: 'btn-medium',\n    large: 'btn-large'\n  };\n\n  const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;\n\n  return (\n    <button \n      className={className}\n      disabled={disabled}\n      onClick={onClick}\n      {...props}\n    >\n      {children}\n    </button>\n  );\n}\n\n// Componente Card reutilizable\nfunction Card({ title, children, footer, className = '' }) {\n  return (\n    <div className={`card ${className}`}>\n      {title && (\n        <div className=\"card-header\">\n          <h3>{title}</h3>\n        </div>\n      )}\n      <div className=\"card-body\">\n        {children}\n      </div>\n      {footer && (\n        <div className=\"card-footer\">\n          {footer}\n        </div>\n      )}\n    </div>\n  );\n}\n\n// Componente Modal reutilizable\nfunction Modal({ isOpen, onClose, title, children }) {\n  if (!isOpen) return null;\n\n  return (\n    <div className=\"modal-overlay\" onClick={onClose}>\n      <div className=\"modal-content\" onClick={(e) => e.stopPropagation()}>\n        <div className=\"modal-header\">\n          <h2>{title}</h2>\n          <button className=\"modal-close\" onClick={onClose}>×</button>\n        </div>\n        <div className=\"modal-body\">\n          {children}\n        </div>\n      </div>\n    </div>\n  );\n}\n\n// Componente Input reutilizable\nfunction Input({ \n  label, \n  error, \n  type = 'text', \n  placeholder,\n  value,\n  onChange,\n  required = false,\n  ...props \n}) {\n  return (\n    <div className=\"input-group\">\n      {label && (\n        <label className=\"input-label\">\n          {label}\n          {required && <span className=\"required\">*</span>}\n        </label>\n      )}\n      <input\n        type={type}\n        placeholder={placeholder}\n        value={value}\n        onChange={onChange}\n        className={error ? 'input error' : 'input'}\n        {...props}\n      />\n      {error && <span className=\"error-message\">{error}</span>}\n    </div>\n  );\n}\n\n// Componente que usa todos los componentes reutilizables\nfunction EjemploCompleto() {\n  const [modalAbierto, setModalAbierto] = useState(false);\n  const [formData, setFormData] = useState({\n    nombre: '',\n    email: '',\n    telefono: ''\n  });\n  const [errores, setErrores] = useState({});\n\n  const handleInputChange = (field) => (e) => {\n    setFormData(prev => ({\n      ...prev,\n      [field]: e.target.value\n    }));\n\n    if (errores[field]) {\n      setErrores(prev => ({\n        ...prev,\n        [field]: ''\n      }));\n    }\n  };\n\n  const validarFormulario = () => {\n    const nuevosErrores = {};\n\n    if (!formData.nombre) nuevosErrores.nombre = 'Nombre requerido';\n    if (!formData.email) nuevosErrores.email = 'Email requerido';\n\n    setErrores(nuevosErrores);\n    return Object.keys(nuevosErrores).length === 0;\n  };\n\n  const handleSubmit = () => {\n    if (validarFormulario()) {\n      alert('Formulario válido');\n      setModalAbierto(false);\n    }\n  };\n\n  return (\n    <div className=\"ejemplo-completo\">\n      <Card \n        title=\"Componentes Reutilizables\"\n        footer={\n          <div>\n            <Button onClick={() => setModalAbierto(true)}>\n              Abrir Modal\n            </Button>\n          </div>\n        }\n      >\n        <p>Este es un ejemplo de cómo usar componentes reutilizables en React.</p>\n        <div className=\"botones-ejemplo\">\n          <Button variant=\"primary\" size=\"small\">\n            Primario Pequeño\n          </Button>\n          <Button variant=\"secondary\" size=\"medium\">\n            Secundario Mediano\n          </Button>\n          <Button variant=\"danger\" size=\"large\">\n            Peligro Grande\n          </Button>\n          <Button disabled>\n            Deshabilitado\n          </Button>\n        </div>\n      </Card>\n      <Modal\n        isOpen={modalAbierto}\n        onClose={() => setModalAbierto(false)}\n        title=\"Formulario de Contacto\"\n      >\n        <div className=\"formulario-modal\">\n          <Input\n            label=\"Nombre\"\n            value={formData.nombre}\n            onChange={handleInputChange('nombre')}\n            error={errores.nombre}\n            required\n          />\n          <Input\n            label=\"Email\"\n            type=\"email\"\n            value={formData.email}\n            onChange={handleInputChange('email')}\n            error={errores.email}\n            required\n          />\n          <Input\n            label=\"Teléfono\"\n            type=\"tel\"\n            value={formData.telefono}\n            onChange={handleInputChange('telefono')}\n            error={errores.telefono}\n          />\n          <div className=\"modal-actions\">\n            <Button \n              variant=\"secondary\" \n              onClick={() => setModalAbierto(false)}\n            >\n              Cancelar\n            </Button>\n            <Button onClick={handleSubmit}>\n              Guardar\n            </Button>\n          </div>\n        </div>\n      </Modal>\n    </div>\n  );\n}\n\nexport { Button, Card, Modal, Input, EjemploCompleto };",
                    language: "javascript"
                }
            ],
            resources: [
                {
                    name: "React Documentation",
                    url: "https://react.dev/",
                    type: "Documentación"
                },
                {
                    name: "React Tutorial",
                    url: "https://react.dev/learn",
                    type: "Tutorial"
                },
                {
                    name: "Create React App",
                    url: "https://create-react-app.dev/",
                    type: "Herramienta"
                },
                {
                    name: "React DevTools",
                    url: "https://chrome.google.com/webstore/detail/react-developer-tools/",
                    type: "Extensión"
                }
            ],
            reflection: "Esta semana fue reveladora al descubrir React. La filosofía de componentes cambió completamente mi perspectiva sobre el desarrollo frontend. JSX inicialmente me pareció extraño, pero rápidamente aprecié su poder para combinar lógica y presentación. El manejo de estado y eventos me permitió crear interfaces verdaderamente interactivas. React no solo simplifica el desarrollo de interfaces complejas, sino que también promueve código reutilizable y mantenible. Es evidente por qué es tan popular en la industria."
        },
        tech: [],
        cover: "/semana_6.png",
        link: "/semana06"
    },
    {
        id: "semana07",
        semana: "SEMANA 07",
        title: "Hooks en React",
        description: "Dominio de React Hooks para manejo avanzado de estado, efectos y lógica reutilizable en componentes funcionales.",
        image: "/semana_7.png",
        content: {
            theory: [
                "Los Hooks son funciones especiales que permiten usar estado y otras características de React en componentes funcionales.",
                "useState permite agregar estado local a componentes funcionales de manera simple y directa.",
                "useEffect maneja efectos secundarios como llamadas a APIs, suscripciones y limpieza de recursos.",
                "useContext facilita el consumo de contexto sin necesidad de componentes wrapper.",
                "Los hooks personalizados permiten extraer lógica de componentes y reutilizarla entre diferentes componentes.",
                "useReducer es útil para manejar estado complejo con múltiples sub-valores y transiciones complejas."
            ],
            examples: [
                {
                    title: "useState y useEffect Básicos",
                    description: "Fundamentos de los hooks más utilizados en React",
                    code: "import React, { useState, useEffect } from 'react';\n\n// Componente con useState básico\nfunction Contador() {\n  const [count, setCount] = useState(0);\n  const [mensaje, setMensaje] = useState('');\n\n  // useEffect que se ejecuta en cada render\n  useEffect(() => {\n    document.title = \"Contador: \" + count;\n  });\n\n  // useEffect con dependencias\n  useEffect(() => {\n    if (count > 10) {\n      setMensaje('¡Contador alto!');\n    } else if (count < 0) {\n      setMensaje('¡Contador negativo!');\n    } else {\n      setMensaje('');\n    }\n  }, [count]);\n\n  return (\n    <div className=\"contador\">\n      <h2>Contador: {count}</h2>\n      {mensaje && <p className=\"mensaje\">{mensaje}</p>}\n      <button onClick={() => setCount(count - 1)}>-</button>\n      <button onClick={() => setCount(0)}>Reset</button>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  );\n}\n\n// Componente que consume una API\nfunction UsuarioInfo({ userId }) {\n  const [usuario, setUsuario] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    let cancelado = false;\n\n    const fetchUsuario = async () => {\n      try {\n        setLoading(true);\n        setError(null);\n\n        const response = await fetch(\"/api/usuarios/\" + userId);\n\n        if (!response.ok) {\n          throw new Error('Error al cargar usuario');\n        }\n\n        const data = await response.json();\n\n        if (!cancelado) {\n          setUsuario(data);\n        }\n      } catch (err) {\n        if (!cancelado) {\n          setError(err.message);\n        }\n      } finally {\n        if (!cancelado) {\n          setLoading(false);\n        }\n      }\n    };\n\n    fetchUsuario();\n\n    // Cleanup function\n    return () => {\n      cancelado = true;\n    };\n  }, [userId]);\n\n  if (loading) return <div>Cargando usuario...</div>;\n  if (error) return <div>Error: {error}</div>;\n  if (!usuario) return <div>Usuario no encontrado</div>;\n\n  return (\n    <div className=\"usuario-info\">\n      <h3>{usuario.nombre}</h3>\n      <p>Email: {usuario.email}</p>\n      <p>Teléfono: {usuario.telefono}</p>\n    </div>\n  );\n}\n\n// Componente con timer\nfunction Timer() {\n  const [segundos, setSegundos] = useState(0);\n  const [activo, setActivo] = useState(false);\n\n  useEffect(() => {\n    let intervalo = null;\n\n    if (activo) {\n      intervalo = setInterval(() => {\n        setSegundos(segundos => segundos + 1);\n      }, 1000);\n    } else if (!activo && segundos !== 0) {\n      clearInterval(intervalo);\n    }\n\n    // Cleanup\n    return () => clearInterval(intervalo);\n  }, [activo, segundos]);\n\n  const reset = () => {\n    setSegundos(0);\n    setActivo(false);\n  };\n\n  return (\n    <div className=\"timer\">\n      <div className=\"tiempo\">\n        {Math.floor(segundos / 60)}:{(segundos % 60).toString().padStart(2, '0')}\n      </div>\n      <button onClick={() => setActivo(!activo)}>\n        {activo ? 'Pausar' : 'Iniciar'}\n      </button>\n      <button onClick={reset}>Reset</button>\n    </div>\n  );\n}\n\nexport { Contador, UsuarioInfo, Timer };",
                    "language": "javascript"
                },
                {
                    title: "useContext y useReducer",
                    description: "Manejo de estado global y estado complejo con hooks avanzados",
                    code: "import React, { createContext, useContext, useReducer, useState } from 'react';\n\n// Contexto para el tema\nconst TemaContext = createContext();\n\n// Contexto para el carrito de compras\nconst CarritoContext = createContext();\n\n// Reducer para el carrito\nconst carritoReducer = (state, action) => {\n  switch (action.type) {\n    case 'AGREGAR_ITEM':\n      const itemExistente = state.items.find(item => item.id === action.payload.id);\n\n      if (itemExistente) {\n        return {\n          ...state,\n          items: state.items.map(item =>\n            item.id === action.payload.id\n              ? { ...item, cantidad: item.cantidad + 1 }\n              : item\n          )\n        };\n      }\n\n      return {\n        ...state,\n        items: [...state.items, { ...action.payload, cantidad: 1 }]\n      };\n\n    case 'ELIMINAR_ITEM':\n      return {\n        ...state,\n        items: state.items.filter(item => item.id !== action.payload)\n      };\n\n    case 'ACTUALIZAR_CANTIDAD':\n      return {\n        ...state,\n        items: state.items.map(item =>\n          item.id === action.payload.id\n            ? { ...item, cantidad: action.payload.cantidad }\n            : item\n        )\n      };\n\n    case 'LIMPIAR_CARRITO':\n      return {\n        ...state,\n        items: []\n      };\n\n    default:\n      return state;\n  }\n};\n\n// Provider del tema\nfunction TemaProvider({ children }) {\n  const [tema, setTema] = useState('claro');\n\n  const toggleTema = () => {\n    setTema(tema === 'claro' ? 'oscuro' : 'claro');\n  };\n\n  return (\n    <TemaContext.Provider value={{ tema, toggleTema }}>\n      {children}\n    </TemaContext.Provider>\n  );\n}\n\n// Provider del carrito\nfunction CarritoProvider({ children }) {\n  const [state, dispatch] = useReducer(carritoReducer, {\n    items: [],\n    total: 0\n  });\n\n  // Calcular total cuando cambien los items\n  const total = state.items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);\n\n  const agregarItem = (producto) => {\n    dispatch({ type: 'AGREGAR_ITEM', payload: producto });\n  };\n\n  const eliminarItem = (id) => {\n    dispatch({ type: 'ELIMINAR_ITEM', payload: id });\n  };\n\n  const actualizarCantidad = (id, cantidad) => {\n    if (cantidad <= 0) {\n      eliminarItem(id);\n    } else {\n      dispatch({ type: 'ACTUALIZAR_CANTIDAD', payload: { id, cantidad } });\n    }\n  };\n\n  const limpiarCarrito = () => {\n    dispatch({ type: 'LIMPIAR_CARRITO' });\n  };\n\n  return (\n    <CarritoContext.Provider value={{\n      items: state.items,\n      total,\n      agregarItem,\n      eliminarItem,\n      actualizarCantidad,\n      limpiarCarrito\n    }}>\n      {children}\n    </CarritoContext.Provider>\n  );\n}\n\n// Hook personalizado para usar el tema\nfunction useTema() {\n  const context = useContext(TemaContext);\n  if (!context) {\n    throw new Error('useTema debe usarse dentro de TemaProvider');\n  }\n  return context;\n}\n\n// Hook personalizado para usar el carrito\nfunction useCarrito() {\n  const context = useContext(CarritoContext);\n  if (!context) {\n    throw new Error('useCarrito debe usarse dentro de CarritoProvider');\n  }\n  return context;\n}\n\n// Componente que usa el contexto del tema\nfunction ToggleTema() {\n  const { tema, toggleTema } = useTema();\n\n  return (\n    <button onClick={toggleTema} className=\"toggle-tema\">\n      Cambiar a tema {tema === 'claro' ? 'oscuro' : 'claro'}\n    </button>\n  );\n}\n\n// Componente producto\nfunction Producto({ producto }) {\n  const { agregarItem } = useCarrito();\n  const { tema } = useTema();\n\n  return (\n    <div className=\"producto tema-\" + tema>\n      <h3>{producto.nombre}</h3>\n      <p className=\"precio\">${producto.precio}</p>\n      <button onClick={() => agregarItem(producto)}>\n        Agregar al carrito\n      </button>\n    </div>\n  );\n}\n\n// Componente carrito\nfunction Carrito() {\n  const { items, total, actualizarCantidad, eliminarItem, limpiarCarrito } = useCarrito();\n  const { tema } = useTema();\n\n  if (items.length === 0) {\n    return <div className=\"carrito-vacio tema-\" + tema>El carrito está vacío</div>;\n  }\n\n  return (\n    <div className=\"carrito tema-\" + tema>\n      <h2>Carrito de Compras</h2>\n\n      {items.map(item => (\n        <div key={item.id} className=\"item-carrito\">\n          <span>{item.nombre}</span>\n          <div className=\"cantidad-controles\">\n            <button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}>\n              -\n            </button>\n            <span>{item.cantidad}</span>\n            <button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>\n              +\n            </button>\n          </div>\n          <span>${item.precio * item.cantidad}</span>\n          <button onClick={() => eliminarItem(item.id)}>Eliminar</button>\n        </div>\n      ))}\n\n      <div className=\"total\">\n        <strong>Total: ${total.toFixed(2)}</strong>\n      </div>\n\n      <button onClick={limpiarCarrito} className=\"limpiar-carrito\">\n        Limpiar Carrito\n      </button>\n    </div>\n  );\n}\n\n// Aplicación principal\nfunction App() {\n  const productos = [\n    { id: 1, nombre: 'Laptop', precio: 999 },\n    { id: 2, nombre: 'Mouse', precio: 25 },\n    { id: 3, nombre: 'Teclado', precio: 75 }\n  ];\n\n  return (\n    <TemaProvider>\n      <CarritoProvider>\n        <div className=\"app\">\n          <header>\n            <h1>Tienda Online</h1>\n            <ToggleTema />\n          </header>\n\n          <main>\n            <section className=\"productos\">\n              <h2>Productos</h2>\n              <div className=\"lista-productos\">\n                {productos.map(producto => (\n                  <Producto key={producto.id} producto={producto} />\n                ))}\n              </div>\n            </section>\n\n            <aside>\n              <Carrito />\n            </aside>\n          </main>\n        </div>\n      </CarritoProvider>\n    </TemaProvider>\n  );\n}\n\nexport { App, TemaProvider, CarritoProvider, useTema, useCarrito };",
                    language: "javascript"
                },
                {
                    title: "Hooks Personalizados",
                    description: "Creación de hooks reutilizables para lógica común",
                    code: "import { useState, useEffect, useCallback, useRef } from 'react';\n\n// Hook para manejar localStorage\nfunction useLocalStorage(key, initialValue) {\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      console.error(\"Error reading localStorage key \\\"\" + key + \"\\\":\", error);\n      return initialValue;\n    }\n  });\n\n  const setValue = (value) => {\n    try {\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setStoredValue(valueToStore);\n      window.localStorage.setItem(key, JSON.stringify(valueToStore));\n    } catch (error) {\n      console.error(\"Error setting localStorage key \\\"\" + key + \"\\\":\", error);\n    }\n  };\n\n  return [storedValue, setValue];\n}\n\n// Hook para fetch de datos\nfunction useFetch(url, options = {}) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n\n  const fetchData = useCallback(async () => {\n    try {\n      setLoading(true);\n      setError(null);\n\n      const response = await fetch(url, options);\n\n      if (!response.ok) {\n        throw new Error(\"HTTP error! status: \" + response.status);\n      }\n\n      const result = await response.json();\n      setData(result);\n    } catch (err) {\n      setError(err.message);\n    } finally {\n      setLoading(false);\n    }\n  }, [url, JSON.stringify(options)]);\n\n  useEffect(() => {\n    fetchData();\n  }, [fetchData]);\n\n  const refetch = () => {\n    fetchData();\n  };\n\n  return { data, loading, error, refetch };\n}\n\n// Hook para debounce\nfunction useDebounce(value, delay) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n\n  useEffect(() => {\n    const handler = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    return () => {\n      clearTimeout(handler);\n    };\n  }, [value, delay]);\n\n  return debouncedValue;\n}\n\n// Hook para detectar clicks fuera de un elemento\nfunction useClickOutside(ref, callback) {\n  useEffect(() => {\n    function handleClickOutside(event) {\n      if (ref.current && !ref.current.contains(event.target)) {\n        callback();\n      }\n    }\n\n    document.addEventListener('mousedown', handleClickOutside);\n    return () => {\n      document.removeEventListener('mousedown', handleClickOutside);\n    };\n  }, [ref, callback]);\n}\n\n// Hook para manejar formularios\nfunction useForm(initialValues, validationRules = {}) {\n  const [values, setValues] = useState(initialValues);\n  const [errors, setErrors] = useState({});\n  const [touched, setTouched] = useState({});\n\n  const handleChange = (name, value) => {\n    setValues(prev => ({\n      ...prev,\n      [name]: value\n    }));\n\n    if (errors[name]) {\n      setErrors(prev => ({\n        ...prev,\n        [name]: ''\n      }));\n    }\n  };\n\n  const handleBlur = (name) => {\n    setTouched(prev => ({\n      ...prev,\n      [name]: true\n    }));\n\n    if (validationRules[name]) {\n      const error = validationRules[name](values[name]);\n      if (error) {\n        setErrors(prev => ({\n          ...prev,\n          [name]: error\n        }));\n      }\n    }\n  };\n\n  const validate = () => {\n    const newErrors = {};\n\n    Object.keys(validationRules).forEach(field => {\n      const error = validationRules[field](values[field]);\n      if (error) {\n        newErrors[field] = error;\n      }\n    });\n\n    setErrors(newErrors);\n    return Object.keys(newErrors).length === 0;\n  };\n\n  const reset = () => {\n    setValues(initialValues);\n    setErrors({});\n    setTouched({});\n  };\n\n  return {\n    values,\n    errors,\n    touched,\n    handleChange,\n    handleBlur,\n    validate,\n    reset\n  };\n}\n\n// Hook para contador con límites\nfunction useCounter(initialValue = 0, { min = -Infinity, max = Infinity } = {}) {\n  const [count, setCount] = useState(initialValue);\n\n  const increment = () => {\n    setCount(prev => Math.min(prev + 1, max));\n  };\n\n  const decrement = () => {\n    setCount(prev => Math.max(prev - 1, min));\n  };\n\n  const reset = () => {\n    setCount(initialValue);\n  };\n\n  const set = (value) => {\n    setCount(Math.max(min, Math.min(max, value)));\n  };\n\n  return {\n    count,\n    increment,\n    decrement,\n    reset,\n    set\n  };\n}\n\n// Ejemplos de uso de los hooks personalizados\nfunction EjemplosHooksPersonalizados() {\n  // Hook de localStorage\n  const [nombre, setNombre] = useLocalStorage('nombre', '');\n\n  // Hook de fetch\n  const { data: usuarios, loading, error, refetch } = useFetch('/api/usuarios');\n\n  // Hook de debounce para búsqueda\n  const [searchTerm, setSearchTerm] = useState('');\n  const debouncedSearchTerm = useDebounce(searchTerm, 500);\n\n  // Hook de formulario\n  const {\n    values,\n    errors,\n    handleChange,\n    handleBlur,\n    validate,\n    reset\n  } = useForm(\n    { email: '', password: '' },\n    {\n      email: (value) => {\n        if (!value) return 'Email requerido';\n        if (!/^[\\\\w-\\\\.]+@[\\\\w-]+\\\\.[\\\\w-]{2,}$/.test(value)) return 'Email inválido';\n        return '';\n      },\n      password: (value) => {\n        if (!value) return 'Password requerido';\n        if (value.length < 6) return 'Password debe tener al menos 6 caracteres';\n        return '';\n      }\n    }\n  );\n\n  // Hook de contador\n  const { count, increment, decrement, reset: resetCounter } = useCounter(0, { min: 0, max: 10 });\n\n  // Hook de click outside\n  const dropdownRef = useRef(null);\n  const [isDropdownOpen, setIsDropdownOpen] = useState(false);\n\n  useClickOutside(dropdownRef, () => {\n    setIsDropdownOpen(false);\n  });\n\n  // Efecto para búsqueda con debounce\n  useEffect(() => {\n    if (debouncedSearchTerm) {\n      console.log('Buscando:', debouncedSearchTerm);\n      // Aquí harías la búsqueda real\n    }\n  }, [debouncedSearchTerm]);\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    if (validate()) {\n      console.log('Formulario válido:', values);\n    }\n  };\n\n  return (\n    <div className=\"ejemplos-hooks\">\n      <h2>Ejemplos de Hooks Personalizados</h2>\n\n      {/* LocalStorage Hook */}\n      <section>\n        <h3>LocalStorage Hook</h3>\n        <input\n          type=\"text\"\n          value={nombre}\n          onChange={(e) => setNombre(e.target.value)}\n          placeholder=\"Tu nombre (se guarda automáticamente)\"\n        />\n        <p>Nombre guardado: {nombre}</p>\n      </section>\n\n      {/* Fetch Hook */}\n      <section>\n        <h3>Fetch Hook</h3>\n        {loading && <p>Cargando usuarios...</p>}\n        {error && <p>Error: {error}</p>}\n        {usuarios && <p>Usuarios cargados: {usuarios.length}</p>}\n        <button onClick={refetch}>Recargar</button>\n      </section>\n\n      {/* Debounce Hook */}\n      <section>\n        <h3>Debounce Hook</h3>\n        <input\n          type=\"text\"\n          value={searchTerm}\n          onChange={(e) => setSearchTerm(e.target.value)}\n          placeholder=\"Buscar (con debounce de 500ms)\"\n        />\n        <p>Término de búsqueda: {debouncedSearchTerm}</p>\n      </section>\n\n      {/* Form Hook */}\n      <section>\n        <h3>Form Hook</h3>\n        <form onSubmit={handleSubmit}>\n          <div>\n            <input\n              type=\"email\"\n              value={values.email}\n              onChange={(e) => handleChange('email', e.target.value)}\n              onBlur={() => handleBlur('email')}\n              placeholder=\"Email\"\n            />\n            {errors.email && <span className=\"error\">{errors.email}</span>}\n          </div>\n\n          <div>\n            <input\n              type=\"password\"\n              value={values.password}\n              onChange={(e) => handleChange('password', e.target.value)}\n              onBlur={() => handleBlur('password')}\n              placeholder=\"Password\"\n            />\n            {errors.password && <span className=\"error\">{errors.password}</span>}\n          </div>\n\n          <button type=\"submit\">Enviar</button>\n          <button type=\"button\" onClick={reset}>Reset</button>\n        </form>\n      </section>\n\n      {/* Counter Hook */}\n      <section>\n        <h3>Counter Hook (0-10)</h3>\n        <p>Contador: {count}</p>\n        <button onClick={decrement}>-</button>\n        <button onClick={resetCounter}>Reset</button>\n        <button onClick={increment}>+</button>\n      </section>\n\n      {/* Click Outside Hook */}\n      <section>\n        <h3>Click Outside Hook</h3>\n        <div ref={dropdownRef} className=\"dropdown\">\n          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>\n            Toggle Dropdown\n          </button>\n          {isDropdownOpen && (\n            <div className=\"dropdown-content\">\n              <p>Haz click fuera para cerrar</p>\n            </div>\n          )}\n        </div>\n      </section>\n    </div>\n  );\n}\n\nexport {\n  useLocalStorage,\n  useFetch,\n  useDebounce,\n  useClickOutside,\n  useForm,\n  useCounter,\n  EjemplosHooksPersonalizados\n};",
                    language: "javascript"
                }
            ],
            resources: [
                {
                    name: "React Hooks Documentation",
                    url: "https://react.dev/reference/react",
                    type: "Documentación"
                },
                {
                    name: "Rules of Hooks",
                    url: "https://react.dev/warnings/invalid-hook-call-warning",
                    type: "Guía"
                },
                {
                    name: "Custom Hooks",
                    url: "https://react.dev/learn/reusing-logic-with-custom-hooks",
                    type: "Tutorial"
                },
                {
                    name: "React Hook Form",
                    url: "https://react-hook-form.com/",
                    type: "Librería"
                }
            ],
            reflection: "Los Hooks revolucionaron completamente mi forma de trabajar con React. useState y useEffect se convirtieron en herramientas fundamentales para manejar estado y efectos secundarios de manera elegante. useContext simplificó el manejo de estado global, mientras que useReducer me permitió manejar lógica compleja de manera predecible. Pero lo más poderoso fueron los hooks personalizados: la capacidad de extraer y reutilizar lógica entre componentes cambió mi perspectiva sobre la arquitectura de aplicaciones React. Los hooks no solo simplifican el código, sino que también promueven la reutilización y la separación de responsabilidades."
        },
        tech: [],
        cover: "/semana_7.png",
        link: "/semana07"
    },
    {
        id: "semana09",
        semana: "SEMANA 09",
        title: "Conociendo Java - Spring Boot",
        description: "Introducción al desarrollo backend con Java y Spring Boot, creando APIs REST robustas y escalables.",
        image: "/semana_9.jpg",
        content: {
            theory: [
                "Java es un lenguaje de programación orientado a objetos, robusto y multiplataforma, ideal para aplicaciones empresariales.",
                "Spring Boot es un framework que simplifica el desarrollo de aplicaciones Java, proporcionando configuración automática y convenciones sobre configuración.",
                "Las APIs REST siguen principios arquitectónicos para crear servicios web escalables y mantenibles usando métodos HTTP estándar.",
                "Spring Boot incluye un servidor web embebido (Tomcat) que permite ejecutar aplicaciones sin configuración externa.",
                "JPA (Java Persistence API) con Hibernate facilita el mapeo objeto-relacional y la gestión de bases de datos.",
                "Spring Security proporciona autenticación y autorización robusta para aplicaciones web y APIs."
            ],
            examples: [
                {
                    title: "Aplicación Spring Boot Básica",
                    description: "Estructura básica de una aplicación Spring Boot con controladores REST",
                    code: "// Application.java - Clase principal\npackage com.ejemplo.miapp;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class MiAppApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MiAppApplication.class, args);\n    }\n}\n\n// Usuario.java - Entidad JPA\npackage com.ejemplo.miapp.model;\n\nimport jakarta.persistence.*;\nimport jakarta.validation.constraints.Email;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Size;\n\n@Entity\n@Table(name = \"usuarios\")\npublic class Usuario {\n    \n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    \n    @NotBlank(message = \"El nombre es obligatorio\")\n    @Size(min = 2, max = 50, message = \"El nombre debe tener entre 2 y 50 caracteres\")\n    @Column(nullable = false)\n    private String nombre;\n    \n    @Email(message = \"Email debe ser válido\")\n    @NotBlank(message = \"El email es obligatorio\")\n    @Column(nullable = false, unique = true)\n    private String email;\n    \n    @Size(min = 6, message = \"La contraseña debe tener al menos 6 caracteres\")\n    @Column(nullable = false)\n    private String password;\n    \n    @Column(name = \"activo\")\n    private Boolean activo = true;\n    \n    // Constructores\n    public Usuario() {}\n    \n    public Usuario(String nombre, String email, String password) {\n        this.nombre = nombre;\n        this.email = email;\n        this.password = password;\n    }\n    \n    // Getters y Setters\n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n    \n    public String getNombre() { return nombre; }\n    public void setNombre(String nombre) { this.nombre = nombre; }\n    \n    public String getEmail() { return email; }\n    public void setEmail(String email) { this.email = email; }\n    \n    public String getPassword() { return password; }\n    public void setPassword(String password) { this.password = password; }\n    \n    public Boolean getActivo() { return activo; }\n    public void setActivo(Boolean activo) { this.activo = activo; }\n    \n    @Override\n    public String toString() {\n        return \"Usuario{\" +\n                \"id=\" + id +\n                \", nombre=\\\"\" + nombre + \"\\\"\" +\n                \", email=\\\"\" + email + \"\\\"\" +\n                \", activo=\" + activo +\n                \"}\";\n    }\n}\n\n// UsuarioRepository.java - Repositorio JPA\npackage com.ejemplo.miapp.repository;\n\nimport com.ejemplo.miapp.model.Usuario;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.Query;\nimport org.springframework.data.repository.query.Param;\nimport org.springframework.stereotype.Repository;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@Repository\npublic interface UsuarioRepository extends JpaRepository<Usuario, Long> {\n    \n    // Método de consulta derivado\n    Optional<Usuario> findByEmail(String email);\n    \n    // Consulta personalizada con JPQL\n    @Query(\"SELECT u FROM Usuario u WHERE u.activo = true\")\n    List<Usuario> findUsuariosActivos();\n    \n    // Consulta con parámetros\n    @Query(\"SELECT u FROM Usuario u WHERE u.nombre LIKE %:nombre%\")\n    List<Usuario> findByNombreContaining(@Param(\"nombre\") String nombre);\n    \n    // Consulta nativa SQL\n    @Query(value = \"SELECT * FROM usuarios WHERE email = ?1\", nativeQuery = true)\n    Optional<Usuario> findByEmailNative(String email);\n    \n    // Verificar si existe por email\n    boolean existsByEmail(String email);\n    \n    // Contar usuarios activos\n    @Query(\"SELECT COUNT(u) FROM Usuario u WHERE u.activo = true\")\n    long countUsuariosActivos();\n}",
                    language: "java"
                },
                {
                    title: "Controlador REST Completo",
                    description: "API REST completa con todas las operaciones CRUD",
                    code: "// UsuarioController.java - Controlador REST\npackage com.ejemplo.miapp.controller;\n\nimport com.ejemplo.miapp.model.Usuario;\nimport com.ejemplo.miapp.service.UsuarioService;\nimport jakarta.validation.Valid;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@RestController\n@RequestMapping(\"/api/usuarios\")\n@CrossOrigin(origins = \"*\")\npublic class UsuarioController {\n    \n    @Autowired\n    private UsuarioService usuarioService;\n    \n    // GET /api/usuarios - Obtener todos los usuarios con paginación\n    @GetMapping\n    public ResponseEntity<Page<Usuario>> obtenerTodosLosUsuarios(Pageable pageable) {\n        try {\n            Page<Usuario> usuarios = usuarioService.obtenerTodos(pageable);\n            return ResponseEntity.ok(usuarios);\n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();\n        }\n    }\n    \n    // GET /api/usuarios/{id} - Obtener usuario por ID\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Long id) {\n        try {\n            Optional<Usuario> usuario = usuarioService.obtenerPorId(id);\n            \n            if (usuario.isPresent()) {\n                return ResponseEntity.ok(usuario.get());\n            } else {\n                return ResponseEntity.notFound().build();\n            }\n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();\n        }\n    }\n    \n    // POST /api/usuarios - Crear nuevo usuario\n    @PostMapping\n    public ResponseEntity<?> crearUsuario(@Valid @RequestBody Usuario usuario) {\n        try {\n            // Verificar si el email ya existe\n            if (usuarioService.existePorEmail(usuario.getEmail())) {\n                return ResponseEntity.badRequest()\n                    .body(new ErrorResponse(\"El email ya está registrado\"));\n            }\n            \n            Usuario usuarioCreado = usuarioService.crear(usuario);\n            return ResponseEntity.status(HttpStatus.CREATED).body(usuarioCreado);\n            \n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)\n                .body(new ErrorResponse(\"Error interno del servidor\"));\n        }\n    }\n    \n    // PUT /api/usuarios/{id} - Actualizar usuario\n    @PutMapping(\"/{id}\")\n    public ResponseEntity<?> actualizarUsuario(\n            @PathVariable Long id, \n            @Valid @RequestBody Usuario usuarioActualizado) {\n        try {\n            Optional<Usuario> usuarioExistente = usuarioService.obtenerPorId(id);\n            \n            if (!usuarioExistente.isPresent()) {\n                return ResponseEntity.notFound().build();\n            }\n            \n            // Verificar si el nuevo email ya existe (excepto para el usuario actual)\n            if (!usuarioExistente.get().getEmail().equals(usuarioActualizado.getEmail()) &&\n                usuarioService.existePorEmail(usuarioActualizado.getEmail())) {\n                return ResponseEntity.badRequest()\n                    .body(new ErrorResponse(\"El email ya está registrado\"));\n            }\n            \n            usuarioActualizado.setId(id);\n            Usuario usuarioGuardado = usuarioService.actualizar(usuarioActualizado);\n            \n            return ResponseEntity.ok(usuarioGuardado);\n            \n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)\n                .body(new ErrorResponse(\"Error interno del servidor\"));\n        }\n    }\n    \n    // DELETE /api/usuarios/{id} - Eliminar usuario\n    @DeleteMapping(\"/{id}\")\n    public ResponseEntity<?> eliminarUsuario(@PathVariable Long id) {\n        try {\n            if (!usuarioService.existePorId(id)) {\n                return ResponseEntity.notFound().build();\n            }\n            \n            usuarioService.eliminar(id);\n            return ResponseEntity.ok(new SuccessResponse(\"Usuario eliminado correctamente\"));\n            \n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)\n                .body(new ErrorResponse(\"Error interno del servidor\"));\n        }\n    }\n    \n    // GET /api/usuarios/buscar?nombre=... - Buscar usuarios por nombre\n    @GetMapping(\"/buscar\")\n    public ResponseEntity<List<Usuario>> buscarUsuarios(@RequestParam String nombre) {\n        try {\n            List<Usuario> usuarios = usuarioService.buscarPorNombre(nombre);\n            return ResponseEntity.ok(usuarios);\n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();\n        }\n    }\n    \n    // GET /api/usuarios/activos - Obtener solo usuarios activos\n    @GetMapping(\"/activos\")\n    public ResponseEntity<List<Usuario>> obtenerUsuariosActivos() {\n        try {\n            List<Usuario> usuarios = usuarioService.obtenerUsuariosActivos();\n            return ResponseEntity.ok(usuarios);\n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();\n        }\n    }\n    \n    // PATCH /api/usuarios/{id}/activar - Activar/desactivar usuario\n    @PatchMapping(\"/{id}/activar\")\n    public ResponseEntity<?> toggleActivarUsuario(@PathVariable Long id) {\n        try {\n            Optional<Usuario> usuario = usuarioService.toggleActivo(id);\n            \n            if (usuario.isPresent()) {\n                return ResponseEntity.ok(usuario.get());\n            } else {\n                return ResponseEntity.notFound().build();\n            }\n        } catch (Exception e) {\n            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)\n                .body(new ErrorResponse(\"Error interno del servidor\"));\n        }\n    }\n    \n    // Clases para respuestas\n    public static class ErrorResponse {\n        private String mensaje;\n        private long timestamp;\n        \n        public ErrorResponse(String mensaje) {\n            this.mensaje = mensaje;\n            this.timestamp = System.currentTimeMillis();\n        }\n        \n        // Getters\n        public String getMensaje() { return mensaje; }\n        public long getTimestamp() { return timestamp; }\n    }\n    \n    public static class SuccessResponse {\n        private String mensaje;\n        private long timestamp;\n        \n        public SuccessResponse(String mensaje) {\n            this.mensaje = mensaje;\n            this.timestamp = System.currentTimeMillis();\n        }\n        \n        // Getters\n        public String getMensaje() { return mensaje; }\n        public long getTimestamp() { return timestamp; }\n    }\n}",
                    language: "java"
                },
                {
                    title: "Servicio y Configuración",
                    description: "Capa de servicio y configuración de la aplicación Spring Boot",
                    code: "// UsuarioService.java - Capa de servicio\npackage com.ejemplo.miapp.service;\n\nimport com.ejemplo.miapp.model.Usuario;\nimport com.ejemplo.miapp.repository.UsuarioRepository;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.data.domain.Page;\nimport org.springframework.data.domain.Pageable;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.stereotype.Service;\nimport org.springframework.transaction.annotation.Transactional;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@Service\n@Transactional\npublic class UsuarioService {\n    \n    @Autowired\n    private UsuarioRepository usuarioRepository;\n    \n    @Autowired\n    private PasswordEncoder passwordEncoder;\n    \n    // Obtener todos los usuarios con paginación\n    @Transactional(readOnly = true)\n    public Page<Usuario> obtenerTodos(Pageable pageable) {\n        return usuarioRepository.findAll(pageable);\n    }\n    \n    // Obtener usuario por ID\n    @Transactional(readOnly = true)\n    public Optional<Usuario> obtenerPorId(Long id) {\n        return usuarioRepository.findById(id);\n    }\n    \n    // Crear nuevo usuario\n    public Usuario crear(Usuario usuario) {\n        // Encriptar contraseña\n        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));\n        return usuarioRepository.save(usuario);\n    }\n    \n    // Actualizar usuario\n    public Usuario actualizar(Usuario usuario) {\n        // Si la contraseña cambió, encriptarla\n        Optional<Usuario> usuarioExistente = usuarioRepository.findById(usuario.getId());\n        if (usuarioExistente.isPresent() && \n            !usuarioExistente.get().getPassword().equals(usuario.getPassword())) {\n            usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));\n        }\n        \n        return usuarioRepository.save(usuario);\n    }\n    \n    // Eliminar usuario\n    public void eliminar(Long id) {\n        usuarioRepository.deleteById(id);\n    }\n    \n    // Verificar si existe por ID\n    @Transactional(readOnly = true)\n    public boolean existePorId(Long id) {\n        return usuarioRepository.existsById(id);\n    }\n    \n    // Verificar si existe por email\n    @Transactional(readOnly = true)\n    public boolean existePorEmail(String email) {\n        return usuarioRepository.existsByEmail(email);\n    }\n    \n    // Buscar por email\n    @Transactional(readOnly = true)\n    public Optional<Usuario> buscarPorEmail(String email) {\n        return usuarioRepository.findByEmail(email);\n    }\n    \n    // Buscar por nombre\n    @Transactional(readOnly = true)\n    public List<Usuario> buscarPorNombre(String nombre) {\n        return usuarioRepository.findByNombreContaining(nombre);\n    }\n    \n    // Obtener usuarios activos\n    @Transactional(readOnly = true)\n    public List<Usuario> obtenerUsuariosActivos() {\n        return usuarioRepository.findUsuariosActivos();\n    }\n    \n    // Toggle estado activo\n    public Optional<Usuario> toggleActivo(Long id) {\n        Optional<Usuario> usuario = usuarioRepository.findById(id);\n        \n        if (usuario.isPresent()) {\n            Usuario u = usuario.get();\n            u.setActivo(!u.getActivo());\n            return Optional.of(usuarioRepository.save(u));\n        }\n        \n        return Optional.empty();\n    }\n    \n    // Contar usuarios activos\n    @Transactional(readOnly = true)\n    public long contarUsuariosActivos() {\n        return usuarioRepository.countUsuariosActivos();\n    }\n}\n\n// SecurityConfig.java - Configuración de seguridad\npackage com.ejemplo.miapp.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n    \n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n    \n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .csrf(csrf -> csrf.disable())\n            .authorizeHttpRequests(authz -> authz\n                .requestMatchers(\"/api/usuarios/**\").permitAll()\n                .anyRequest().authenticated()\n            );\n        \n        return http.build();\n    }\n}\n\n// application.properties - Configuración de la aplicación\n# Configuración del servidor\nserver.port=8080\nserver.servlet.context-path=/\n\n# Configuración de la base de datos H2 (para desarrollo)\nspring.datasource.url=jdbc:h2:mem:testdb\nspring.datasource.driverClassName=org.h2.Driver\nspring.datasource.username=sa\nspring.datasource.password=\n\n# Configuración JPA/Hibernate\nspring.jpa.database-platform=org.hibernate.dialect.H2Dialect\nspring.jpa.hibernate.ddl-auto=create-drop\nspring.jpa.show-sql=true\nspring.jpa.properties.hibernate.format_sql=true\n\n# Consola H2 (solo para desarrollo)\nspring.h2.console.enabled=true\nspring.h2.console.path=/h2-console\n\n# Configuración de logging\nlogging.level.com.ejemplo.miapp=DEBUG\nlogging.level.org.springframework.security=DEBUG\n\n# Configuración de validación\nspring.jackson.serialization.fail-on-empty-beans=false\n\n# pom.xml - Dependencias Maven\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0 \n         http://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n    \n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.2.0</version>\n        <relativePath/>\n    </parent>\n    \n    <groupId>com.ejemplo</groupId>\n    <artifactId>miapp</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <name>miapp</name>\n    <description>Mi primera aplicación Spring Boot</description>\n    \n    <properties>\n        <java.version>17</java.version>\n    </properties>\n    \n    <dependencies>\n        <!-- Spring Boot Web -->\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        \n        <!-- Spring Boot Data JPA -->\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-jpa</artifactId>\n        </dependency>\n        \n        <!-- Spring Boot Security -->\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-security</artifactId>\n        </dependency>\n        \n        <!-- Spring Boot Validation -->\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-validation</artifactId>\n        </dependency>\n        \n        <!-- Base de datos H2 -->\n        <dependency>\n            <groupId>com.h2database</groupId>\n            <artifactId>h2</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n        \n        <!-- Spring Boot Test -->\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n    \n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>",
                    language: "java"
                }
            ],
            resources: [
                {
                    name: "Spring Boot Documentation",
                    url: "https://spring.io/projects/spring-boot",
                    type: "Documentación"
                },
                {
                    name: "Spring Boot Guides",
                    url: "https://spring.io/guides",
                    type: "Tutoriales"
                },
                {
                    name: "Baeldung Spring Boot",
                    url: "https://www.baeldung.com/spring-boot",
                    type: "Tutoriales"
                },
                {
                    name: "Spring Initializr",
                    url: "https://start.spring.io/",
                    type: "Herramienta"
                }
            ],
            reflection: "Esta semana marcó mi entrada al mundo del desarrollo backend con Java y Spring Boot. La transición desde JavaScript fue desafiante pero reveladora. Spring Boot demostró ser increíblemente poderoso para crear APIs REST de manera rápida y robusta. La configuración automática y las convenciones del framework aceleraron significativamente el desarrollo. JPA con Hibernate simplificó enormemente el trabajo con bases de datos, mientras que Spring Security proporcionó una base sólida para la autenticación. Java, aunque más verboso que JavaScript, ofrece un tipado fuerte y herramientas excelentes que mejoran la productividad y confiabilidad del código."
        },
        tech: [],
        cover: "/semana_9.jpg",
        link: "/semana09"
    },
    {
        id: "semana10",
        semana: "SEMANA 10",
        title: "Autenticación con Spring Boot",
        description: "Implementación de sistemas de autenticación y autorización seguros usando Spring Security y JWT.",
        image: "/semana_10.jpg",
        content: {
            theory: [
                "Spring Security es un framework potente y altamente personalizable para autenticación y control de acceso en aplicaciones Java.",
                "JWT (JSON Web Tokens) es un estándar para transmitir información de forma segura entre partes como un objeto JSON compacto.",
                "La autenticación verifica la identidad del usuario, mientras que la autorización determina qué recursos puede acceder.",
                "Los filtros de seguridad interceptan las peticiones HTTP para validar credenciales y permisos antes de llegar a los controladores.",
                "El patrón de roles y permisos permite implementar control de acceso granular basado en las responsabilidades del usuario.",
                "Las sesiones stateless con JWT eliminan la necesidad de almacenar estado en el servidor, mejorando la escalabilidad."
            ],
            examples: [{
                title: "Configuración de Spring Security con JWT",
                description: "Configuración completa de seguridad con autenticación JWT",
                code: "// SecurityConfig.java - Configuración principal de seguridad\npackage com.ejemplo.auth.config;\n\nimport com.ejemplo.auth.security.JwtAuthenticationEntryPoint;\nimport com.ejemplo.auth.security.JwtAuthenticationFilter;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.authentication.AuthenticationManager;\nimport org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;\nimport org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.http.SessionCreationPolicy;\nimport org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;\nimport org.springframework.security.crypto.password.PasswordEncoder;\nimport org.springframework.security.web.SecurityFilterChain;\nimport org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;\n\n@Configuration\n@EnableWebSecurity\n@EnableMethodSecurity(prePostEnabled = true)\npublic class SecurityConfig {\n    \n    @Autowired\n    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;\n    \n    @Autowired\n    private JwtAuthenticationFilter jwtAuthenticationFilter;\n    \n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n    \n    @Bean\n    public AuthenticationManager authenticationManager(\n            AuthenticationConfiguration authConfig) throws Exception {\n        return authConfig.getAuthenticationManager();\n    }\n    \n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http.csrf(csrf -> csrf.disable())\n            .exceptionHandling(exception -> \n                exception.authenticationEntryPoint(jwtAuthenticationEntryPoint))\n            .sessionManagement(session -> \n                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n            .authorizeHttpRequests(authz -> authz\n                // Endpoints públicos\n                .requestMatchers(\"/api/auth/**\").permitAll()\n                .requestMatchers(\"/api/public/**\").permitAll()\n                .requestMatchers(\"/h2-console/**\").permitAll()\n                \n                // Endpoints que requieren roles específicos\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n                .requestMatchers(\"/api/user/**\").hasAnyRole(\"USER\", \"ADMIN\")\n                \n                // Cualquier otra petición requiere autenticación\n                .anyRequest().authenticated()\n            );\n        \n        // Agregar filtro JWT antes del filtro de autenticación por usuario/contraseña\n        http.addFilterBefore(jwtAuthenticationFilter, \n                           UsernamePasswordAuthenticationFilter.class);\n        \n        // Para H2 Console (solo desarrollo)\n        http.headers(headers -> headers.frameOptions(frameOptions -> frameOptions.disable()));\n        \n        return http.build();\n    }\n}\n\n// JwtUtils.java - Utilidades para manejo de JWT\npackage com.ejemplo.auth.security;\n\nimport io.jsonwebtoken.*;\nimport io.jsonwebtoken.security.Keys;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.security.core.Authentication;\nimport org.springframework.stereotype.Component;\n\nimport javax.crypto.SecretKey;\nimport java.util.Date;\n\n@Component\npublic class JwtUtils {\n    \n    @Value(\"${app.jwtSecret}\")\n    private String jwtSecret;\n    \n    @Value(\"${app.jwtExpirationMs}\")\n    private int jwtExpirationMs;\n    \n    private SecretKey getSigningKey() {\n        return Keys.hmacShaKeyFor(jwtSecret.getBytes());\n    }\n    \n    public String generateJwtToken(Authentication authentication) {\n        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();\n        \n        return Jwts.builder()\n                .setSubject(userPrincipal.getUsername())\n                .setIssuedAt(new Date())\n                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))\n                .signWith(getSigningKey(), SignatureAlgorithm.HS512)\n                .compact();\n    }\n    \n    public String generateTokenFromUsername(String username) {\n        return Jwts.builder()\n                .setSubject(username)\n                .setIssuedAt(new Date())\n                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))\n                .signWith(getSigningKey(), SignatureAlgorithm.HS512)\n                .compact();\n    }\n    \n    public String getUserNameFromJwtToken(String token) {\n        return Jwts.parserBuilder()\n                .setSigningKey(getSigningKey())\n                .build()\n                .parseClaimsJws(token)\n                .getBody()\n                .getSubject();\n    }\n    \n    public boolean validateJwtToken(String authToken) {\n        try {\n            Jwts.parserBuilder()\n                .setSigningKey(getSigningKey())\n                .build()\n                .parseClaimsJws(authToken);\n            return true;\n        } catch (MalformedJwtException e) {\n            System.err.println(\"Token JWT inválido: \" + e.getMessage());\n        } catch (ExpiredJwtException e) {\n            System.err.println(\"Token JWT expirado: \" + e.getMessage());\n        } catch (UnsupportedJwtException e) {\n            System.err.println(\"Token JWT no soportado: \" + e.getMessage());\n        } catch (IllegalArgumentException e) {\n            System.err.println(\"JWT claims string está vacío: \" + e.getMessage());\n        }\n        \n        return false;\n    }\n    \n    public Date getExpirationDateFromJwtToken(String token) {\n        return Jwts.parserBuilder()\n                .setSigningKey(getSigningKey())\n                .build()\n                .parseClaimsJws(token)\n                .getBody()\n                .getExpiration();\n    }\n}\n\n// JwtAuthenticationFilter.java - Filtro para validar JWT\npackage com.ejemplo.auth.security;\n\nimport com.ejemplo.auth.service.UserDetailsServiceImpl;\nimport jakarta.servlet.FilterChain;\nimport jakarta.servlet.ServletException;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.security.authentication.UsernamePasswordAuthenticationToken;\nimport org.springframework.security.core.context.SecurityContextHolder;\nimport org.springframework.security.core.userdetails.UserDetails;\nimport org.springframework.security.web.authentication.WebAuthenticationDetailsSource;\nimport org.springframework.stereotype.Component;\nimport org.springframework.util.StringUtils;\nimport org.springframework.web.filter.OncePerRequestFilter;\n\nimport java.io.IOException;\n\n@Component\npublic class JwtAuthenticationFilter extends OncePerRequestFilter {\n    \n    @Autowired\n    private JwtUtils jwtUtils;\n    \n    @Autowired\n    private UserDetailsServiceImpl userDetailsService;\n    \n    @Override\n    protected void doFilterInternal(HttpServletRequest request, \n                                  HttpServletResponse response, \n                                  FilterChain filterChain) \n                                  throws ServletException, IOException {\n        try {\n            String jwt = parseJwt(request);\n            \n            if (jwt != null && jwtUtils.validateJwtToken(jwt)) {\n                String username = jwtUtils.getUserNameFromJwtToken(jwt);\n                \n                UserDetails userDetails = userDetailsService.loadUserByUsername(username);\n                \n                UsernamePasswordAuthenticationToken authentication = \n                    new UsernamePasswordAuthenticationToken(userDetails, \n                                                           null, \n                                                           userDetails.getAuthorities());\n                \n                authentication.setDetails(new WebAuthenticationDetailsSource()\n                                        .buildDetails(request));\n                \n                SecurityContextHolder.getContext().setAuthentication(authentication);\n            }\n        } catch (Exception e) {\n            logger.error(\"No se puede establecer la autenticación del usuario: {}\", e);\n        }\n        \n        filterChain.doFilter(request, response);\n    }\n    \n    private String parseJwt(HttpServletRequest request) {\n        String headerAuth = request.getHeader(\"Authorization\");\n        \n        if (StringUtils.hasText(headerAuth) && headerAuth.startsWith(\"Bearer \")) {\n            return headerAuth.substring(7);\n        }\n        \n        return null;\n    }\n}",
                language: "java"
            }],
            resources: [
                {
                    name: "Spring Security Documentation",
                    url: "https://spring.io/projects/spring-security",
                    type: "Documentación"
                },
                {
                    name: "JWT.io",
                    url: "https://jwt.io/",
                    type: "Herramienta"
                },
                {
                    name: "Spring Security JWT Tutorial",
                    url: "https://www.bezkodercomspring-boot-jwt-authentication/",
                    "type": "Tutorial"
                },

            ],
            reflection: "Esta semana profundizó mi comprensión sobre seguridad en aplicaciones web. Spring Security inicialmente parecía complejo, pero su arquitectura basada en filtros y la flexibilidad para personalizar cada aspecto de la autenticación y autorización es impresionante. JWT revolucionó mi perspectiva sobre sesiones stateless, eliminando la necesidad de almacenar estado en el servidor. La implementación de roles y permisos me permitió crear sistemas de autorización granulares y escalables. La seguridad no es solo una característica adicional, sino un aspecto fundamental que debe considerarse desde el diseño inicial de cualquier aplicación."
        },
        tech: [],
        cover: "/semana_10.jpg",
        link: "/semana10"
    },
    {
        id: "semana11",
        semana: "SEMANA 11",
        title: "Java y Jakarta EE",
        description: "Exploración de Jakarta EE para desarrollo de aplicaciones empresariales robustas y escalables.",
        image: "/semana_11.jpg",
        content: {
            theory: [
                "Jakarta EE (anteriormente Java EE) es una plataforma para desarrollo de aplicaciones empresariales en Java con especificaciones estándar.",
                "Los Enterprise JavaBeans (EJB) proporcionan un modelo de componentes para lógica de negocio distribuida y transaccional.",
                "Jakarta Persistence API (JPA) es el estándar para mapeo objeto-relacional y gestión de persistencia en aplicaciones Java.",
                "Jakarta RESTful Web Services (JAX-RS) facilita el desarrollo de servicios web REST siguiendo estándares empresariales.",
                "Context and Dependency Injection (CDI) proporciona un modelo de inyección de dependencias potente y flexible.",
                "Los servidores de aplicaciones como WildFly, Payara y TomEE proporcionan el runtime completo para aplicaciones Jakarta EE."
            ],
            examples: [
                {
                    title: "Enterprise JavaBeans (EJB)",
                    description: "Implementación de EJBs para lógica de negocio empresarial",
                    code: "// UsuarioService.java - Session Bean Stateless\npackage com.ejemplo.jakartaee.service;\n\nimport com.ejemplo.jakartaee.entity.Usuario;\nimport com.ejemplo.jakartaee.repository.UsuarioRepository;\nimport jakarta.ejb.Stateless;\nimport jakarta.ejb.TransactionAttribute;\nimport jakarta.ejb.TransactionAttributeType;\nimport jakarta.inject.Inject;\nimport jakarta.validation.Valid;\nimport jakarta.validation.constraints.NotNull;\n\nimport java.util.List;\nimport java.util.Optional;\nimport java.util.logging.Logger;\n\n@Stateless\npublic class UsuarioService {\n    \n    private static final Logger logger = Logger.getLogger(UsuarioService.class.getName());\n    \n    @Inject\n    private UsuarioRepository usuarioRepository;\n    \n    @TransactionAttribute(TransactionAttributeType.REQUIRED)\n    public Usuario crear(@Valid Usuario usuario) {\n        logger.info(\"Creando nuevo usuario: \" + usuario.getEmail());\n        \n        if (usuarioRepository.existePorEmail(usuario.getEmail())) {\n            throw new IllegalArgumentException(\"El email ya está registrado\");\n        }\n        \n        return usuarioRepository.guardar(usuario);\n    }\n    \n    @TransactionAttribute(TransactionAttributeType.SUPPORTS)\n    public List<Usuario> obtenerTodos() {\n        logger.info(\"Obteniendo todos los usuarios\");\n        return usuarioRepository.obtenerTodos();\n    }\n    \n    @TransactionAttribute(TransactionAttributeType.SUPPORTS)\n    public Optional<Usuario> obtenerPorId(@NotNull Long id) {\n        logger.info(\"Obteniendo usuario por ID: \" + id);\n        return usuarioRepository.obtenerPorId(id);\n    }\n    \n    @TransactionAttribute(TransactionAttributeType.REQUIRED)\n    public Usuario actualizar(@Valid Usuario usuario) {\n        logger.info(\"Actualizando usuario: \" + usuario.getId());\n        \n        if (!usuarioRepository.existe(usuario.getId())) {\n            throw new IllegalArgumentException(\"Usuario no encontrado\");\n        }\n        \n        return usuarioRepository.actualizar(usuario);\n    }\n    \n    @TransactionAttribute(TransactionAttributeType.REQUIRED)\n    public void eliminar(@NotNull Long id) {\n        logger.info(\"Eliminando usuario: \" + id);\n        \n        if (!usuarioRepository.existe(id)) {\n            throw new IllegalArgumentException(\"Usuario no encontrado\");\n        }\n        \n        usuarioRepository.eliminar(id);\n    }\n    \n    @TransactionAttribute(TransactionAttributeType.SUPPORTS)\n    public List<Usuario> buscarPorEmail(String email) {\n        logger.info(\"Buscando usuarios por email: \" + email);\n        return usuarioRepository.buscarPorEmail(email);\n    }\n}\n\n// NotificacionService.java - Session Bean para notificaciones\npackage com.ejemplo.jakartaee.service;\n\nimport jakarta.ejb.Asynchronous;\nimport jakarta.ejb.Stateless;\nimport jakarta.mail.Message;\nimport jakarta.mail.MessagingException;\nimport jakarta.mail.Session;\nimport jakarta.mail.Transport;\nimport jakarta.mail.internet.InternetAddress;\nimport jakarta.mail.internet.MimeMessage;\n\nimport javax.annotation.Resource;\nimport java.util.concurrent.Future;\nimport java.util.logging.Logger;\n\n@Stateless\npublic class NotificacionService {\n    \n    private static final Logger logger = Logger.getLogger(NotificacionService.class.getName());\n    \n    @Resource(lookup = \"java:jboss/mail/Default\")\n    private Session mailSession;\n    \n    @Asynchronous\n    public Future<Boolean> enviarEmailBienvenida(String email, String nombre) {\n        try {\n            logger.info(\"Enviando email de bienvenida a: \" + email);\n            \n            Message message = new MimeMessage(mailSession);\n            message.setFrom(new InternetAddress(\"noreply@miapp.com\"));\n            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));\n            message.setSubject(\"¡Bienvenido a nuestra aplicación!\");\n            \n            String contenido = String.format(\n                \"Hola %s,\\n\\n\" +\n                \"¡Bienvenido a nuestra aplicación!\\n\" +\n                \"Tu cuenta ha sido creada exitosamente.\\n\\n\" +\n                \"Saludos,\\n\" +\n                \"El equipo de desarrollo\", nombre);\n            \n            message.setText(contenido);\n            \n            Transport.send(message);\n            \n            logger.info(\"Email enviado exitosamente a: \" + email);\n            return new AsyncResult<>(true);\n            \n        } catch (MessagingException e) {\n            logger.severe(\"Error enviando email: \" + e.getMessage());\n            return new AsyncResult<>(false);\n        }\n    }\n    \n    @Asynchronous\n    public void procesarNotificacionesEnLote(List<String> emails, String mensaje) {\n        logger.info(\"Procesando \" + emails.size() + \" notificaciones en lote\");\n        \n        for (String email : emails) {\n            try {\n                Thread.sleep(100);\n                enviarNotificacion(email, mensaje);\n            } catch (InterruptedException e) {\n                Thread.currentThread().interrupt();\n                break;\n            }\n        }\n        \n        logger.info(\"Procesamiento en lote completado\");\n    }\n    \n    private void enviarNotificacion(String email, String mensaje) {\n        logger.info(\"Notificación enviada a: \" + email);\n    }\n}\n\n// CarritoCompras.java - Session Bean Stateful\npackage com.ejemplo.jakartaee.service;\n\nimport com.ejemplo.jakartaee.entity.Producto;\nimport com.ejemplo.jakartaee.entity.ItemCarrito;\nimport jakarta.ejb.Remove;\nimport jakarta.ejb.Stateful;\nimport jakarta.ejb.StatefulTimeout;\n\nimport java.math.BigDecimal;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.concurrent.TimeUnit;\nimport java.util.logging.Logger;\n\n@Stateful\n@StatefulTimeout(value = 30, unit = TimeUnit.MINUTES)\npublic class CarritoCompras {\n    \n    private static final Logger logger = Logger.getLogger(CarritoCompras.class.getName());\n    \n    private List<ItemCarrito> items = new ArrayList<>();\n    private String usuarioId;\n    \n    public void inicializar(String usuarioId) {\n        this.usuarioId = usuarioId;\n        logger.info(\"Carrito inicializado para usuario: \" + usuarioId);\n    }\n    \n    public void agregarItem(Producto producto, int cantidad) {\n        logger.info(\"Agregando item al carrito: \" + producto.getNombre());\n        \n        ItemCarrito itemExistente = items.stream()\n            .filter(item -> item.getProducto().getId().equals(producto.getId()))\n            .findFirst()\n            .orElse(null);\n        \n        if (itemExistente != null) {\n            itemExistente.setCantidad(itemExistente.getCantidad() + cantidad);\n        } else {\n            ItemCarrito nuevoItem = new ItemCarrito();\n            nuevoItem.setProducto(producto);\n            nuevoItem.setCantidad(cantidad);\n            nuevoItem.setPrecioUnitario(producto.getPrecio());\n            items.add(nuevoItem);\n        }\n    }\n    \n    public void removerItem(Long productoId) {\n        logger.info(\"Removiendo item del carrito: \" + productoId);\n        items.removeIf(item -> item.getProducto().getId().equals(productoId));\n    }\n    \n    public void actualizarCantidad(Long productoId, int nuevaCantidad) {\n        logger.info(\"Actualizando cantidad para producto: \" + productoId);\n        \n        ItemCarrito item = items.stream()\n            .filter(i -> i.getProducto().getId().equals(productoId))\n            .findFirst()\n            .orElse(null);\n        \n        if (item != null) {\n            if (nuevaCantidad <= 0) {\n                removerItem(productoId);\n            } else {\n                item.setCantidad(nuevaCantidad);\n            }\n        }\n    }\n    \n    public List<ItemCarrito> getItems() {\n        return new ArrayList<>(items);\n    }\n    \n    public BigDecimal getTotal() {\n        return items.stream()\n            .map(item -> item.getPrecioUnitario()\n                .multiply(BigDecimal.valueOf(item.getCantidad())))\n            .reduce(BigDecimal.ZERO, BigDecimal::add);\n    }\n    \n    public int getCantidadItems() {\n        return items.stream()\n            .mapToInt(ItemCarrito::getCantidad)\n            .sum();\n    }\n    \n    public void limpiar() {\n        logger.info(\"Limpiando carrito para usuario: \" + usuarioId);\n        items.clear();\n    }\n    \n    @Remove\n    public void finalizar() {\n        logger.info(\"Finalizando sesión de carrito para usuario: \" + usuarioId);\n        items.clear();\n    }\n}",
                    language: "java"
                },
                {
                    title: "Jakarta Persistence API (JPA)",
                    description: "Entidades JPA y repositorios para persistencia de datos",
                    code: "// Usuario.java - Entidad JPA\npackage com.ejemplo.jakartaee.entity;\n\nimport jakarta.persistence.*;\nimport jakarta.validation.constraints.Email;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Size;\n\nimport java.time.LocalDateTime;\nimport java.util.ArrayList;\nimport java.util.List;\n\n@Entity\n@Table(name = \"usuarios\")\n@NamedQueries({\n    @NamedQuery(\n        name = \"Usuario.findAll\",\n        query = \"SELECT u FROM Usuario u ORDER BY u.fechaCreacion DESC\"\n    ),\n    @NamedQuery(\n        name = \"Usuario.findByEmail\",\n        query = \"SELECT u FROM Usuario u WHERE u.email = :email\"\n    ),\n    @NamedQuery(\n        name = \"Usuario.findActivos\",\n        query = \"SELECT u FROM Usuario u WHERE u.activo = true\"\n    ),\n    @NamedQuery(\n        name = \"Usuario.countByEmail\",\n        query = \"SELECT COUNT(u) FROM Usuario u WHERE u.email = :email\"\n    )\n})\npublic class Usuario {\n    \n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    \n    @NotBlank(message = \"El nombre es obligatorio\")\n    @Size(min = 2, max = 50, message = \"El nombre debe tener entre 2 y 50 caracteres\")\n    @Column(nullable = false)\n    private String nombre;\n    \n    @NotBlank(message = \"El apellido es obligatorio\")\n    @Size(min = 2, max = 50, message = \"El apellido debe tener entre 2 y 50 caracteres\")\n    @Column(nullable = false)\n    private String apellido;\n    \n    @Email(message = \"Email debe ser válido\")\n    @NotBlank(message = \"El email es obligatorio\")\n    @Column(nullable = false, unique = true)\n    private String email;\n    \n    @Size(min = 6, message = \"La contraseña debe tener al menos 6 caracteres\")\n    @Column(nullable = false)\n    private String password;\n    \n    @Column(name = \"activo\")\n    private Boolean activo = true;\n    \n    @Column(name = \"fecha_creacion\")\n    private LocalDateTime fechaCreacion;\n    \n    @Column(name = \"fecha_actualizacion\")\n    private LocalDateTime fechaActualizacion;\n    \n    @OneToMany(mappedBy = \"usuario\", cascade = CascadeType.ALL, fetch = FetchType.LAZY)\n    private List<Pedido> pedidos = new ArrayList<>();\n    \n    @OneToOne(mappedBy = \"usuario\", cascade = CascadeType.ALL, fetch = FetchType.LAZY)\n    private Perfil perfil;\n    \n    public Usuario() {}\n    \n    public Usuario(String nombre, String apellido, String email, String password) {\n        this.nombre = nombre;\n        this.apellido = apellido;\n        this.email = email;\n        this.password = password;\n    }\n    \n    @PrePersist\n    protected void onCreate() {\n        fechaCreacion = LocalDateTime.now();\n        fechaActualizacion = LocalDateTime.now();\n    }\n    \n    @PreUpdate\n    protected void onUpdate() {\n        fechaActualizacion = LocalDateTime.now();\n    }\n    \n    public Long getId() { return id; }\n    public void setId(Long id) { this.id = id; }\n    \n    public String getNombre() { return nombre; }\n    public void setNombre(String nombre) { this.nombre = nombre; }\n    \n    public String getApellido() { return apellido; }\n    public void setApellido(String apellido) { this.apellido = apellido; }\n    \n    public String getEmail() { return email; }\n    public void setEmail(String email) { this.email = email; }\n    \n    public String getPassword() { return password; }\n    public void setPassword(String password) { this.password = password; }\n    \n    public Boolean getActivo() { return activo; }\n    public void setActivo(Boolean activo) { this.activo = activo; }\n    \n    public LocalDateTime getFechaCreacion() { return fechaCreacion; }\n    public void setFechaCreacion(LocalDateTime fechaCreacion) { \n        this.fechaCreacion = fechaCreacion; \n    }\n    \n    public LocalDateTime getFechaActualizacion() { return fechaActualizacion; }\n    public void setFechaActualizacion(LocalDateTime fechaActualizacion) { \n        this.fechaActualizacion = fechaActualizacion; \n    }\n    \n    public List<Pedido> getPedidos() { return pedidos; }\n    public void setPedidos(List<Pedido> pedidos) { this.pedidos = pedidos; }\n    \n    public Perfil getPerfil() { return perfil; }\n    public void setPerfil(Perfil perfil) { this.perfil = perfil; }\n    \n    public String getNombreCompleto() {\n        return nombre + \" \" + apellido;\n    }\n    \n    @Override\n    public String toString() {\n        return \"Usuario{\" +\n                \"id=\" + id +\n                \", nombre='\" + nombre + '\\'' +\n                \", apellido='\" + apellido + '\\'' +\n                \", email='\" + email + '\\'' +\n                \", activo=\" + activo +\n                \"}\";\n    }\n}\n\n// UsuarioRepository.java - Repositorio JPA\npackage com.ejemplo.jakartaee.repository;\n\nimport com.ejemplo.jakartaee.entity.Usuario;\nimport jakarta.enterprise.context.ApplicationScoped;\nimport jakarta.persistence.EntityManager;\nimport jakarta.persistence.NoResultException;\nimport jakarta.persistence.PersistenceContext;\nimport jakarta.persistence.TypedQuery;\nimport jakarta.transaction.Transactional;\n\nimport java.util.List;\nimport java.util.Optional;\n\n@ApplicationScoped\npublic class UsuarioRepository {\n    \n    @PersistenceContext(unitName = \"miAppPU\")\n    private EntityManager em;\n    \n    @Transactional\n    public Usuario guardar(Usuario usuario) {\n        if (usuario.getId() == null) {\n            em.persist(usuario);\n            return usuario;\n        } else {\n            return em.merge(usuario);\n        }\n    }\n    \n    public Optional<Usuario> obtenerPorId(Long id) {\n        Usuario usuario = em.find(Usuario.class, id);\n        return Optional.ofNullable(usuario);\n    }\n    \n    public List<Usuario> obtenerTodos() {\n        return em.createNamedQuery(\"Usuario.findAll\", Usuario.class)\n                .getResultList();\n    }\n    \n    public List<Usuario> obtenerActivos() {\n        return em.createNamedQuery(\"Usuario.findActivos\", Usuario.class)\n                .getResultList();\n    }\n    \n    public Optional<Usuario> obtenerPorEmail(String email) {\n        try {\n            Usuario usuario = em.createNamedQuery(\"Usuario.findByEmail\", Usuario.class)\n                    .setParameter(\"email\", email)\n                    .getSingleResult();\n            return Optional.of(usuario);\n        } catch (NoResultException e) {\n            return Optional.empty();\n        }\n    }\n    \n    public List<Usuario> buscarPorEmail(String email) {\n        return em.createQuery(\n                \"SELECT u FROM Usuario u WHERE u.email LIKE :email\", Usuario.class)\n                .setParameter(\"email\", \"%\" + email + \"%\")\n                .getResultList();\n    }\n    \n    public boolean existePorEmail(String email) {\n        Long count = em.createNamedQuery(\"Usuario.countByEmail\", Long.class)\n                .setParameter(\"email\", email)\n                .getSingleResult();\n        return count > 0;\n    }\n    \n    public boolean existe(Long id) {\n        return obtenerPorId(id).isPresent();\n    }\n    \n    @Transactional\n    public Usuario actualizar(Usuario usuario) {\n        return em.merge(usuario);\n    }\n    \n    @Transactional\n    public void eliminar(Long id) {\n        Usuario usuario = em.find(Usuario.class, id);\n        if (usuario != null) {\n            em.remove(usuario);\n        }\n    }\n    \n    @Transactional\n    public void eliminar(Usuario usuario) {\n        if (em.contains(usuario)) {\n            em.remove(usuario);\n        } else {\n            em.remove(em.merge(usuario));\n        }\n    }\n    \n    public List<Usuario> obtenerConPaginacion(int pagina, int tamaño) {\n        return em.createNamedQuery(\"Usuario.findAll\", Usuario.class)\n                .setFirstResult(pagina * tamaño)\n                .setMaxResults(tamaño)\n                .getResultList();\n    }\n    \n    public long contarTodos() {\n        return em.createQuery(\"SELECT COUNT(u) FROM Usuario u\", Long.class)\n                .getSingleResult();\n    }\n    \n    public List<Usuario> obtenerUsuariosConPedidos() {\n        return em.createNativeQuery(\n                \"SELECT DISTINCT u.* FROM usuarios u \" +\n                \"INNER JOIN pedidos p ON u.id = p.usuario_id\", \n                Usuario.class)\n                .getResultList();\n    }\n}\n\n// persistence.xml - Configuración de persistencia\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<persistence xmlns=\"https://jakarta.ee/xml/ns/persistence\"\n             xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n             xsi:schemaLocation=\"https://jakarta.ee/xml/ns/persistence \n             https://jakarta.ee/xml/ns/persistence/persistence_3_0.xsd\"\n             version=\"3.0\">\n    \n    <persistence-unit name=\"miAppPU\" transaction-type=\"JTA\">\n        <provider>org.hibernate.jpa.HibernatePersistenceProvider</provider>\n        <jta-data-source>java:jboss/datasources/MiAppDS</jta-data-source>\n        \n        <class>com.ejemplo.jakartaee.entity.Usuario</class>\n        <class>com.ejemplo.jakartaee.entity.Producto</class>\n        <class>com.ejemplo.jakartaee.entity.Pedido</class>\n        <class>com.ejemplo.jakartaee.entity.ItemCarrito</class>\n        <class>com.ejemplo.jakartaee.entity.Perfil</class>\n        \n        <exclude-unlisted-classes>true</exclude-unlisted-classes>\n        \n        <properties>\n            <property name=\"hibernate.dialect\" value=\"org.hibernate.dialect.PostgreSQLDialect\"/>\n            <property name=\"hibernate.hbm2ddl.auto\" value=\"update\"/>\n            <property name=\"hibernate.show_sql\" value=\"true\"/>\n            <property name=\"hibernate.format_sql\" value=\"true\"/>\n            \n            <property name=\"hibernate.connection.characterEncoding\" value=\"utf8\"/>\n            <property name=\"hibernate.connection.useUnicode\" value=\"true\"/>\n            \n            <property name=\"hibernate.cache.use_second_level_cache\" value=\"true\"/>\n            <property name=\"hibernate.cache.region.factory_class\" \n                     value=\"org.hibernate.cache.jcache.JCacheRegionFactory\"/>\n        </properties>\n    </persistence-unit>\n</persistence>",
                    language: "java"
                }
            ],
            resources: [
                {name: "Jakarta EE Documentation", url: "https://jakarta.ee/", type: "Documentación"},
                {name: "Eclipse GlassFish", url: "https://glassfish.org/", type: "Servidor de Aplicaciones"},
                {
                    name: "WildFly Application Server",
                    url: "https://www.wildfly.org/",
                    type: "Servidor de Aplicaciones"
                },
                {
                    name: "Jakarta EE Tutorial",
                    url: "https://eclipse-ee4j.github.io/jakartaee-tutorial/",
                    type: "Tutorial"
                }
            ],
            reflection: "Esta semana me sumergí en el mundo empresarial de Java con Jakarta EE. La transición desde Spring Boot fue interesante, descubriendo un enfoque más estándar y formal para el desarrollo empresarial. Los EJBs proporcionan un modelo robusto para lógica de negocio con manejo automático de transacciones y concurrencia. JPA demostró ser más poderoso de lo que había experimentado, especialmente con named queries y el ciclo de vida de entidades. CDI ofrece un sistema de inyección de dependencias elegante y los interceptores permiten implementar concerns transversales de manera limpia. Jakarta EE representa la madurez y estabilidad necesarias para aplicaciones empresariales críticas."
        },
        tech: [],
        cover: "/semana_11.jpg",
        link: "/semana11"
    },
    {
        id: "semana12",
        semana: "SEMANA 12",
        title: "Conociendo PHP y Laravel",
        description: "Introducción a PHP y el framework Laravel para desarrollo web rápido y elegante.",
        image: "/semana_12.jpg",
        content: {
            theory: [
                "PHP es un lenguaje de programación de código abierto especialmente diseñado para desarrollo web del lado del servidor.",
                "Laravel es un framework PHP que sigue el patrón MVC y proporciona herramientas elegantes para desarrollo web rápido.",
                "Eloquent ORM es el sistema de mapeo objeto-relacional de Laravel que simplifica las interacciones con la base de datos.",
                "Blade es el motor de plantillas de Laravel que permite crear vistas dinámicas con sintaxis limpia y expresiva.",
                "Artisan es la interfaz de línea de comandos de Laravel que automatiza tareas comunes de desarrollo.",
                "Laravel incluye características modernas como routing, middleware, autenticación, y un sistema de migraciones robusto."
            ],
            examples: [
                {
                    title: "Fundamentos de PHP",
                    description: "Sintaxis básica y características principales de PHP",
                    code: "<?php\n// Variables y tipos de datos\n$nombre = \"Juan Pérez\";\n$edad = 25;\n$activo = true;\n$salario = 2500.50;\n\n// Arrays\n$frutas = [\"manzana\", \"banana\", \"naranja\"];\n$usuario = [\n    \"nombre\" => \"Ana García\",\n    \"email\" => \"ana@email.com\",\n    \"edad\" => 28\n];\n\n// Funciones\nfunction saludar($nombre, $apellido = \"\") {\n    return \"Hola, \" . $nombre . \" \" . $apellido;\n}\n\nfunction calcularDescuento($precio, $descuento = 10) {\n    return $precio - ($precio * $descuento / 100);\n}\n\n// Clases y objetos\nclass Usuario {\n    private $nombre;\n    private $email;\n    private $fechaCreacion;\n    \n    public function __construct($nombre, $email) {\n        $this->nombre = $nombre;\n        $this->email = $email;\n        $this->fechaCreacion = new DateTime();\n    }\n    \n    public function getNombre() {\n        return $this->nombre;\n    }\n    \n    public function setNombre($nombre) {\n        $this->nombre = $nombre;\n    }\n    \n    public function getEmail() {\n        return $this->email;\n    }\n    \n    public function setEmail($email) {\n        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {\n            $this->email = $email;\n        } else {\n            throw new InvalidArgumentException(\"Email inválido\");\n        }\n    }\n    \n    public function getFechaCreacion() {\n        return $this->fechaCreacion;\n    }\n    \n    public function getEdadCuenta() {\n        $ahora = new DateTime();\n        return $this->fechaCreacion->diff($ahora)->days;\n    }\n    \n    public function toArray() {\n        return [\n            'nombre' => $this->nombre,\n            'email' => $this->email,\n            'fecha_creacion' => $this->fechaCreacion->format('Y-m-d H:i:s'),\n            'edad_cuenta_dias' => $this->getEdadCuenta()\n        ];\n    }\n}\n\n// Herencia\nclass Administrador extends Usuario {\n    private $permisos;\n    \n    public function __construct($nombre, $email, $permisos = []) {\n        parent::__construct($nombre, $email);\n        $this->permisos = $permisos;\n    }\n    \n    public function agregarPermiso($permiso) {\n        if (!in_array($permiso, $this->permisos)) {\n            $this->permisos[] = $permiso;\n        }\n    }\n    \n    public function tienePermiso($permiso) {\n        return in_array($permiso, $this->permisos);\n    }\n    \n    public function getPermisos() {\n        return $this->permisos;\n    }\n}\n\n// Manejo de errores\ntry {\n    $usuario = new Usuario(\"Carlos López\", \"carlos@email.com\");\n    $admin = new Administrador(\"Admin\", \"admin@email.com\", [\"crear\", \"editar\", \"eliminar\"]);\n    \n    echo $usuario->getNombre() . \"\\n\";\n    echo \"Edad de cuenta: \" . $usuario->getEdadCuenta() . \" días\\n\";\n    \n    $admin->agregarPermiso(\"gestionar_usuarios\");\n    \n    if ($admin->tienePermiso(\"crear\")) {\n        echo \"El administrador puede crear contenido\\n\";\n    }\n    \n} catch (Exception $e) {\n    echo \"Error: \" . $e->getMessage() . \"\\n\";\n}\n\n// Trabajo con arrays\n$productos = [\n    [\"id\" => 1, \"nombre\" => \"Laptop\", \"precio\" => 999.99, \"categoria\" => \"Electrónicos\"],\n    [\"id\" => 2, \"nombre\" => \"Mouse\", \"precio\" => 25.50, \"categoria\" => \"Accesorios\"],\n    [\"id\" => 3, \"nombre\" => \"Teclado\", \"precio\" => 75.00, \"categoria\" => \"Accesorios\"],\n    [\"id\" => 4, \"nombre\" => \"Monitor\", \"precio\" => 299.99, \"categoria\" => \"Electrónicos\"]\n];\n\n$electronicos = array_filter($productos, function($producto) {\n    return $producto['categoria'] === 'Electrónicos';\n});\n\n$nombres = array_map(function($producto) {\n    return $producto['nombre'];\n}, $productos);\n\n$total = array_reduce($productos, function($carry, $producto) {\n    return $carry + $producto['precio'];\n}, 0);\n\necho \"Productos electrónicos: \" . count($electronicos) . \"\\n\";\necho \"Total de productos: $\" . number_format($total, 2) . \"\\n\";\n\n// Conexión a base de datos con PDO\nclass DatabaseManager {\n    private $pdo;\n    \n    public function __construct($host, $dbname, $username, $password) {\n        try {\n            $dsn = \"mysql:host=$host;dbname=$dbname;charset=utf8mb4\";\n            $this->pdo = new PDO($dsn, $username, $password, [\n                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,\n                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,\n                PDO::ATTR_EMULATE_PREPARES => false\n            ]);\n        } catch (PDOException $e) {\n            throw new Exception(\"Error de conexión: \" . $e->getMessage());\n        }\n    }\n    \n    public function obtenerUsuarios() {\n        $stmt = $this->pdo->query(\"SELECT * FROM usuarios ORDER BY fecha_creacion DESC\");\n        return $stmt->fetchAll();\n    }\n    \n    public function obtenerUsuarioPorId($id) {\n        $stmt = $this->pdo->prepare(\"SELECT * FROM usuarios WHERE id = ?\");\n        $stmt->execute([$id]);\n        return $stmt->fetch();\n    }\n    \n    public function crearUsuario($nombre, $email, $password) {\n        $stmt = $this->pdo->prepare(\"\n            INSERT INTO usuarios (nombre, email, password, fecha_creacion) \n            VALUES (?, ?, ?, NOW())\n        \");\n        \n        $passwordHash = password_hash($password, PASSWORD_DEFAULT);\n        $stmt->execute([$nombre, $email, $passwordHash]);\n        \n        return $this->pdo->lastInsertId();\n    }\n    \n    public function actualizarUsuario($id, $nombre, $email) {\n        $stmt = $this->pdo->prepare(\"\n            UPDATE usuarios \n            SET nombre = ?, email = ?, fecha_actualizacion = NOW() \n            WHERE id = ?\n        \");\n        \n        return $stmt->execute([$nombre, $email, $id]);\n    }\n    \n    public function eliminarUsuario($id) {\n        $stmt = $this->pdo->prepare(\"DELETE FROM usuarios WHERE id = ?\");\n        return $stmt->execute([$id]);\n    }\n}\n\n/*\n$db = new DatabaseManager('localhost', 'mi_app', 'usuario', 'password');\n\n$nuevoId = $db->crearUsuario('Pedro Martínez', 'pedro@email.com', 'password123');\necho \"Usuario creado con ID: $nuevoId\\n\";\n\n$usuarios = $db->obtenerUsuarios();\nforeach ($usuarios as $usuario) {\n    echo \"Usuario: \" . $usuario['nombre'] . \" - \" . $usuario['email'] . \"\\n\";\n}\n*/\n?>",
                    language: "php"
                },
                {
                    title: "Estructura Básica de Laravel",
                    description: "Configuración inicial y estructura de un proyecto Laravel",
                    code: "<?php\n// routes/web.php - Definición de rutas web\nuse Illuminate\\Support\\Facades\\Route;\nuse App\\Http\\Controllers\\UsuarioController;\nuse App\\Http\\Controllers\\ProductoController;\n\nRoute::get('/', function () {\n    return view('welcome');\n});\n\nRoute::prefix('usuarios')->group(function () {\n    Route::get('/', [UsuarioController::class, 'index'])->name('usuarios.index');\n    Route::get('/crear', [UsuarioController::class, 'create'])->name('usuarios.create');\n    Route::post('/', [UsuarioController::class, 'store'])->name('usuarios.store');\n    Route::get('/{usuario}', [UsuarioController::class, 'show'])->name('usuarios.show');\n    Route::get('/{usuario}/editar', [UsuarioController::class, 'edit'])->name('usuarios.edit');\n    Route::put('/{usuario}', [UsuarioController::class, 'update'])->name('usuarios.update');\n    Route::delete('/{usuario}', [UsuarioController::class, 'destroy'])->name('usuarios.destroy');\n});\n\nRoute::prefix('api')->group(function () {\n    Route::apiResource('productos', ProductoController::class);\n    Route::get('usuarios/buscar', [UsuarioController::class, 'buscar']);\n});\n\n// routes/api.php - Rutas de API\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Route;\nuse App\\Http\\Controllers\\Api\\UsuarioApiController;\n\nRoute::middleware('auth:sanctum')->get('/user', function (Request $request) {\n    return $request->user();\n});\n\nRoute::apiResource('usuarios', UsuarioApiController::class);\nRoute::get('usuarios/buscar/{email}', [UsuarioApiController::class, 'buscarPorEmail']);\n\n// app/Models/Usuario.php - Modelo Eloquent\n<?php\n\nnamespace App\\Models;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\HasFactory;\nuse Illuminate\\Database\\Eloquent\\Model;\nuse Illuminate\\Database\\Eloquent\\SoftDeletes;\n\nclass Usuario extends Model\n{\n    use HasFactory, SoftDeletes;\n    \n    protected $table = 'usuarios';\n    \n    protected $fillable = [\n        'nombre',\n        'apellido',\n        'email',\n        'telefono',\n        'activo'\n    ];\n    \n    protected $hidden = [\n        'password',\n        'remember_token',\n    ];\n    \n    protected $casts = [\n        'activo' => 'boolean',\n        'email_verified_at' => 'datetime',\n        'created_at' => 'datetime',\n        'updated_at' => 'datetime',\n        'deleted_at' => 'datetime',\n    ];\n    \n    public function pedidos()\n    {\n        return $this->hasMany(Pedido::class);\n    }\n    \n    public function perfil()\n    {\n        return $this->hasOne(Perfil::class);\n    }\n    \n    public function getNombreCompletoAttribute()\n    {\n        return $this->nombre . ' ' . $this->apellido;\n    }\n    \n    public function getInicialesAttribute()\n    {\n        return strtoupper(substr($this->nombre, 0, 1) . substr($this->apellido, 0, 1));\n    }\n    \n    public function setNombreAttribute($value)\n    {\n        $this->attributes['nombre'] = ucfirst(strtolower($value));\n    }\n    \n    public function setEmailAttribute($value)\n    {\n        $this->attributes['email'] = strtolower($value);\n    }\n    \n    public function scopeActivos($query)\n    {\n        return $query->where('activo', true);\n    }\n    \n    public function scopeBuscarPorNombre($query, $nombre)\n    {\n        return $query->where('nombre', 'like', \"%{$nombre}%\")\n                    ->orWhere('apellido', 'like', \"%{$nombre}%\");\n    }\n    \n    public function scopeConPedidos($query)\n    {\n        return $query->has('pedidos');\n    }\n    \n    public function tienePedidos()\n    {\n        return $this->pedidos()->count() > 0;\n    }\n    \n    public function ultimoPedido()\n    {\n        return $this->pedidos()->latest()->first();\n    }\n}\n\n// app/Http/Controllers/UsuarioController.php - Controlador\n<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Models\\Usuario;\nuse Illuminate\\Http\\Request;\nuse Illuminate\\Support\\Facades\\Validator;\n\nclass UsuarioController extends Controller\n{\n    public function index(Request $request)\n    {\n        $query = Usuario::query();\n        \n        if ($request->has('buscar')) {\n            $query->buscarPorNombre($request->buscar);\n        }\n        \n        if ($request->has('activo')) {\n            $query->where('activo', $request->activo);\n        }\n        \n        $usuarios = $query->activos()\n                         ->orderBy('created_at', 'desc')\n                         ->paginate(10);\n        \n        return view('usuarios.index', compact('usuarios'));\n    }\n    \n    public function create()\n    {\n        return view('usuarios.create');\n    }\n    \n    public function store(Request $request)\n    {\n        $validator = Validator::make($request->all(), [\n            'nombre' => 'required|string|max:50|min:2',\n            'apellido' => 'required|string|max:50|min:2',\n            'email' => 'required|email|unique:usuarios,email',\n            'telefono' => 'nullable|string|max:15',\n            'activo' => 'boolean'\n        ], [\n            'nombre.required' => 'El nombre es obligatorio',\n            'nombre.min' => 'El nombre debe tener al menos 2 caracteres',\n            'email.required' => 'El email es obligatorio',\n            'email.email' => 'El email debe ser válido',\n            'email.unique' => 'Este email ya está registrado'\n        ]);\n        \n        if ($validator->fails()) {\n            return redirect()->back()\n                           ->withErrors($validator)\n                           ->withInput();\n        }\n        \n        $usuario = Usuario::create($request->all());\n        \n        return redirect()->route('usuarios.index')\n                        ->with('success', 'Usuario creado exitosamente');\n    }\n    \n    public function show(Usuario $usuario)\n    {\n        $usuario->load(['pedidos' => function($query) {\n            $query->latest()->take(5);\n        }]);\n        \n        return view('usuarios.show', compact('usuario'));\n    }\n    \n    public function edit(Usuario $usuario)\n    {\n        return view('usuarios.edit', compact('usuario'));\n    }\n    \n    public function update(Request $request, Usuario $usuario)\n    {\n        $validator = Validator::make($request->all(), [\n            'nombre' => 'required|string|max:50|min:2',\n            'apellido' => 'required|string|max:50|min:2',\n            'email' => 'required|email|unique:usuarios,email,' . $usuario->id,\n            'telefono' => 'nullable|string|max:15',\n            'activo' => 'boolean'\n        ]);\n        \n        if ($validator->fails()) {\n            return redirect()->back()\n                           ->withErrors($validator)\n                           ->withInput();\n        }\n        \n        $usuario->update($request->all());\n        \n        return redirect()->route('usuarios.show', $usuario)\n                        ->with('success', 'Usuario actualizado exitosamente');\n    }\n    \n    public function destroy(Usuario $usuario)\n    {\n        $usuario->delete();\n        \n        return redirect()->route('usuarios.index')\n                        ->with('success', 'Usuario eliminado exitosamente');\n    }\n    \n    public function buscar(Request $request)\n    {\n        $email = $request->get('email');\n        \n        if (!$email) {\n            return response()->json(['error' => 'Email es requerido'], 400);\n        }\n        \n        $usuarios = Usuario::where('email', 'like', \"%{$email}%\")\n                          ->activos()\n                          ->get();\n        \n        return response()->json($usuarios);\n    }\n}\n\n// database/migrations/create_usuarios_table.php - Migración\n<?php\n\nuse Illuminate\\Database\\Migrations\\Migration;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Support\\Facades\\Schema;\n\nreturn new class extends Migration\n{\n    public function up()\n    {\n        Schema::create('usuarios', function (Blueprint $table) {\n            $table->id();\n            $table->string('nombre', 50);\n            $table->string('apellido', 50);\n            $table->string('email')->unique();\n            $table->string('telefono', 15)->nullable();\n            $table->boolean('activo')->default(true);\n            $table->timestamp('email_verified_at')->nullable();\n            $table->timestamps();\n            $table->softDeletes();\n            \n            $table->index(['nombre', 'apellido']);\n            $table->index('email');\n            $table->index('activo');\n        });\n    }\n    \n    public function down()\n    {\n        Schema::dropIfExists('usuarios');\n    }\n};\n\n// database/factories/UsuarioFactory.php - Factory para testing\n<?php\n\nnamespace Database\\Factories;\n\nuse Illuminate\\Database\\Eloquent\\Factories\\Factory;\n\nclass UsuarioFactory extends Factory\n{\n    public function definition()\n    {\n        return [\n            'nombre' => $this->faker->firstName(),\n            'apellido' => $this->faker->lastName(),\n            'email' => $this->faker->unique()->safeEmail(),\n            'telefono' => $this->faker->phoneNumber(),\n            'activo' => $this->faker->boolean(80),\n            'email_verified_at' => now(),\n        ];\n    }\n    \n    public function inactivo()\n    {\n        return $this->state(function (array $attributes) {\n            return [\n                'activo' => false,\n            ];\n        });\n    }\n}\n\n// database/seeders/UsuarioSeeder.php - Seeder\n<?php\n\nnamespace Database\\Seeders;\n\nuse App\\Models\\Usuario;\nuse Illuminate\\Database\\Seeder;\n\nclass UsuarioSeeder extends Seeder\n{\n    public function run()\n    {\n        Usuario::factory()->count(50)->create();\n        \n        Usuario::factory()->inactivo()->count(10)->create();\n        \n        Usuario::create([\n            'nombre' => 'Administrador',\n            'apellido' => 'Sistema',\n            'email' => 'admin@miapp.com',\n            'telefono' => '999888777',\n            'activo' => true,\n            'email_verified_at' => now(),\n        ]);\n    }\n}",
                    language: "php"
                }
            ],
            "resources": [
                {name: "Laravel Documentation", url: "https://laravel.com/docs", type: "Documentación"},
                {name: "Laracasts", url: "https://laracasts.com/", type: "Tutoriales"},
                {name: "Laravel News", url: "https://laravel-news.com/", type: "Noticias"},
                {name: "Eloquent ORM Guide", url: "https://laravel.com/docs/eloquent", type: "Guía"}
            ],
            reflection: "Esta semana fue fascinante descubrir PHP y Laravel después de trabajar con Java y JavaScript. PHP demostró ser más moderno y potente de lo que esperaba, especialmente con sus características orientadas a objetos. Laravel me impresionó con su elegancia y la filosofía de 'convención sobre configuración'. Eloquent ORM hace que trabajar con bases de datos sea intuitivo y expresivo, mientras que Blade proporciona un sistema de plantillas limpio y poderoso. Artisan automatiza muchas tareas tediosas, y el ecosistema Laravel es increíblemente rico. La curva de aprendizaje fue suave gracias a la excelente documentación y la comunidad activa."
        },
        tech: [],
        cover: "/semana_12.jpg",
        link: "/semana12"
    },

    {
        id: "semana13",
        semana: "SEMANA 13",
        title: "Laravel Intermedio",
        description: "Exploración de características avanzadas de Laravel: middleware, eventos, colas, testing y optimización.",
        image: "/semana_13.jpg",
        content: {
            theory: [
                "Middleware: Filtran peticiones HTTP para autenticación, logging o rate limiting.",
                "Eventos: Implementan el patrón Observer para desacoplar componentes.",
                "Colas: Procesamiento asíncrono para tareas pesadas, mejorando la experiencia del usuario.",
                "Testing: Soporte para pruebas unitarias y de integración con PHPUnit y Pest.",
                "Optimización: Caching, eager loading e índices para mejorar rendimiento.",
                "Service Providers: Gestionan dependencias mediante inyección."
            ],
            examples: [
                {
                    title: "Middleware Personalizado",
                    description: "Middleware para autenticación basada en roles",
                    code: `<?php
// app/Http/Middleware/CheckRole.php
namespace App\\Http\\Middleware;
use Closure;
use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Auth;

class CheckRole
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }
        $user = Auth::user();
        foreach ($roles as $role) {
            if ($user->hasRole($role)) {
                return $next($request);
            }
        }
        abort(403, 'No tienes permisos');
    }
}

// app/Models/User.php
namespace App\\Models;
use Illuminate\\Foundation\\Auth\\User as Authenticatable;

class User extends Authenticatable
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }
    public function hasRole(string $role): bool
    {
        return $this->roles()->where('name', $role)->exists();
    }
}

// routes/web.php
Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard']);
});
`,
                    "language": "php"
                },
                {
                    "title": "Eventos y Listeners",
                    "description": "Sistema de eventos para notificaciones asíncronas",
                    "code": `<?php
// app/Events/UserRegistered.php
namespace App\\Events;
use App\\Models\\User;
use Illuminate\\Foundation\\Events\\Dispatchable;

class UserRegistered
{
    use Dispatchable;
    public User $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }
}

// app/Listeners/SendWelcomeEmail.php
namespace App\\Listeners;
use App\\Events\\UserRegistered;
use Illuminate\\Contracts\\Queue\\ShouldQueue;

class SendWelcomeEmail implements ShouldQueue
{
    public function handle(UserRegistered $event): void
    {
        Mail::to($event->user->email)->send(new WelcomeEmail($event->user));
    }
}

// app/Providers/EventServiceProvider.php
class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        UserRegistered::class => [
            SendWelcomeEmail::class,
        ],
    ];
}
`,
                    language: "php"
                },
                {
                    title: "Testing y Caché",
                    description: "Pruebas unitarias y optimización con caché",
                    code: `<?php
// tests/Unit/UserTest.php
namespace Tests\\Unit;
use App\\Models\\User;
use Tests\\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;
    public function test_user_can_have_roles()
    {
        $user = User::factory()->create();
        $user->assignRole('admin');
        $this->assertTrue($user->hasRole('admin'));
    }
}

// app/Services/CacheService.php
namespace App\\Services;
use Illuminate\\Support\\Facades\\Cache;

class CacheService
{
    public function getUserStats(int $userId): array
    {
        return Cache::remember("user_stats_{$userId}", 3600, function () use ($userId) {
            $user = User::find($userId);
            return ['total_orders' => $user->orders->count()];
        });
    }
}
`,
                    "language": "php"
                }
            ],
            resources: [
                {name: "Laravel Testing Documentation", url: "https://laravel.com/docs/testing", type: "Documentación"},
                {name: "Laravel Queues Guide", url: "https://laravel.com/docs/queues", type: "Guía"}
            ],
            reflection: "Esta semana profundicé en Laravel, destacando la flexibilidad de los middleware y eventos para modular aplicaciones. Las colas mejoraron la experiencia del usuario, y el testing con PHPUnit aportó confianza en el desarrollo. La optimización con caché y eager loading es clave para aplicaciones de alto rendimiento."
        },
        tech: [],
        cover: "/semana_13.jpg",
        link: "/semana13"
    },
    {
        id: "semana14",
        semana: "SEMANA 14",
        title: "Conociendo Python, Flask y Django",
        description: "Introducción a Python, Flask para aplicaciones ligeras y Django para desarrollo robusto.",
        image: "/semana_14.jpg",
        content: {
            theory: [
                "Python: Lenguaje de alto nivel con sintaxis clara y legible.",
                "Flask: Microframework minimalista para aplicaciones web rápidas.",
                "Django: Framework MVT con funcionalidades integradas para desarrollo robusto.",
                "Indentación: Define bloques de código en Python, promoviendo consistencia.",
                "Decoradores: Modifican funciones y clases de forma elegante.",
                "ORM: Flask y Django ofrecen mapeo objeto-relacional para bases de datos."
            ],
            examples: [
                {
                    title: "Fundamentos de Python",
                    description: "Estructuras básicas y programación orientada a objetos",
                    code: `# Estructuras de datos
usuario = {"nombre": "Deivi", "email": "deivi@email.com"}
frutas = ["manzana", "banana"]

# Función con decorador
def medir_tiempo(func):
    import time
    def wrapper(*args, **kwargs):
        inicio = time.time()
        resultado = func(*args, **kwargs)
        print(f"{func.__name__} tardó {time.time() - inicio:.4f} segundos")
        return resultado
    return wrapper

@medir_tiempo
def calcular_suma(a, b):
    return a + b

# Clase con herencia
class Usuario:
    def __init__(self, nombre, email):
        self.nombre = nombre
        self.email = email
    
    def saludar(self):
        return f"Hola, soy {self.nombre}"

class Admin(Usuario):
    def saludar(self):
        return f"Hola, soy {self.nombre} (Admin)"

# Uso
if __name__ == "__main__":
    print(calcular_suma(5, 3))
    admin = Admin("Ana", "ana@email.com")
    print(admin.saludar())
`,
                    "language": "python"
                },
                {
                    "title": "Aplicación Flask Básica",
                    "description": "API REST con Flask y SQLAlchemy",
                    "code": `# app.py
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db = SQLAlchemy(app)

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

@app.route('/api/usuarios', methods=['POST'])
def crear_usuario():
    data = request.get_json()
    usuario = Usuario(nombre=data['nombre'], email=data['email'])
    db.session.add(usuario)
    db.session.commit()
    return jsonify({'id': usuario.id, 'nombre': usuario.nombre}), 201

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
`,
                    language: "python"
                },
                {
                    title: "Estructura Django",
                    description: "Modelos y vistas básicas en Django",
                    code: `# blog/models.py
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    titulo = models.CharField(max_length=200)
    contenido = models.TextField()
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo

# blog/views.py
from django.shortcuts import render
from .models import Post

def post_list(request):
    posts = Post.objects.all()
    return render(request, 'blog/post_list.html', {'posts': posts})

# blog/urls.py
from django.urls import path
from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.post_list, name='post_list'),
]
`,
                    language: "python"
                }
            ],
            resources: [
                {name: "Python Documentation", url: "https://docs.python.org/3/", type: "Documentación"},
                {name: "Flask Documentation", url: "https://flask.palletsprojects.com/", type: "Documentación"},
                {name: "Django Documentation", url: "https://docs.djangoproject.com/", type: "Documentación"}
            ],
            reflection: "Python me impresionó por su claridad y versatilidad. Flask ofrece flexibilidad para proyectos pequeños, mientras que Django destaca por su estructura robusta y funcionalidades integradas. La transición a Python fue natural, y sus frameworks me permitieron entender diferentes enfoques para el desarrollo web."
        },
        tech: [],
        cover: "/semana_14.jpg",
        link: "/semana14"
    },
    {
        id: "semana15",
        semana: "SEMANA 15",
        title: "Flask Rutas y Plantillas",
        description: "Profundización en Flask: rutas avanzadas, plantillas Jinja2, formularios y SQLAlchemy.",
        image: "/semana_15.jpg",
        content: {
            theory: [
                "Rutas: URLs dinámicas con parámetros y métodos HTTP.",
                "Jinja2: Motor de plantillas para HTML dinámico con herencia y macros.",
                "Flask-WTF: Manejo seguro de formularios con validación.",
                "SQLAlchemy: ORM para operaciones de base de datos orientadas a objetos.",
                "Blueprints: Organización modular de aplicaciones grandes.",
                "Sesiones: Gestión de estado entre peticiones."
            ],
            examples: [
                {
                    title: "Rutas Avanzadas",
                    description: "Rutas dinámicas y blueprints",
                    code: `# app.py
from flask import Flask, render_template, Blueprint

app = Flask(__name__)
app.secret_key = 'clave-secreta'

@app.route('/')
def index():
    return render_template('index.html')

blog_bp = Blueprint('blog', __name__, url_prefix='/blog')

@blog_bp.route('/')
def blog_index():
    posts = [{'id': 1, 'titulo': 'Post 1'}, {'id': 2, 'titulo': 'Post 2'}]
    return render_template('blog/index.html', posts=posts)

app.register_blueprint(blog_bp)

if __name__ == '__main__':
    app.run(debug=True)
`,
                    language: "python"
                },
                {
                    title: "Plantillas Jinja2",
                    description: "Herencia y macros en Jinja2",
                    code: `{# templates/base.html #}
<!DOCTYPE html>
<html lang="es">
<head>
    <title>{% block title %}{{ app_name }}{% endblock %}</title>
</head>
<body>
    <nav>
        <a href="{{ url_for('index') }}">Inicio</a>
        <a href="{{ url_for('blog.blog_index') }}">Blog</a>
    </nav>
    <main>
        {% block content %}{% endblock %}
    </main>
</body>
</html>

{# templates/index.html #}
{% extends "base.html" %}
{% block title %}Inicio - {{ app_name }}{% endblock %}
{% block content %}
    <h1>Bienvenido a {{ app_name }}</h1>
{% endblock %}
`,
                    language: "html"
                },
                {
                    title: "SQLAlchemy y Formularios",
                    description: "CRUD con SQLAlchemy y formularios Flask-WTF",
                    code: `# models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(200), nullable=False)
    contenido = db.Column(db.Text, nullable=False)

# forms.py
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired

class PostForm(FlaskForm):
    titulo = StringField('Título', validators=[DataRequired()])
    contenido = TextAreaField('Contenido', validators=[DataRequired()])
    submit = SubmitField('Guardar')

# app.py
from flask import Flask, render_template, request
from models import db, Post
from forms import PostForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
db.init_app(app)

@app.route('/post/nuevo', methods=['GET', 'POST'])
def nuevo_post():
    form = PostForm()
    if form.validate_on_submit():
        post = Post(titulo=form.titulo.data, contenido=form.contenido.data)
        db.session.add(post)
        db.session.commit()
        return redirect('/')
    return render_template('nuevo_post.html', form=form)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
`,
                    language: "python"
                }
            ],
            resources: [
                {name: "Flask Documentation", url: "https://flask.palletsprojects.com/", type: "Documentación"},
                {name: "Jinja2 Documentation", url: "https://jinja.palletsprojects.com/", type: "Documentación"},
                {name: "SQLAlchemy Documentation", url: "https://docs.sqlalchemy.org/", type: "Documentación"}
            ],
            reflection: "Flask demostró ser un framework versátil y potente. Las rutas avanzadas permiten crear APIs flexibles, mientras que Jinja2 facilita interfaces dinámicas. SQLAlchemy simplifica las operaciones con bases de datos, y Flask-WTF asegura formularios robustos. La combinación de simplicidad y funcionalidad hace de Flask una herramienta ideal para proyectos web."
        },
        tech: [],
        cover: "/semana_15.jpg",
        link: "/semana15"
    }


];
