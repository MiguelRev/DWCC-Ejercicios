// Pide a data do teu aniversario (non fai falla o ano) e saque todos os anos no
// que o teu aniversario vai caer en fin de semana dende este ano ata o ano 2100.
var mes = Number(prompt("Introduce el número de mes de tu cumpleaños"));
var dia = Number(prompt("Introduce el número del día de tu cumpleaños"));
if (isNaN(mes) || isNaN(mes) || mes > 12 || mes < 0 || dia > 31 || dia < 1) {
    document.write("<h1>Introduce un número válido </h1>");
}
else if (mes && dia) {
    var fecha = new Date();
    fecha.setMonth(mes - 1); //Empieza en 0
    fecha.setDate(dia);
    var anho = fecha.getFullYear();
    while (anho < 2100) {
        if (fecha.getDay() === 6 || fecha.getDay() === 0) { //0-Domingo 6-Sábado
            document.write("<p>Cae en fin de semana en el a\u00F1o ".concat(fecha.getFullYear(), "</p>"));
        }
        anho++;
        fecha.setFullYear(anho);
    }
}
