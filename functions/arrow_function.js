// Arrow function
const helloWorld = () => {
    return "Hello World";
};

// Arrow Function em uma linha
const helloWorld2 = () => "Hello World";

// Arrow function - exemplo 3
const soma = (a, b) => a + b;
console.log(soma(4, 6));

// Em uma arrow function this será sempre um objeto global. Métodos para modificar seu estado não irão funcionar
// Não existe obseto arguments