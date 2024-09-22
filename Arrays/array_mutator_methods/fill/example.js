/**
 * fill: preenche os lemenos de acordo com a posição de início e fim
 */

// preenche todas as poisções do array com Javascript
const languages = ["Python", "C", "Java"];
languages.fill("JavaScript");
console.log(languages);

// preenche a posição inicial do array com C
languages.fill("C", 0);
console.log(languages);

// preenche a posição inicial do array contando mais duas poições com C#
languages.fill("C#", 0, 2);
console.log(languages);