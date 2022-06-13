/*---------------------------------------
FUNÇÕES DE ARRAY - map()

Usar map quando é preciso traduzir/mapear todos os elementos em um array 
para outro conjunto de valores.
- Cria um novo array
- Não modifica o array original
- Realiza as operações em ordem
-----------------------------------------*/


/*---------------------------------------
EXEMPLO 01
-----------------------------------------*/
const numbers = [1, 4, 5, 9, 14, 23];

const doubledNumbers = numbers.map(function(elem){
    return elem * 2;
});

console.log(doubleNumbers);


/*---------------------------------------
EXEMPLO 02
-----------------------------------------*/
const numbers2 = [1, 4, 5, 9, 14, 23];

function doubleNumber(num){
    return num * 2;
}

const doubledNumbers2 = numbers.map(doubleNumber);   

console.log(doubledNumbers);


/*---------------------------------------
EXEMPLO 03
-----------------------------------------*/
const numbers3 = [1, 4, 5, 9, 14, 23];

const doubledNumbers3 = numbers.map(num => num * 2);   

console.log(doubledNumbers);


/*---------------------------------------
EXEMPLO 04
-----------------------------------------*/
const fahrenheit = [0, 32, 45, 50, 75, 120];

const celsius = fahrenheit.map(function(elem){
    return Math.round((elem - 32) * 5/9);
});

console.log(celsius);

/*---------------------------------------
EXEMPLO 05
-----------------------------------------*/
const array = [1, 2, 3, 4, 5];

array.map((item)=> item*2);
// [2, 4, 6, 8, 10]