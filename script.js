document.addEventListener('DOMContentLoaded', () => {
    
    // Función para crear las estrellas
    function crearEstrellas() {
        let contador = Math.floor(window.innerWidth * window.innerHeight / 15000); 
        let escena = document.querySelector('.estrellas');
        let i = 0;
        while (i < contador) {
            let estrella = document.createElement("i");
            let x = Math.floor(Math.random() * window.innerWidth);
            let y = Math.floor(Math.random() * window.innerHeight);
            let duracion = Math.random() * 10;
            let tamaño = Math.random() * 1;

            estrella.style.left = x + 'px';
            estrella.style.top = y + 'px';
            estrella.style.width = 1 + tamaño + 'px';
            estrella.style.height = 1 + tamaño + 'px';

            estrella.style.animationDuration = 5 + duracion + 's';
            estrella.style.animationDelay = duracion + 's';

            escena.appendChild(estrella);
            i++
        }
    }

    // Función para crear las hojas
    function crearHojas() {
        let cantidadHojas = 24; 

        let escena = document.querySelector('.hojas');
        let i = 0;

        while (i < cantidadHojas) {
            let hoja = document.createElement("i");

            let x = Math.floor(Math.random() * 480); 
            let y = Math.floor(Math.random() * window.innerHeight); 

            let duracion = Math.random() * 10 + 5;  
            let tamaño = Math.random() * 6 + 2;     

            hoja.style.left = x + 'px'; 
            hoja.style.top = y + 'px'; 
            hoja.style.width = tamaño + 'px';
            hoja.style.height = tamaño + 'px';

            hoja.style.animationDuration = duracion + 's'; 
            hoja.style.animationDelay = Math.random() * 1 + 's'; 

            escena.appendChild(hoja);
            i++;
        }
    }


    crearEstrellas();
    crearHojas();


    window.onresize = () => {
        const escenaEstrellas = document.querySelector('.estrellas');
        escenaEstrellas.innerHTML = ''; 
        crearEstrellas(); 

        const escenaHojas = document.querySelector('.hojas');
        escenaHojas.innerHTML = ''; // Limpia las hojas existentes
        crearHojas(); // Regenera las hojas
    };
});


// Animación mouse luz + estrellas

let efectoActivo = false; // Controla si los efectos están activos

const escena = document.querySelector('.escena');

// Activar los efectos cuando el mouse entra en el contenedor
escena.addEventListener('mouseenter', () => {
    efectoActivo = true;
});

// Desactivar los efectos cuando el mouse sale del contenedor
escena.addEventListener('mouseleave', () => {
    efectoActivo = false;
});

// Efecto de luz
document.addEventListener('mousemove', (e) => {
    if (!efectoActivo) return; // Si el efecto no está activo, no hacer nada

    const luz = document.createElement('div');
    luz.classList.add('luz');

    luz.style.left = `${e.clientX}px`;
    luz.style.top = `${e.clientY}px`;

    escena.appendChild(luz);

    setTimeout(() => {
        luz.remove();
    }, 100);
});

// Animación estrellas mouse
document.addEventListener('mousemove', (e) => {
    if (!efectoActivo) return; // Si el efecto no está activo, no hacer nada

    const numParticulas = 3;

    for (let i = 0; i < numParticulas; i++) {
        const estrella = document.createElement('div');
        estrella.classList.add('estrella');

        const offsetX = Math.random() * 30 - 15;
        const offsetY = Math.random() * 30 - 15;

        estrella.style.left = `${e.clientX + offsetX}px`;
        estrella.style.top = `${e.clientY + offsetY}px`;

        const tamaño = Math.random() * 2 + 1;
        estrella.style.width = `${tamaño}px`;
        estrella.style.height = `${tamaño}px`;

        const direccionX = Math.random() * 100 - 50;
        const direccionY = Math.random() * 100 - 50;

        estrella.style.setProperty('--dx', `${direccionX}px`);
        estrella.style.setProperty('--dy', `${direccionY}px`);

        const duracion = 1;
        estrella.style.animation = `movimientoParticula ${duracion}s ease-out forwards`;

        escena.appendChild(estrella);

        setTimeout(() => {
            estrella.remove();
        }, duracion * 1000);
    }
});




// CARRUSEL

const contenedorscroll = document.querySelector('.contenedor-scroll'); 
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


contenedorscroll.scrollLeft = (contenedorscroll.scrollWidth - contenedorscroll.clientWidth) / 2;

flechaIzquierda.addEventListener('click', () => {
    contenedorscroll.scrollLeft -= 400; 
});

flechaDerecha.addEventListener('click', () => {
    contenedorscroll.scrollLeft += 400; 
});





