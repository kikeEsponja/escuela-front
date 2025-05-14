let percentageElement = document.getElementById("percentage");
let percentage = 0;

function increasePercentage() {
    if (percentage <= 100) {
        percentageElement.innerText = percentage + "%";
        percentage++;
    }
}

let interval = setInterval(() => {
    increasePercentage();
    if (percentage > 100) {
        clearInterval(interval); // Detener cuando llegue al 100%
    }
}, 19); // Aumenta el porcentaje rápidamente
