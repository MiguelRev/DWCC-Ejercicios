// Amosar o número de días que quedan dende hoxe (día actual) ata final de
// curso (por exemplo, o 25 de Xuño).
var fechaActual = new Date();
var fechaFinal = new Date("2024-06-25");
var dif = fechaFinal.getTime() - fechaActual.getTime();
var segundos = dif / 1000;
var minutos = segundos / 60;
var horas = minutos / 60;
var dias = horas / 24;
console.log(Math.round(dias));