// CUENTA REGRESIVA (COUNTDOWN)

const dias = document.querySelectorAll('days');
const horas = document.querySelectorAll('hours');
const minutos = document.querySelectorAll('minutes');
const segundos =  document.querySelectorAll('seconds');

const añoActual = new Date().getFullYear();

const añoNuevo = new Date(`January 1 ${añoActual + 1} 00:00:00`);

// CUENTA REGRESIVA actualizado
function actualizaCuenta(){
    const añoActual = new Date();
    const resta = añoNuevo - añoActual;
    
    const d = Math.floor(resta / 1000 / 60 / 60 / 24);
    const h = Math.floor(resta / 1000 / 60 / 60) % 24;
    const m = Math.floor(resta / 1000 / 60 ) % 60;
    const s = Math.floor(resta / 1000 ) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10? '0' + h : h;
    minutes.innerHTML = m < 10? '0' + m : m;
    seconds.innerHTML = s < 10? '0' + s : s;
}

setInterval(actualizaCuenta, 1000);




    
// Formulario donativos se muestra o se oculta
const buttonsPlantTree = document.querySelectorAll('.ButtonPlantTree');
const donativoDiv = document.querySelector('.donativo');
const cancelButton = document.getElementById('cancel');
const botonPrincipal = document.getElementById('boton_principal');
const enlacesDonativo = document.querySelectorAll('.enlace-donativo');
const cabeceraPrincipal = document.querySelector('.cabecera_principal');


// Mostrar el div .donativo y ocultar el botón principal 
buttonsPlantTree.forEach(button => {
    button.addEventListener('click', () => {
        donativoDiv.classList.add('visible'); // Mostrar el div .donativo
        botonPrincipal.classList.add('hidden'); // Ocultar el botón principal
        cabeceraPrincipal.scrollIntoView({ behavior: 'smooth' }); // Desplazarse a la cabecera principal

    });
});

  enlacesDonativo.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace
            donativoDiv.classList.add('visible');
            botonPrincipal.classList.add('hidden');
            cabeceraPrincipal.scrollIntoView({ behavior: 'smooth' }); // Desplazarse a la cabecera principal

        });
    });

// Ocultar el div .donativo y mostrar el botón principal 
cancelButton.addEventListener('click', () => {
    donativoDiv.classList.remove('visible'); // Ocultar el div .donativo
    botonPrincipal.classList.remove('hidden'); // Mostrar el botón principal
});




// BARRA PROGRESO

const sendButton = document.getElementById('send');
const maskFillRect = document.getElementById('maskFillRect');
const pathBase = document.getElementById('pathBase');
let progress = 50; // Iniciar en 50%

// Configuración inicial del SVG
maskFillRect.setAttribute('width', '50%'); 
const pathLength = pathBase.getTotalLength();
const sectionLength = pathLength / 100; // Progreso en porcentajes

// Progreso según donación
const donationProgressMap = {
    5: 1,   // 5€ -> 1% progreso
    10: 2,  // 10€ -> 2% progreso
    20: 4,  // 20€ -> 4% progreso
    50: 10, // 50€ -> 10% progreso
    100: 20 // 100€ -> 20% progreso
};

// Función para actualizar la barra de progreso
function updateProgress(donationValue) {
    const additionalProgress = donationProgressMap[donationValue] || 0; 
    progress = Math.min(progress + additionalProgress, 100); // Limitar el progreso al 100%

    // Calcular la longitud del relleno basado en el progreso
    const dashLength = (pathLength * progress) / 100;
    maskFillRect.setAttribute('width', `${progress}%`);
}

// FORMULARIO + Actualización barra progreso con formulario

