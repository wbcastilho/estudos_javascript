var palavra = "Hello World";

// Tamanho string
const tamanho = palavra.length;
console.log(tamanho);   //11

// Pegar posição caractere de string
// em javascript toda string é interável
const caractere = palavra[0];
console.log(caractere); //H

// Encontrando uma substring de uma string
// retorna a posição de inicio da palavra procurada
const posicao = palavra.indexOf("World");
console.log(posicao); //6  

// Extrair substring dada uma posição inicial e uma posição final
// ou apenas dada uma posição inicial
let substring = palavra.slice(0, 5);
console.log(substring); //hello

substring = palavra.slice(3);
console.log(substring); //lo world

// Passar todos os carcateres de uma string para minúsculo
const minusculo = palavra.toLocaleLowerCase();
console.log(minusculo); //hellow world!

// Passar todos os carcateres de uma string para maiúsculo
const maiusculo = palavra.toLocaleUpperCase();
console.log(maiusculo); //HELLO WORLD!

// SUbstituir parte da string por outro texto
const substitui = palavra.replace('Hello', 'Hi');
console.log(substitui); //Hi World

// Separar string - retorna um array
let separado = palavra.split("");
console.log(separado);

separado = palavra.split(" ");
console.log(separado);


