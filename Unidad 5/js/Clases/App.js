import {formulario,nombre,apellidos,edad,nif,email,provincia,fecha,telefono,hora} from '../selectores.js';
import {init,textoMayusculas,checkInput,checkProvincia} from '../funciones.js';

/**Inicia la aplicación agregando los eventos correspondientes */
export class App{
    constructor(){
        this.agregaEventos();
    }
    agregaEventos(){
        //SUBMIT
        formulario.addEventListener('submit',init);

        //INPUTS:
        //Nombre
        nombre.addEventListener('blur',textoMayusculas);
        nombre.addEventListener('blur',function (e){
           checkInput("^[a-zA-Z]+$",e);
        });
        //Apellidos
        apellidos.addEventListener('blur',textoMayusculas);
        apellidos.addEventListener('blur',function(e){
           checkInput("^[a-zA-Z]+$",e);
        });
        //Edad
        edad.addEventListener('blur',function(e){
            checkInput('^([0-9][0-9]?|10[0-5])$',e);
        });
        //NIF
        nif.addEventListener('blur',function(e){
           checkInput('[0-9]{8}-[aA-zZ]{1}',e);
        });
        //Email
        email.addEventListener('blur',function(e){
            checkInput('^.+[@].+[\\.].+$',e);
        });
        //Provincia
        provincia.addEventListener('blur',checkProvincia);
        //Fecha
        fecha.addEventListener('blur',(e)=>checkInput('^([0-9]{2}/[0-9]{2}/[0-9]{4}|[0-9]{2}-[0-9]{2}-[0-9]{4})$',e));
        //Telefono
        telefono.addEventListener('blur',function (e){
            checkInput('^[0-9]{9}$',e);
        });
        //Hora
        hora.addEventListener('blur',(e)=>checkInput('^\\d{2}:\\d{2}$',e));
    }
}

