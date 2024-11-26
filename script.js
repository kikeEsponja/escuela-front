// script.js
document.getElementById("turnoForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Configurar EmailJS
    emailjs.init("EMOG3CtPsycInLy-M"); // Tu User ID de EmailJS

    const serviceID = "service_gmshb3p";
    const templateID = "template_ggjmm5x";

    // Capturar datos del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    // Enviar correo
    emailjs
        .send(serviceID, templateID, {
            nombre: nombre,
            correo: correo,
            fecha: fecha,
            hora: hora,
            message: `El turno está programado para ${fecha} a las ${hora}`
        })
        .then(
            () => {
                alert("Turno agendado exitosamente. Recibirás una confirmación por correo.");
                document.getElementById("turnoForm").reset(); // Limpia el formulario
            },
            (error) => {
                alert("Hubo un problema al enviar el turno. Por favor, intenta de nuevo.");
                console.error("Error:", error);
            }
        );
});
