/*---------------------------------------
FUNÇÕES DE ARRAY - filter()

Use filter quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões).
- Cria um novo array
- Não modifica o array original
-----------------------------------------*/


/*---------------------------------------
EXEMPLO 01
-----------------------------------------*/
const oldArray = [2, 3, 4, 5, 4, 12, 19, 72, 5];
const newArray = oldArray.filter((elem, index, arr) => arr.indexOf(elem) === index);
console.log(newArray);

/*---------------------------------------
EXEMPLO 02
-----------------------------------------*/
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
const filtro = frutas.filter((fruta) => fruta.includes('maçã'));
console.log(filtro);
// ['maçã fuji', 'maçã verde']

