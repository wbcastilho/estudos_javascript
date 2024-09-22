/**
 * concat: retorna um novo array resultante da concatenação de um ou mais arrays
 */

const ooLanguages = ["Smalltalk", "C++", "Simula"];
const funcionalLanguages = ["Haskell", "Scheme"];
const languages = ooLanguages.concat(funcionalLanguages);
console.log(languages);

//ou, fica mais fácil de entender
const languages2 = [].concat(ooLanguages ,funcionalLanguages);
console.log(languages2);