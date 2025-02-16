let intentos = 1;

document.getElementById('miboton').addEventListener('contextmenu', (event) =>{
    event.preventDefault();
	let contenedor = document.getElementById('contenedor');
    let siguiente = document.createElement('a');
	let felicidades = document.createElement('p');
	felicidades.textContent = 'FELICIDADES! Has pasado al siguiente nivel!';
	siguiente.textContent = 'siguiente';
	siguiente.href = '../quiz_2/quiz_2.html';
	contenedor.appendChild(felicidades);
	contenedor.appendChild(siguiente);
});

document.getElementById('miboton').addEventListener('click', (event) =>{
	if(event.button === 0){
    	intentos = intentos - 1;
    	alert('te quedan ' + intentos + ' intentos');
    	repaso();
    }
});

function repaso(){
    if(intentos < 1){
    	alert('debes repasar!');
    	window.location.href = "../pruebas.html"
    }
}

const salir = document.getElementById('salir');
salir.addEventListener('click', () => {
	window.location.href = "../pruebas.html";
});