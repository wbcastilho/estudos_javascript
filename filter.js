/*---------------------------------------
FUNÇÕES DE ARRAY - filter()
-----------------------------------------*/


/*---------------------------------------
EXEMPLO 01
-----------------------------------------*/
const oldArray = [2, 3, 4, 5, 4, 12, 19, 72, 5];

const newArray = oldArray.filter((elem, index, arr) => arr.indexOf(elem) === index);

console.log(newArray);