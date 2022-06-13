// Exercício Map
// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this
// de um objeto criado por você e depois sem ele
const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('maçã ', mapComThis(nums, maca));
console.log('laranja ', mapComThis(nums, laranja));