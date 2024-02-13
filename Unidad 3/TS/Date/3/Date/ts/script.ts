// • Amosa a data actual en diferentes formatos segundo o valor que meta o
//  usuario por parámetro (usa un switch):
// 1. 17/02/2016
// 2. Mércores, 17 de febreiro de 2016
// 3. Wednesday, February 17, 2016.

//(Lo que cuesta encontarlo xD)
//ref -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options
function  formatDate(opcion:number):string {

    let fecha:Date=new Date();
    let opciones:object = {};
    let region :string= "es-Es";

    switch (opcion) {
        case 1:
            opciones = {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            };
            break;
        case 2:
            opciones = {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric"
            };
            break;
        case 3:
            opciones = {
                weekday: "long",
                month: "long",
                day: "2-digit",
                year: "numeric"
            };
            region="en-US";
        default:
            break;
    }

    return fecha.toLocaleDateString(region,opciones);
}

const valor=window.prompt("Introduce :\n1. 17/02/2016\n2. Mércores, 17 de febreiro de 2016 \n3. Wednesday, February 17, 2016. ");

document.body.innerHTML=`<h1>${formatDate(Number(valor))}</h1>`;
