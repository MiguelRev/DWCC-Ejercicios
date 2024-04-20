//Selectores
const contenedor = document.querySelector('#zonaDibujo');
const paleta = document.querySelector('#paleta');
const pincel = document.querySelector('#pincel');

//Variables
let colorActivo = '';
let estadoPincel = false;

//EventListeners
paleta.addEventListener('click', seleccionarColor);

//Funciones
function agregarTablero(nodoPadre) {
    const tablero = document.createElement('table');
    tablero.classList.add('tablerodibujo');

    for (let i = 0; i < 30; i++) {
        const filaTablero = document.createElement('tr');

        for (let z = 0; z < 30; z++) {
            const casilla = document.createElement('td');
            casilla.style.border = '1px solid black';
            casilla.addEventListener('click', comprobarPincel);
            casilla.addEventListener('mouseover', pintar);

            filaTablero.appendChild(casilla);
        }
        tablero.appendChild(filaTablero);
    }
    nodoPadre.appendChild(tablero);
}
agregarTablero(contenedor);


/** Función que controla el color seleccionado del pincel.
 * Si se pulsa un color que esta seleccionado, se deselecciona.
 * Si se pulsa un color diferente cuando otro color está seleccionado, se cambia al último color pulsado.
*/
function seleccionarColor(e) {
    const elementoPulsado = e.target;

    if (elementoPulsado.tagName === 'TD') {

        if (elementoPulsado.classList.contains('seleccionado')) {
            elementoPulsado.classList.remove('seleccionado');
        } else {
            const colorSeleccionado = paleta.querySelector('td.seleccionado');
            if (colorSeleccionado) {
                colorSeleccionado.classList.remove('seleccionado');
            };
            elementoPulsado.classList.add('seleccionado');
            colorActivo = elementoPulsado.classList[0];
        }

    }
};

/** Comprueba el estado del pincel, si se encuentra activo al ejecutarse, lo desactiva y viceversa.
 * Tambien cambia el texto informativo del estado del pincel.
*/
function comprobarPincel(e) {
    if (estadoPincel) {
        estadoPincel = false;
        pincel.textContent = "PINCEL DESACTIVADO";
        e.target.classList.add(colorActivo);
    } else {
        estadoPincel = true;
        pincel.textContent = "PINCEL ACTIVADO";
        e.target.classList.add(colorActivo);
    }
}

/**Pinta las casillas si el pincel está activo */
function pintar(e) {
    if (estadoPincel) {
        e.target.classList.add(colorActivo);
    }
}