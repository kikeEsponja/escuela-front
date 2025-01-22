function goBack(){
    window.history.back();
}

// TECNOLOGÍAS
const tech = document.getElementById('tech');

const tecnologias = ['Bootstrap', 'CSS', 'HTML', 'javaScript', 'PHP', 'SQL'];

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

// FRASES CÉLEBRES EN INGLÉS
var frasesEng = document.getElementById('frases-eng');

const arregloEng = ['"To learn how to win, one must first know defeat.", Simón Bolivar.',
    '"Whether you think you can or think you can not, you are right.", Henry Ford.',
    '"The only thing worse than failing is not trying at all.", Franklin D. Roosvelt.', 
    '"It is madness to hate all roses just because one of them pricked you.", El principito',
    '"There are no favorable winds for those who do not know their destination.", Séneca'];

    function aleatoriaEng(){
        return arregloEng[Math.floor(Math.random() * arregloEng.length)];
    }
    
    function actualizarFraseEng(){
        frasesEng.style.opacity = 0;
        setTimeout(function(){
            frasesEng.innerHTML = aleatoriaEng();
            frasesEng.style.opacity = 1;
        }, 
        500
        );
    }
    actualizarFraseEng();
    setInterval(actualizarFraseEng, 5000);