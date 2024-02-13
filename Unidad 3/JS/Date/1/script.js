// Amosar o número de días que quedan dende hoxe (día actual) ata final de
// curso (por exemplo, o 25 de Xuño).
const fechaActual=new Date();
const fechaFinal=new Date("2024-06-25");

const dif=fechaFinal-fechaActual;

const segundos=dif/1000;
const minutos=segundos/60;
const horas=minutos/60;
const dias=horas/24;

console.log(Math.round(dias));



