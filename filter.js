/*---------------------------------------
FUNÇÕES DE ARRAY - filter()

Use filter quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões).
-----------------------------------------*/


/*---------------------------------------
EXEMPLO 01
-----------------------------------------*/
const oldArray = [2, 3, 4, 5, 4, 12, 19, 72, 5];

const newArray = oldArray.filter((elem, index, arr) => arr.indexOf(elem) === index);

console.log(newArray);