let boton = document.getElementById('calcular');

boton.addEventListener('click', () => {
    let resultado = document.getElementById('resultado');
    let impuesto = 0;

    let pais = document.getElementById('pais');
    if(pais.value == 'arg'){
        impuesto = 21;
    }else if(pais.value == 'bra'){
        impuesto = 18;
    }else if(pais.value == 'chi'){
        impuesto = 19;
    }else if(pais.value == 'col'){
        impuesto = 19;
    }else if(pais.value == 'ven'){
        impuesto = 16;
    }else{
        resultado.textContent = 'país no válido';
    }

    let monto = parseFloat(document.getElementById('precio').value);
    let iva = (monto * impuesto) / 100;
    let total = (monto + iva);
    if(!monto){
        alert('ingrese un monto');
    }
    resultado.innerHTML = 'el monto total es: ' + total;
});

const reset = document.createElement('button');
const contenedor = document.querySelector('center');
reset.textContent = 'limpiar';

reset.addEventListener('click', () => {
    let entrada = document.getElementById('precio');
    entrada.value = '';
    resultado.innerHTML = '';
});

contenedor.appendChild(reset);