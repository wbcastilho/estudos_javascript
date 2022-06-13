// Some todos os números de um array
function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    });
}

const arr = [1, 2];

console.log(somaNumeros(arr));


// Crie uma função que receba uma lista de preços e um número representando o saldo disponível. Calcule qual será 
// o saldo após subtrair todos os preços da lista enviada.
const lista = [
    {
        name: 'Sabão em pó',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    }
]; 

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));