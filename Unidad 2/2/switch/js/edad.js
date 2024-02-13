/*
Crea un programa que pida ao usuario que introduza unha idade e amose a seguinte mensaxe en
función do número introducido:
• 0-12: neno
• 13-18: adolescente
• 19-30: xoven
• 31-64: adulto
• 65-100: xubilado
Controla os casos de erro tamén.
Para gardar un valor do usuario utilizamos o seguinte comando: prompt
Faino con if/else e con switch/case tamén.
*/

let edad = Number(prompt("Introduce tu edad"));

switch (Boolean(edad)) {
    case (edad > 0 && edad <= 12):
        console.log("neno");
        break;
    case (edad >= 13 && edad <= 18):
        console.log("adolescente");
        break;
    case (edad >= 19 && edad <= 30):
        console.log("xoven");
        break;
    case (edad >= 31 && edad <= 64):
        console.log("adulto");
        break;
    case (edad >= 65 && edad <= 100):
        console.log("xubilado");
        break;
    default:
        console.log("Error en los datos");
        break;
}


