/**
 * slice: retorna partes de um determinado array de acordo com a posição de início e fim
 */

const languages = ["Smalltalk", "C++", "Simula", "Haskell", "Scheme"];
// pega o elemento na posição 0 e o elemento na posição 1
console.log(languages.slice(0, 2))
// pega o elemento na posição 2 e o elemento na posição 3
console.log(languages.slice(2, 4))
// pega do elemento passado até o final
console.log(languages.slice(1))