document.querySelector('.donativo').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario si hay errores

    let isValid = true; 

    // Validar el campo de nombre
    const nameInput = document.querySelector('#name');
    const nameError = nameInput.previousElementSibling; // Div asociado al error
    if (!nameInput.value.trim()) {
        nameInput.classList.add('input-error');
        nameError.textContent = 'Name is required';
        nameError.classList.add('error-message');
        isValid = false;
    } else {
        nameInput.classList.remove('input-error');
        nameError.textContent = '';
        nameError.classList.remove('error-message');
    }

    // Validar el campo de email
    const emailInput = document.querySelector('#email');
    const emailError = emailInput.previousElementSibling;
    if (!emailInput.value.trim()) {
        emailInput.classList.add('input-error');
        emailError.textContent = 'Email is required';
        emailError.classList.add('error-message');
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
        emailInput.classList.add('input-error');
        emailError.textContent = 'Please enter a valid email';
        emailError.classList.add('error-message');
        isValid = false;
    } else {
        emailInput.classList.remove('input-error');
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    }

    // Validar los radio buttons de precio
    const priceRadios = document.querySelectorAll('input[name="price"]');
    const priceError = document.getElementById('price-error'); 
    if (!Array.from(priceRadios).some(radio => radio.checked)) {
        priceError.textContent = 'Please select a donation amount';
        priceError.classList.add('error-message');
        isValid = false;
    } else {
        priceError.textContent = '';
        priceError.classList.remove('error-message');
    }

    // Validar los radio buttons de método de pago
    const paymentRadios = document.querySelectorAll('input[name="method-1"], input[name="method-2"]');
    const paymentError = document.getElementById('payment-error'); 
    if (!Array.from(paymentRadios).some(radio => radio.checked)) {
        paymentError.textContent = 'Please select a payment method';
        paymentError.classList.add('error-message');
        isValid = false;
    } else {
        paymentError.textContent = '';
        paymentError.classList.remove('error-message');
    }

    // Si el formulario es válido
    if (isValid) {
        const selectedDonation = document.querySelector('input[name="price"]:checked');

        if (selectedDonation) {
            const donationValue = parseInt(selectedDonation.value, 10);
            updateProgress(donationValue); // Actualiza la barra de progreso
        }

        // Ocultar el formulario y mostrar la barra de progreso
        const form = document.querySelector('.donativo');
        donativoDiv.classList.remove('visible'); // Ocultar el div .donativo
        botonPrincipal.classList.remove('hidden'); // Mostrar el botón principal
        

        // Mostrar la barra de progreso
        const progressBar = document.querySelector('.contenedor-donut');
        if (progressBar) {
            progressBar.style.display = 'block';
        }
    }
});


// Apartado FAQ (Mostrar y ocultar preguntas-respuestas)

const question1 = document.getElementById('question_1');
const answer1 = document.getElementById('answer_1');
const question2 = document.getElementById('question_2');
const answer2 = document.getElementById('answer_2');
const question3 = document.getElementById('question_3');
const answer3 = document.getElementById('answer_3');
const question4 = document.getElementById('question_4');
const answer4 = document.getElementById('answer_4');

const answers = [answer1, answer2, answer3, answer4];
const faqContainers = document.querySelectorAll('.faq_container');

function toggleAnswer(answer) {
    answers.forEach(a => {
        if (a !== answer) {
            a.classList.remove('visible');
        }
    });

    answer.classList.toggle('visible');

    faqContainers.forEach(container => {
        if (container.contains(answer) && answer.classList.contains('visible')) {
            container.classList.add('no-hover');
        } else {
            container.classList.remove('no-hover');
        }
    });
}
question1.addEventListener('click', () => {
    toggleAnswer(answer1);
});
question2.addEventListener('click', () => {
    toggleAnswer(answer2);
});
question3.addEventListener('click', () => {
    toggleAnswer(answer3);
});
question4.addEventListener('click', () => {
    toggleAnswer(answer4);
});


// Boton para volver arriba


const backToTopButton = document.getElementById('back-to-top');

    // Mostrar el botón "Back to Top" cuando se sale de .cabecera_principal
    window.addEventListener('scroll', () => {
        if (window.scrollY > cabeceraPrincipal.offsetHeight) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Desplazarse a la cabecera principal al hacer clic en el botón "Back to Top"
    backToTopButton.addEventListener('click', () => {
        cabeceraPrincipal.scrollIntoView({ behavior: 'smooth' });
    });



// Menu hamburguesa
// Seleccionar elementos del DOM
const menuHamburguesa = document.querySelector('.menu_hamburguesa');
const menuDesplegado = document.querySelector('.menu_desplegado');
const menuPrincipal = document.querySelector('.menu_principal');
const cerrarButton = document.querySelector('.cerrar');
const enlacesMenu = document.querySelectorAll('.menu_desplegado ul li a');

// Función para abrir el menú desplegable
menuHamburguesa.addEventListener('click', () => {
    menuDesplegado.classList.add('show'); // Mostrar el menú desplegable
    menuPrincipal.classList.add('hidden'); // Ocultar el menú principal
    console.log('Menú desplegable abierto');
});

// Función para cerrar el menú desplegable
const cerrarMenu = () => {
    menuDesplegado.classList.remove('show'); // Ocultar el menú desplegable
    menuPrincipal.classList.remove('hidden'); // Mostrar el menú principal
    console.log('Menú desplegable cerrado');
};

// Evento para el botón "cerrar"
cerrarButton.addEventListener('click', cerrarMenu);

// Evento para cerrar el menú al hacer clic en un enlace
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', cerrarMenu);
});
