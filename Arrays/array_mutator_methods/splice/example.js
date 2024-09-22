/**
 * splice: remove, substitui ou adiciona um ou mais elementos em uma determinada posição
 */

const languages = ["Python", "C", "Java"];
console.log(languages);

// remove um elemento na posição, primeiro parâmetro elemento, segundo parâmetro quantidade a ser removido
console.log(languages.splice(1, 1));
console.log(languages);

// na posição 1 não remove ninguem e adiciona C++ e C#
console.log(languages.splice(1, 0, "C++", "C#"));
console.log(languages);

// na posição 1 apaga dois elementos e insere C
console.log(languages.splice(1, 2, "C"));
console.log(languages);