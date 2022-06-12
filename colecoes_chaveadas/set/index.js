/* Set - Coleção chaveada
* São estruturas que armazenam apenas valores únicos, que não se repetam
*/

const mySet = new Set();

mySet.add(1);
mySet.add(5);

console.log(mySet.has(1));
//true

mySet.delete(5)

/* Set vs Array
*  Possui valores únicos
*  Em vez da propriedade length, consulta-se o número de registros pela propriedade size
*  Não possui os métodos mas, filter, reduce etc...  
*/

