/*
Realizar unha pequena aplicación en JavaScript e outra en Typescript que amose (por consola ou
por pantalla, o que che resulte máis doado) o seguinte:
• Indicar se un número é primo ou non. A entrada de datos podes facela como queiras
(prompt, fixa,...)
Utilizar os tres tipos de bucles que se viron nos contidos. Podes escoller o que 
*/

/*Un número primo es un número natural mayor que 1 que solo tiene dos divisores positivos, el 1 y sí mismo.
 En otras palabras, un número primo no es divisible por ningún otro número excepto el 1 y el número en sí mismo. 
 Algunos ejemplos de números primos son 2, 3, 5, 7, 11, 13, 17, 19, y así sucesivamente.*/

let count = 2;

let num = prompt("Introduce un número,por favor");
//console.log(typeof num);
num = Number(num);

for (let i = 0; i < num; i++) {

    if (typeof num == "number" && num >= 1) {
        if (num % count == 0 && count != num || num == 1) {
            console.log(`El número ${num} no es primo`);
            break;
        } else if (count == num &&  num % count == 0) {
            console.log(`El número ${num} es primo`);
        }
        count++;
    } else {
        console.log("Debes introducir un número mayor a 0");
    }
}


