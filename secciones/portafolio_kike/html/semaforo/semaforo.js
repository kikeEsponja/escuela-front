let rojo = document.getElementById('rojo');
let amarillo = document.getElementById('amarillo');
let verde = document.getElementById('verde');

function green(){
    verde.style.background = '#0f0';
}
setTimeout(green, 500);
function greenOut(){
    verde.style.background = '#070';
}
setTimeout(greenOut, 2500);

function yellow(){
    amarillo.style.background = '#ff0';
}
setTimeout(yellow, 2500);
function yellowOut(){
    amarillo.style.background = '#770';
}
setTimeout(yellowOut, 4500);

function red(){
    rojo.style.background = '#f00';
}
setTimeout(red, 4500);
function redOut(){
    rojo.style.background = '#700';
}
setTimeout(redOut, 6000);

function start(){
    document.addEventListener('DOMContentLoaded', () => {
        green();
        yellow();
        red();
    });
}

function restart(){
    location.reload()
}
setInterval(restart, 5800);