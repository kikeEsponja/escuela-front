let entrar = document.getElementById('entrar');
entrar.addEventListener('click', () =>{
    let status = document.getElementById('status');
    let edad = prompt('ingresa tu edad');
    function validar(edad, si, no){
        if(edad >= 18){
            si();
        }else{
            no();
        }
    }

    validar(
        edad, 
        function si(){ 
            alert('pasa'); 
            status.textContent = edad + ', pasas'; 
        }, 
        function no(){ 
            alert('no pasa'); 
            status.textContent = edad + ', te quedas afuera'; 
        });
});