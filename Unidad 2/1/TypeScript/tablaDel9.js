/*
Realizar unha pequena aplicación en JavaScript e outra en Typescript que amose (por consola ou
por pantalla, o que che resulte máis doado) o seguinte:
• Táboa de multiplicar do 9.
Utilizar os tres tipos de bucles que se viron nos contidos. Podes escoller o que
*/
var count = 0;
var tabalaIndex = 9;
do {
    console.log("".concat(tabalaIndex, "x").concat(count, "=").concat(tabalaIndex * count));
    count++;
} while (count <= 10);
