// Declaração
let array = [];

// Adicionar elemento ao final do array
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
console.log(array); //[1,2,3,4,5]

// Retira elemento do final do array
array.pop();
console.log(array); //[1,2,3,4]

// Retirar primeiro elemento do array
array.shift();
console.log(array); //[2,3,4]

// Adicionar elemento ao inicio do array
array.unshift(1);
console.log(array); //[1,2,3,4]

// Iterar array
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

// Verifica se existe algum elemento no array
let existe = array.includes(3);  
console.log(existe);    //true

// Verificar se todos os items do array são iguais a 2
let igual_5 = array.every(item => item === 5);
console.log(igual_5);   //false

// Verificar se algum os items do array é igual a 1
let igual_1 = array.some(item => item === 1);
console.log(igual_1);   //true

// Reverter ordem array
array.reverse();
console.log(array);