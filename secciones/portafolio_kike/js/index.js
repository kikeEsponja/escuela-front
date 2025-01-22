function goBack(){
    window.history.back();
}

// TECNOLOGÍAS
const tech = document.getElementById('tech');

const tecnologias = ['Bootstrap', 'CSS', 'HTML', 'javaScript', 'PHP', 'SQL', 'WordPress'];

function azar(){
    return tecnologias[Math.floor(Math.random() * tecnologias.length)];
}

function actualizarTecnologias(){
    tech.classList.add('animacion-cambio');
    //tech.style.opacity = 0;
    tech.style.border = '3px solid green';
    tech.style.borderRadius = '8px'; 

    setTimeout(function(){
        tech.innerHTML = azar();
        //tech.style.opacity = 1;
        tech.classList.remove('animacion-cambio');
    },
    500
    );
}

actualizarTecnologias();

setInterval(actualizarTecnologias, 3000);

// CURSOS
const cursos = document.getElementById('cursos');

const cursosPorHacer = ['Back-end', 'Cyber Seguridad', 'Mobile Apps', 'React', 'Web-Socket', 'JAVA', 'Python', 'MongoDb'];

function azarCursos(){
    return cursosPorHacer[Math.floor(Math.random() * cursosPorHacer.length)];
}

function actualizarCursos(){
    cursos.classList.add('animacion-cambio');
    //cursos.style.opacity = 0;
    cursos.style.border = '3px solid red';
    cursos.style.borderRadius = '8px';

    setTimeout(function(){
        cursos.innerHTML = azarCursos();
        //cursos.style.opacity = 1;
        cursos.classList.remove('animacion-cambio');
    },
    500
    );
}

actualizarCursos();

setInterval(actualizarCursos, 3000);

// CAMBIO DE PALABRA LARGA
/*var palabra = document.getElementById('cambio-palabra');
if(window.innerWidth > 435){
    palabra.innerHTML = 'perseverancia';
}else{
    palabra.innerHTML = 'práctica';
}*/

// FRASES CÉLEBRES
var frases = document.getElementById('frases');

const arreglo = ['"El arte de la victoria se aprende en las derrotas", Simón Bolivar.',
'"Si crees que puedes, puedes, y si crees que no puedes, no puedes, en ambos casos estás en lo cierto.", Henry Ford.',
'"peor que el fracaso es no haber intentado nada.", Franklin D. Roosvelt.', 
'"Es una locura odiar a todas las rosas porque una te pinchó. renunciar a todos tus sueños porque uno de ellos no se realizó.", El principito',
'"No hay viento favorable para el que no sabe a qué puerto se dirige.", Séneca'];

function aleatoria(){
    return arreglo[Math.floor(Math.random() * arreglo.length)];
}

function actualizarFrase(){
    frases.style.opacity = 0;
    setTimeout(function(){
        frases.innerHTML = aleatoria();
        frases.style.opacity = 1;
    }, 
    500
    );
}
actualizarFrase();
setInterval(actualizarFrase, 5000);

//TEMA OSCURO
document.addEventListener('DOMContentLoaded', ()=>{
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || "light";

    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '🌞' : '🌙';

    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '🌞' : '🌙';
        localStorage.setItem('theme', newTheme);
    });
});

// INGLÉS Y ESPAÑOL
const eng = document.getElementById('eng');
const esp = document.getElementById('esp');

if(eng){
    eng.addEventListener('click', ()=>{
        window.location.href = './html/indexen.html';
    });
}

if(esp){
    esp.addEventListener('click', ()=>{
        window.location.href = '../index.html';
    });
};