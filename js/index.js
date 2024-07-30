document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function setActiveSection(id) {
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none'; // Oculta todas las secciones
        });
        const activeSection = document.querySelector(id);
        if (activeSection) {
            activeSection.classList.add('active');
            activeSection.style.display = 'block'; // Muestra la sección activa
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            setActiveSection(targetId);
            window.history.pushState(null, '', targetId);
        });
    });

    // Muestra la sección de "PRESENTATION" al cargar la página
    setActiveSection('#presentacion');

    // Habilita el desplazamiento hacia la sección activa
    window.addEventListener('scroll', function() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});





//animacion del texto Advanced Student...
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-text', {
    strings: ["Advanced student of Computer Engineering"],
    typeSpeed: 20,
    backSpeed: 25,
    loop: true
    });
});




