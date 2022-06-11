// Função anônima
// uma variável pode armazenar uma função
const soma = function(a, b) {
    return a + b;
}
console.log(soma(1,2));

// Função autoinvocável - exemplo 1
(
    function() {
        let name = "Teste";
        return name;
    }
)(); //Teste

// Função autoinvocável - exemplo 2
const soma3 = (
    function(a, b) {
        return a + b;
    }
)(1, 2);
console.log(soma3);

// Callbacks
// trata-se de uma função passada por argumento para outra função
const calc = function(operacao, num1, num2) {
    return operacao(num1, num2);
}

const somaCalc = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub);
console.log(resultSoma);

// Valores padrão como parâmetro
// caso não seja passado o parametro equivalente a num por default será 1
function exponencial(array, num = 1) {
    const result = [];

    for(let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }

    return result
}

// arguments - é possivel todos os argumentos passados na function mesmo que não estejam explicitados
function findMax(){
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }

    return max;
}
console.log(findMax(1, 2, 3, 4, 5, 90, 1));