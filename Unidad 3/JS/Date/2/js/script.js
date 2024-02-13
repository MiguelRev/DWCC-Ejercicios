// Pide a data do teu aniversario (non fai falla o ano) e saque todos os anos no
// que o teu aniversario vai caer en fin de semana dende este ano ata o ano 2100.

const mes = prompt("Introduce el número de mes de tu cumpleaños");
const dia = prompt("Introduce el número del día de tu cumpleaños");

if (isNaN(mes) || isNaN(mes) || mes > 12 || mes < 0 || dia > 31 || dia < 1) {
    document.write("<h1>Introduce un número válido </h1>");
} else if (mes && dia) {

    let fecha = new Date();
    fecha.setMonth(mes - 1);//Empieza en 0
    fecha.setDate(dia);

    let anho = fecha.getFullYear();
    while (anho < 2100) {

        if (fecha.getDay() === 6 || fecha.getDay() === 0) {//0-Domingo 6-Sábado

            document.write(`<p>Cae en fin de semana en el año ${fecha.getFullYear()}</p>`);

        }
        anho++;
        fecha.setFullYear(anho);
    }

}


