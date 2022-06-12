// For simples
const arr = [2, 33, 45, 56, 7];

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

// For...in - loop entre propriedades enumeráveis de um objeto
function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop + ": " + obj[prop]);
    }
}

const meuObjeto = {
    nome: "João",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);

// For...of - Loop entre estruturas iteráveis(arrays, strings)
function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra);
    }
}
const palavra = "abacaxi";

logLetras(palavra);

// For...of - Loop entre estruturas iteráveis(arrays, strings)
function logNumeros(nums) {
    for(num of nums) {
        console.log(num);
    }
}
const nums = [30, 20, 233, 2];

logLetras(nums);