//Pide ao usuario o seu nome e apelidos nunha única petición (pode ser un
//prompt) e amose:
//1 -O tamaño do nome e dos apelidos.
var nombreCompleto = window.prompt("Introduce tu nombre y apellidos");
var nombreSeparado = [];
if (nombreCompleto != null) {
    nombreSeparado = nombreCompleto.trim().split(" ");
}
var resultado = nombreSeparado.filter(function (value) { return value != ""; });
document.write("<h3>1 - O tamaño do nome e dos apelidos</h3>");
for (var _i = 0, resultado_1 = resultado; _i < resultado_1.length; _i++) {
    var iterator = resultado_1[_i];
    document.write("<p>".concat(iterator, " tiene ").concat(iterator.length, " letras</p>"));
}
//2 -O tamaño do nome e dos apelidos sen espazos.O tamaño do nome e dos apelidos sen espazos.
var nombreJunto = "";
resultado.forEach(function (element) {
    nombreJunto += element;
});
document.body.insertAdjacentHTML('beforeend', "\n<h3>2 - O tama\u00F1o do nome e dos apelidos sen espazos.O tama\u00F1o do nome e dos apelidos sen espazos.</h3>\n<p>El nombre completo tiene ".concat(nombreJunto.length, " letras</p> \n"));
//3 -O nome e os apelidos en minúsculas.
document.body.insertAdjacentHTML('beforeend', "<h3>3 - Min\u00FAsculas</h3>");
resultado.forEach(function (element) {
    document.body.insertAdjacentHTML('beforeend', "<p>".concat(element.toLowerCase(), "</p>"));
});
// 4- E en maiúsculas.
document.body.insertAdjacentHTML('beforeend', "<h3>4 - May\u00FAsculas</h3>");
resultado.forEach(function (element) {
    document.body.insertAdjacentHTML('beforeend', "<p>".concat(element.toUpperCase(), "</p>"));
});
//5- Que amose separado Nome, Apelido1 e Apelido2.
document.body.insertAdjacentHTML('beforeend', "<h3>5- Que amose separado Nome, Apelido1 e Apelido2.</h3>");
resultado.forEach(function (element) {
    document.body.insertAdjacentHTML('beforeend', "<p>".concat(element, "</p>"));
});
//6- ◦ Unha proposta de nome de usuario co nome en minúsculas, a incial do
// primeiro apelido en maiúsculas e a inicial do segundo apelido tamén en
// maiúsculas. Por exemplo, para Gerardo Otero Rodriguez: gerardoOR
document.body.insertAdjacentHTML('beforeend', "<h3>6-Inciales dos apelidos en mai\u00FAsculas</h3>");
var proposta = "";
if (resultado.length >= 3) {
    var nombre = resultado[0].toLowerCase();
    var apellido1 = resultado[1].charAt(0).toUpperCase();
    var apellido2 = resultado[2].charAt(0).toUpperCase();
    proposta += proposta.concat(nombre, apellido1, apellido2);
}
document.body.insertAdjacentHTML("beforeend", "<p>".concat(proposta, "</p>"));
