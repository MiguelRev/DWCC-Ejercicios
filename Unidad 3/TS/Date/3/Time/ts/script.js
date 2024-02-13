// Amosa a hora actual en diferentes formatos segundo o valor que meta o
// usuario por parámetro (usa un switch):
// 1. 14:35:07 (hora detallada con minutos e segundos)
// 2. 02:35 PM ou 02:35 AM (hora con minutos e AM ou PM segundo sexa antes
// ou despois de mediodía).
var fecha = new Date();
function formatTime(number) {
    var fechaActual = new Date();
    switch (number) {
        case 1:
            document.body.innerHTML = "<h1>".concat(fechaActual.toLocaleTimeString(), "</h1>");
            break;
        case 2:
            document.body.innerHTML = "<h1>".concat(fechaActual.toLocaleTimeString("es-Es", { hour12: true, hour: "2-digit", minute: "2-digit" }), "</h1>");
            break;
        default:
            break;
    }
}
var number = window.prompt("Introduce un 1 o un 2 para foramtear la hora");
formatTime(Number(number));
