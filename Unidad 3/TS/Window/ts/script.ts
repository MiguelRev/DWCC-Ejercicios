
//Permisos con Confirm
if (window.confirm("Deseas abrir una nueva ventana?")) {

    let newFrame: Window | null = window.open("ventana.html", "nueva", "height=300, width=300,left=400,top=400");

    //Evento cierre ventana
    const boton: Element | null = document.querySelector(".boton");

    if (boton != null) {
        boton.addEventListener("click", () => {
            if (newFrame != null) {
                if (!newFrame.closed) {
                    newFrame.close();
                } else if (newFrame.closed) {
                    document.write("<h1>La ventana se encuentra cerrada!</h1>");
                }
            }
        });
    }

    //MoveTo()
    function move_To() {
        if (newFrame != null) {
            newFrame.moveTo(800, 800);
        }
    }

    const moveto: Element | null = document.querySelector(".moveTo");

    if (moveto != null) {
        moveto.addEventListener("click", move_To);
    }


    //moveBy
    function move_By() {
        if (newFrame != null) {
            newFrame.moveBy(100, 600);
        }
    }

    const moveby: Element | null = document.querySelector(".moveBy");

    if (moveby != null) {
        moveby.addEventListener("click", move_By);
    }

    //Foco
    //Al parecer,si establecemos el foco nada más perderlo,falla y no lo hace
    //hay que ponerle un retraso
    if (newFrame != null) {
        newFrame.addEventListener("blur", () => {
            setTimeout(() => {
                if (newFrame != null) {
                    newFrame.focus();
                }
            }, 100);
        });
    }

} else {
    window.alert("Se ha denegado la apertura");
}
