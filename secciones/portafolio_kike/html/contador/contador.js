let meta = document.getElementById('meta');
let boton = document.getElementById('boton');
let cuenta = document.getElementById('clicks');
let limpiar = document.getElementById('limpiar');
let faltan = document.getElementById('faltan');
let ok = document.getElementById('ok');
let num = 0;

ok.addEventListener('click', () => {
    if(!meta.value){
        faltan.textContent = 'Ingrese un número!';
    }else{
        faltan.textContent = meta.value;
    }
});

boton.addEventListener('click', () => {
    if(meta.value <= 0){
        alert('Ingrese un número');
    }else{
        num = num + 1;
        cuenta.textContent = num;
        meta.value = meta.value - 1;
        faltan.textContent = meta.value;
        if(meta.value == 0){
            alert('Objetivo alcanzado!');
        }
    }
});

limpiar.addEventListener('click', () => {
    num = 0;
    cuenta.textContent = '';
    meta.value = 0;
    faltan.textContent = '';
});