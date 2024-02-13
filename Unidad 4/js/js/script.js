let paises = ["Argentina", "Brasil", "Canadá", "Dinamarca", "Egipto", "Francia", "Grecia", "India", "Japón", "España"];

//Amosa o número de elementos do Array
console.log(`1-Amosa o número de elementos do Array :${paises.length}`);

//Amosa todos os países.
console.log("2-Amosa todos os países.");
paises.forEach((pais)=>{
    console.log(pais);
});

//Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non
//quede modificado, é dicir, que non quede ordenado ao revés.
console.log("3-Amosa todos os países en sentido inverso.");
const reverse=[...paises];
reverse.reverse();
console.log(reverse);
console.log(paises);

//Engade un país ao comezo do Array.
console.log("4-Engade un país ao comezo do Array.");
paises.unshift("Islandia");
console.log(paises);

//Engade un país ao final do Array.
console.log("5-Engade un país ao final do Array.");
paises.push("Tailandia");
console.log(paises);

//Elimina un elemento ao comezo do Array e indica cal foi.
console.log("6-Elimina un elemento ao comezo do Array e indica cal foi.");
console.log(paises.shift());

//Elimina un elemento ao final do Array e indica cal foi.
console.log("7-Elimina un elemento ao final do Array e indica cal foi.");
console.log(paises.pop());

//Amosa o elemento que se atope na posición que che indique o usuario.
console.log("8-Amosa o elemento que se atope na posición que che indique o usuario.");
const numeroUsuario=2;
        //console.log(paises[numeroUsuario]);
console.log(paises.find((pais,index)=>index===numeroUsuario));

//Amosa a posición na que se atopa un elemento indicado polo usuario.
console.log("9-Amosa a posición na que se atopa un elemento indicado polo usuario.");
console.log(paises.findIndex(pais=>pais==="Francia"));

//Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.
console.log("10-Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.");
const num1=2;
const num2=4;

console.log(paises.slice(num1,num2));