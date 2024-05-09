// SELECTORES
const formulario = document.querySelector('#formulario'); // Selector del formulario
const respuesta = document.querySelector('#info-respuesta'); // Selector del elemento donde se mostrará la respuesta

// Selectores para los campos del formulario
const nombre = document.querySelector('#nombre');
const apellidos = document.querySelector('#apellidos');
const correo = document.querySelector('#correo');
const usuario = document.querySelector('#usuario');
const clave = document.querySelector('#clave');
const telefono = document.querySelector('#telefono');

// EVENTOS Inputs

// Evento de validación para el campo de nombre
nombre.addEventListener('blur', (e) => checkInput(e.target, '^[a-z]{0,20}$'));

// Evento de validación para el campo de apellidos
apellidos.addEventListener('blur', (e) => checkInput(e.target, '^([a-z]{0,40} [a-z]{0,40}|[a-z]{0,40})$'));

// Evento de validación para el campo de correo electrónico
correo.addEventListener('blur', (e) => checkInput(e.target, '^[aA-zZ]+@[a-z]+(.com|.net|.es|.gal|.org)$'));

// Evento de validación para el campo de usuario
usuario.addEventListener('blur', (e) => checkInput(e.target, '^\\w{0,20}$'));

// Evento de validación para el campo de clave
clave.addEventListener('blur', (e) => checkInput(e.target, '^(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=|{}\\[\\]:;<>,.?]).{8,}$'));

// Evento de validación para el campo de teléfono
telefono.addEventListener('blur', (e) => checkInput(e.target, '^[0-9]{9}$'));

// Evento de envío del formulario
formulario.addEventListener('submit', submitForm);

// OBJETO DE FORMULARIO
let formOBJ = {
    nombre: '', // Campo de nombre
    apellidos: '', // Campo de apellidos
    correo: '', // Campo de correo electrónico
    usuario: '', // Campo de usuario
    clave: '', // Campo de clave
    telefono: '', // Campo de teléfono
}

// FUNCIONES

/**
 * Valida el valor de un campo de entrada y actualiza el objeto formOBJ.
 * @param {Element} target Elemento de entrada a validar.
 * @param {String} pattern Patrón de expresión regular para la validación.
 */
function checkInput(target, pattern) {
    const reg = new RegExp(pattern); // Expresión regular para la validación
    const patternResult = reg.test(target.value); // Resultado de la validación

    // Si el valor no es válido o está vacío, se agrega una clase para indicar un borde rojo y se marca el campo como falso en el objeto formOBJ
    if (!patternResult || target.value === '') {
        target.classList.add('border');
        formOBJ[target.id] = false;
    } else {
        // Si el valor es válido, se elimina la clase de borde rojo y se actualiza el valor en formOBJ
        target.classList.remove('border');
        formOBJ[target.id] = target.value;
    }
}

/**
 * Comprueba si todos los campos del formulario son válidos.
 * @returns {Boolean} true si el formulario es válido, false de lo contrario.
 */
function checkForm() {
    const { nombre, apellidos, correo, usuario, clave, telefono } = formOBJ;
    // Comprueba si algún campo está vacío o es falso
    if (!(nombre || apellidos || correo || usuario || clave || telefono) ||
        nombre === '' || apellidos === '' || correo === '' || usuario === '' || clave === '' || telefono === '') {
        return false; // Si algún campo es inválido, devuelve false
    } else {
        return true; // Si todos los campos son válidos, devuelve true
    }
}

/**
 * Envía los datos del formulario al servidor y muestra la respuesta.
 * @param {Event} e Evento de envío del formulario.
 */
function submitForm(e) {
    e.preventDefault(); // Evita que se envíe el formulario por defecto

    // Comprueba si el formulario es válido
    if (!checkForm()) {
        // Si el formulario no es válido, muestra un mensaje de error
        if (!document.querySelector('.error')) {
            const error = document.createElement('h3');
            error.classList.add('error');
            error.textContent = "Todos los campos deben ser completados correctamente.";
            formulario.appendChild(error); // Agrega el mensaje de error al formulario
            error.style.fontWeight = 'bold';
            error.style.color = 'red';

            setTimeout(() => {
                error.remove(); // Elimina el mensaje de error después de 3 segundos
            }, 3000);
        }
        return;
    }

    // Envía los datos del formulario al servidor utilizando XMLHttpRequest
    const { nombre, apellidos, correo, usuario, clave, telefono } = formOBJ;
    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost/ejercicio07/php/registrar.php'); // URL del servidor
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    request.addEventListener('load', () => {
        imprimeRespuestaServidor(request.response); // Muestra la respuesta del servidor
    });
    request.send(`nombre=${nombre}&apellidos=${apellidos}&correo=${correo}&usuario=${usuario}&clave=${clave}&telefono=${telefono}`); // Envía los datos del formulario
}

/**
 * Muestra la respuesta del servidor en el elemento respuesta.
 * @param {String} response Respuesta del servidor.
 */
function imprimeRespuestaServidor(response) {
    respuesta.innerHTML = `${response}`; // Muestra la respuesta del servidor
    respuesta.style.display = 'block';
}
