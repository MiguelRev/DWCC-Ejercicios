class Disco{
    discografia=[];
    constructor(nombre,grupo,cantante,anho,tipo,prestado=false){
        this.nombre=nombre;
        this.grupo=grupo;
        this.cantante=cantante;
        this.anho=anho;
        this.tipo=tipo;
        this.prestado=prestado;
    }
    cargarNuevosDatos(nombre,grupo,cantante,anho,tipo,prestado=false){
        this.nombre=nombre || this.nombre;
        this.grupo=grupo || this.grupo;
        this.cantante=cantante || this.cantante;
        this.anho=anho || this.anho;
        this.tipo=tipo || this.tipo;
        this.prestado=prestado || this.prestado;
    }
    mostrarDisco(){
        return `Nombre : ${this.nombre}, Grupo: ${this.grupo}, Cantante: ${this.cantante}, Año: ${this.anho}, Tipo: ${this.tipo},Prestado: ${this.prestado}`;
    }
    agregarDisco(){
        const disco={
            nombre:this.nombre,
            grupo:this.grupo,
            cantante:this.cantante,
            anho:this.anho,
            tipo:this.tipo,
            prestado:this.prestado,
        }
        this.discografia.push(disco);
    }
    mostrarDiscografia(){
        this.discografia.forEach((disco)=>console.log(disco));
    }
}

let z=new Disco('Meteora','Linkin Park','Chester Bennington',2003,'Metal Alternativo',true);
z.agregarDisco();
z.cargarNuevosDatos('Sempiternal','Bring Me The Horizon',' Oliver Sykes',2013,'Post-Hardcore',false);
z.agregarDisco();


z.cargarNuevosDatos('prueba','primero','Miguel',1991,'serenata',true);
z.agregarDisco();
z.mostrarDiscografia();



