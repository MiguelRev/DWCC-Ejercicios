/*
Realizar unha pequena aplicación en JavaScript e outra en Typescript que amose (por consola ou
por pantalla, o que che resulte máis doado) o seguinte:
• 10 primeiros números da sucesión de Fibonacci.
Utilizar os tres tipos de bucles que se viron nos contidos. Podes escoller o que 
*/

let count: number = 0;
let a: number = 0;
let b: number = 1;
let c: number = a + b;

while (count < 10) {
    console.log(a);
    a = b;
    b = c;
    c = a + b;
    count++;
}

