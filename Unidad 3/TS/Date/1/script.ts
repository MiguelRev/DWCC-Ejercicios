// Amosar o número de días que quedan dende hoxe (día actual) ata final de
// curso (por exemplo, o 25 de Xuño).
const fechaActual:Date=new Date();
const fechaFinal:Date=new Date("2024-06-25");

const dif:number=fechaFinal.getTime()-fechaActual.getTime();

const segundos:number=dif/1000;
const minutos:number=segundos/60;
const horas:number=minutos/60;
const dias:number=horas/24;

console.log(Math.round(dias));



