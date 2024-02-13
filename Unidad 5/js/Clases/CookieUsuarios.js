/**Clase que crea la cookie "intentos" */
export class CookieUsuarios {
    constructor() {
        this.intentos = this.getIntentosCookie() || 0;
    }
    getIntentos() {
        return this.intentos;
    }
    aumentaIntentos() {
        this.intentos++;
        document.cookie = `intentos=${this.intentos}`;
    }
    getIntentosCookie() {
        const cookies = document.cookie;
        const array = cookies.split(';');
        const resultado = array.find((x) => x.match("^intentos="));
        if (resultado) {
            const intentos = resultado.split('=')[1];
            return Number(intentos);
        }
        return 0;
    }
}
