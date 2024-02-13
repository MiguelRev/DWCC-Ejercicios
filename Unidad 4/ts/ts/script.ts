let paiseS:string[] = ["Argentina", "Brasil", "Canadá", "Dinamarca", "Egipto", "Francia", "Grecia", "India", "Japón", "España"];

//Amosa o número de elementos do Array
console.log(paiseS.length);

//Amosa todos os países.
paiseS.forEach((pais:string)=>{
    console.log(pais);
});

//Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non
//quede modificado, é dicir, que non quede ordenado ao revés.
const reversE:string[]=[...paiseS];
reversE.reverse();
console.log(reversE);
console.log(paiseS);

//Engade un país ao comezo do Array.
paiseS.unshift("Islandia");
console.log(paiseS);

//Engade un país ao final do Array.
paiseS.push("Tailandia");
console.log(paiseS);

//Elimina un elemento ao comezo do Array e indica cal foi.
console.log(paiseS.shift());

//Elimina un elemento ao final do Array e indica cal foi.
console.log(paiseS.pop());

//Amosa o elemento que se atope na posición que che indique o usuario.
const numeroUsuariO:number=2;
        //console.log(paises[numeroUsuario]);
console.log(paiseS.find((pais:string,index:number)=>index===numeroUsuariO));

//Amosa a posición na que se atopa un elemento indicado polo usuario.
console.log(paiseS.findIndex((pais:string)=>pais==="Francia"));

//Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.
const nuM1:number=2;
const nuM2:number=4;

console.log(paiseS.slice(nuM1,nuM2));