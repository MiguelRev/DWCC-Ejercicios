import { CookieUsuarios } from './Clases/CookieUsuarios.js';
import { divIntentos, divError, nombre, apellidos, edad, nif, email, provincia, fecha, telefono, hora } from './selectores.js';


let claseFormulario = new CookieUsuarios();
/**Inicia la cookie y aumenta su valor */
export function init(e) {
    e.preventDefault();

    if (nombre.value === '', apellidos.value === '', edad.value === '', nif.value === '',
        email.value === '', fecha.value === '', provincia.value === '0', telefono.value === '', hora.value === '') {
        imprimeError('Los campos deben estar todos cubiertos');
        return;
    }

    if (!confirm("Deseas enviar los datos introducidos?")) {
        return;
    }
    claseFormulario.aumentaIntentos();

    divIntentos.innerHTML = `
        El envío ha tenido éxito<br>
        El numero de envios del formulario es : ${claseFormulario.getIntentosCookie()}
    `;
}

/**Convierte en mayusculas al texto del input*/
export function textoMayusculas(e) {
    let valor = e.target;
    valor.value = valor.value.toUpperCase();
}

/**Imprime mensajes de error en su respectivo contenedor */
function imprimeError(mensaje) {
    //Creación del parrafo error
    let parrafo = document.createElement('p');
    parrafo.textContent = mensaje;
    parrafo.style.fontWeight = "bold";

    //agregar el parrafo al contenedor error
    divError.appendChild(parrafo);

    //Eliminar mensaje a los 3 segundos
    setTimeout(() => {
        parrafo.remove()
    }, 3000);
}

/**Comprueba que el texto del input sea correcto con una expresión regular dada*/
export function checkInput(patron, e) {
    //Patron
    let expresion = new RegExp(patron);
    let resultado = expresion.test(e.target.value);

    //Check
    if (!resultado) {
        imprimeError(`El campo ${e.target.name} es incorrecto`);
        //Agregar borde al input
        e.target.classList.add('error');
    } else {
        //Removemos el borde de los input
        e.target.classList.remove('error');
    }
}
/**Comprueba que se haya seleccionado un valor en el campo en la provincia */
export function checkProvincia(e) {
    if (e.target.value === '0') {
        imprimeError(`Debes selecionar un valor en el campo ${e.target.name}`);
        e.target.classList.add('error');
    } else {
        e.target.classList.remove('error');
    }
}



