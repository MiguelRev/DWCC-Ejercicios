var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var paiseS = ["Argentina", "Brasil", "Canadá", "Dinamarca", "Egipto", "Francia", "Grecia", "India", "Japón", "España"];
//Amosa o número de elementos do Array
console.log(paiseS.length);
//Amosa todos os países.
paiseS.forEach(function (pais) {
    console.log(pais);
});
//Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non
//quede modificado, é dicir, que non quede ordenado ao revés.
var reversE = __spreadArray([], paiseS, true);
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
var numeroUsuariO = 2;
//console.log(paises[numeroUsuario]);
console.log(paiseS.find(function (pais, index) { return index === numeroUsuariO; }));
//Amosa a posición na que se atopa un elemento indicado polo usuario.
console.log(paiseS.findIndex(function (pais) { return pais === "Francia"; }));
//Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.
var nuM1 = 2;
var nuM2 = 4;
console.log(paiseS.slice(nuM1, nuM2));
