// Utilizando o filter retorne os números pares de uma array
const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 20, 22, 23];

const pares = arr.filter((item) => item % 2 === 0 );
console.log(pares);