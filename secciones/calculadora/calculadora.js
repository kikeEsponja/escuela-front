let pan = document.getElementById('estado');

let pantalla = document.getElementById('pantalla');

let op = ['+', '-', '*', '/', '.'];
for(let j = 0; j < op.length; j++){
    let botonOp = document.getElementById(op[j]);
    botonOp.addEventListener('click', () => {
        pantalla.value += op[j];
    });
}

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0; i < num.length; i++){
    let boton = document.getElementById(num[i]);
    boton.addEventListener('click', () => {
        pantalla.value += num[i];
    });
}

let botonLimpiar = document.getElementById('c');
botonLimpiar.addEventListener('click', () => {
    pantalla.value = '';
});

let borrar = document.getElementById('del');
borrar.addEventListener('click', () => {
    pantalla.value = pantalla.value.slice(0, -1);
});

let igual = document.getElementById('igual');
igual.addEventListener('click', () => {
    pantalla.value = eval(pantalla.value);
});