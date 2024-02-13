//Pide ao usuario o seu nome e apelidos nunha única petición (pode ser un
//prompt) e amose:
//1 -O tamaño do nome e dos apelidos.
const nombreCompleto: string | null = window.prompt("Introduce tu nombre y apellidos");

let nombreSeparado: string[]=[];

if (nombreCompleto != null) {

    nombreSeparado = nombreCompleto.trim().split(" ");

}

const resultado :string[] = nombreSeparado.filter(value => value != "");

document.write("<h3>1 - O tamaño do nome e dos apelidos</h3>");
for (const iterator of resultado) {

    document.write(`<p>${iterator} tiene ${iterator.length} letras</p>`);
}

//2 -O tamaño do nome e dos apelidos sen espazos.O tamaño do nome e dos apelidos sen espazos.
let nombreJunto :string= "";
resultado.forEach((element:string) => {
    nombreJunto += element;
});

document.body.insertAdjacentHTML('beforeend', `
<h3>2 - O tamaño do nome e dos apelidos sen espazos.O tamaño do nome e dos apelidos sen espazos.</h3>
<p>El nombre completo tiene ${nombreJunto.length} letras</p> 
`);

//3 -O nome e os apelidos en minúsculas.
document.body.insertAdjacentHTML('beforeend', `<h3>3 - Minúsculas</h3>`);

resultado.forEach(element => {
    document.body.insertAdjacentHTML('beforeend', `<p>${element.toLowerCase()}</p>`);
});

// 4- E en maiúsculas.
document.body.insertAdjacentHTML('beforeend', `<h3>4 - Mayúsculas</h3>`);

resultado.forEach(element => {
    document.body.insertAdjacentHTML('beforeend', `<p>${element.toUpperCase()}</p>`);
});

//5- Que amose separado Nome, Apelido1 e Apelido2.
document.body.insertAdjacentHTML('beforeend', `<h3>5- Que amose separado Nome, Apelido1 e Apelido2.</h3>`);

resultado.forEach(element => {
    document.body.insertAdjacentHTML('beforeend', `<p>${element}</p>`);
});
//6- ◦ Unha proposta de nome de usuario co nome en minúsculas, a incial do
// primeiro apelido en maiúsculas e a inicial do segundo apelido tamén en
// maiúsculas. Por exemplo, para Gerardo Otero Rodriguez: gerardoOR
document.body.insertAdjacentHTML('beforeend', `<h3>6-Inciales dos apelidos en maiúsculas</h3>`);

let proposta:string = "";

if (resultado.length >= 3) {
    const nombre :string= resultado[0].toLowerCase();
    const apellido1:string = resultado[1].charAt(0).toUpperCase();
    const apellido2:string = resultado[2].charAt(0).toUpperCase();

    proposta += proposta.concat(nombre, apellido1, apellido2);
}
document.body.insertAdjacentHTML("beforeend", `<p>${proposta}</p>`);