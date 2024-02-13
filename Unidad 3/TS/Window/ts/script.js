//Permisos con Confirm
if (window.confirm("Deseas abrir una nueva ventana?")) {
    var newFrame_1 = window.open("ventana.html", "nueva", "height=300, width=300,left=400,top=400");
    //Evento cierre ventana
    var boton = document.querySelector(".boton");
    if (boton != null) {
        boton.addEventListener("click", function () {
            if (newFrame_1 != null) {
                if (!newFrame_1.closed) {
                    newFrame_1.close();
                }
                else if (newFrame_1.closed) {
                    document.write("<h1>La ventana se encuentra cerrada!</h1>");
                }
            }
        });
    }
    //MoveTo()
    function move_To() {
        if (newFrame_1 != null) {
            newFrame_1.moveTo(800, 800);
        }
    }
    var moveto = document.querySelector(".moveTo");
    if (moveto != null) {
        moveto.addEventListener("click", move_To);
    }
    //moveBy
    function move_By() {
        if (newFrame_1 != null) {
            newFrame_1.moveBy(100, 600);
        }
    }
    var moveby = document.querySelector(".moveBy");
    if (moveby != null) {
        moveby.addEventListener("click", move_By);
    }
    //Foco
    //Al parecer,si establecemos el foco nada más perderlo,falla y no lo hace
    //hay que ponerle un retraso
    if (newFrame_1 != null) {
        newFrame_1.addEventListener("blur", function () {
            setTimeout(function () {
                if (newFrame_1 != null) {
                    newFrame_1.focus();
                }
            }, 100);
        });
    }
}
else {
    window.alert("Se ha denegado la apertura");
}
