
//Pide agora unha contrasinal y comprobaremos que cumpre coas seguintes
//premisas:

//1-Entre 8 e 16 caracteres.
const contraseña = window.prompt("Introduce una contraseña");

if (contraseña.length<8 ||contraseña.length >16) {
    console.log("No cumple los requisitos de longitud");
}else{
    console.log("Cumple con la longitud");
}
//2- Algunha maiúscula.
if(!contraseña.match("[A-Z]")){
    console.log("No contiene mayusculas");
}else{
    console.log("Contiene mayusculas");
}
//3-Algunha minúscula.
if(!contraseña.match("[a-z]")){
    console.log("No contiene minisculas");
}else{
    console.log("Contiene minisculas");
}
//3- Algún número.
if(!contraseña.match("[0-9]")){
    console.log("No contiene numeros");
}else{
    console.log("Contiene numeros");
}
//4-Algún caracter especial (_,-,@,#,$,%,&,...)
if(!contraseña.match("[^a-zA-Z0-9_]")){
    console.log("No contiene caracteres especiales");
}else{
    console.log("Contiene caracteres especiales");
}