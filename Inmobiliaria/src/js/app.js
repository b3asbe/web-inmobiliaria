// Función para solicitar el nombre y la ciudad
function solicitarInformacion() {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let ciudad = prompt("Por favor, ingresa tu ciudad (Lima o Cusco):");

    if (nombre && ciudad) {
        Servicios(nombre, ciudad);
    }
}

// Función para actualizar la sección de servicios
function Servicios(nombre, ciudad) {

    let serviciosTitle = document.querySelector('#servicios .section-title');
    if (serviciosTitle) {
        serviciosTitle.textContent = `Bienvenido ${nombre}, estos son Nuestros Servicios para la Ciudad de ${ciudad}`;
    }

    // Agregar imagen según la ciudad
    let serviciosSection = document.getElementById('servicios');
    let imagenCiudad = document.createElement('img');
    imagenCiudad.id = 'imagen-ciudad';
    imagenCiudad.style.width = '100%';
    imagenCiudad.style.maxWidth = '500px';
    imagenCiudad.style.display = 'block';
    imagenCiudad.style.margin = '20px auto';

    if (ciudad.toLowerCase() === 'lima') {
        imagenCiudad.src = '/imagen/lima_02.jpg';
        imagenCiudad.alt = 'Lima';
    } else if (ciudad.toLowerCase() === 'cusco') {
        imagenCiudad.src = '/imagen/cusco_02.jpg';
        imagenCiudad.alt = 'Cusco';
    }


    serviciosSection.appendChild(imagenCiudad);


    imagenCiudad.addEventListener('mouseover', function () {
        if (ciudad.toLowerCase() === 'lima') {
            this.src = '/imagen/lima_02.jpg';
        } else if (ciudad.toLowerCase() === 'cusco') {
            this.src = '/imagen/cusco_02.jpg';
        }
    });

    imagenCiudad.addEventListener('mouseout', function () {
        if (ciudad.toLowerCase() === 'lima') {
            this.src = '/imagen/lima_01.jpg';
        } else if (ciudad.toLowerCase() === 'cusco') {
            this.src = '/imagen/cusco_01.jpg';
        }
    });
}


let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            solicitarInformacion();
            observer.unobserve(entry.target);
        }
    });
}, options);


window.addEventListener('load', () => {
    let serviciosSection = document.getElementById('servicios');
    if (serviciosSection) {
        observer.observe(serviciosSection);
    }
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Destacar el enlace de navegación activo
window.addEventListener('scroll', function () {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').substring(1) === current) {
            a.classList.add('active');
        }
    });
});