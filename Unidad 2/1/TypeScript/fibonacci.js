/*
Realizar unha pequena aplicación en JavaScript e outra en Typescript que amose (por consola ou
por pantalla, o que che resulte máis doado) o seguinte:
• 10 primeiros números da sucesión de Fibonacci.
Utilizar os tres tipos de bucles que se viron nos contidos. Podes escoller o que
*/
var count = 0;
var a = 0;
var b = 1;
var c = a + b;
while (count < 10) {
    console.log(a);
    a = b;
    b = c;
    c = a + b;
    count++;
}
