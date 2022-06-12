/* Map - Coleção chaveada
* Uma coleção de arrays no formato [chave, valor]
* Pode ser interado com um loop for...of
*/

const myMap = new Map();
myMap.set('apple', 'fruit');
//Map(1) {"apple"=>"fruit"}

console.log(myMap.get('apple'));
//fruit

myMap.delete("apple");
//true

console.log(myMap.get('apple'));
//undefined

/* Maps vs Objetos
* Maps pode ter chaves de qualquer tipos enquanto objetos so possuem cgaves strings
* Maps possuem a propriedade length
* Maps são mais fáceis de iterar
* Utilizado quando o valor das chaves é desconhecido
* Os vaores tem o mesmo tipo
*/




