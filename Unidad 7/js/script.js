//SELECTORES
const formulario = document.querySelector('#formulario');
const respuesta = document.querySelector('#info-respuesta');

const nombre = document.querySelector('#nombre');
const apellidos = document.querySelector('#apellidos');
const correo = document.querySelector('#correo');
const usuario = document.querySelector('#usuario');
const clave = document.querySelector('#clave');
const telefono = document.querySelector('#telefono');

//EVENTOS Inputs
nombre.addEventListener('blur', (e) => checkInput(e.target, '^[a-z]{0,20}$'));
apellidos.addEventListener('blur', (e) => checkInput(e.target, '^([a-z]{0,40} [a-z]{0,40}|[a-z]{0,40})$'));
correo.addEventListener('blur', (e) => checkInput(e.target, '^[aA-zZ]+@[a-z]+(.com|.net|.es|.gal|.org)$'));
usuario.addEventListener('blur', (e) => checkInput(e.target, '^\\w{0,20}$'));
clave.addEventListener('blur', (e) => checkInput(e.target, '^(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=|{}\\[\\]:;<>,.?]).{8,}$'));
telefono.addEventListener('blur', (e) => checkInput(e.target, '^[0-9]{9}$'));
//Eventos Formulario
formulario.addEventListener('submit', submitForm);

//OBJ
let formOBJ = {
    nombre: '',
    apellidos: '',
    correo: '',
    usuario: '',
    clave: '',
    telefono: '',
}

//FUNCIONES
// Código de validaciones del formulario
function checkInput(target, pattern) {
    const reg = new RegExp(pattern);
    const patternResult = reg.test(target.value);

    if (!patternResult || target.value === '') {
        target.classList.add('border');
        formOBJ[target.id] = false;
    } else {
        target.classList.remove('border');
        formOBJ[target.id] = target.value;
    }
    console.log(formOBJ);
}

function checkForm() {
    const { nombre, apellidos, correo, usuario, clave, telefono } = formOBJ;
    if (!(nombre || apellidos || correo || usuario || clave || telefono)
        || nombre === '' | apellidos === '' || correo === '' || usuario === '' || clave === '' || telefono === '') {
        return false;
    } else {
        return true;
    }
}

function submitForm(e) {
    e.preventDefault();

    if (!checkForm()) {
        if (!document.querySelector('.error')) {
            const error = document.createElement('h3');
            error.classList.add('error');
            error.textContent = "Todos los campos deben ser completados correctamente."
            formulario.appendChild(error);
            error.style.fontWeight = 'bold';
            error.style.color = 'red';

            setTimeout(() => {
                error.remove();
            }, 3000);

        }
        return;
    }
// Envio de datos con XMLHttpRequest
    const { nombre, apellidos, correo, usuario, clave, telefono } = formOBJ;

    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost/ejercicio07/php/registrar.php');
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    request.addEventListener('load', () => {
        imprimeRespuestaServidor(request.response);
    });
    request.send(`nombre=${nombre}&apellidos=${apellidos}&correo=${correo}&usuario=${usuario}&clave=${clave}&telefono=${telefono}`);
}

function imprimeRespuestaServidor(response) {
    respuesta.innerHTML = `${response}`;
    respuesta.style.display = 'block';
}







