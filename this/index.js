// This - a palavra reservada this é uma referência de contexto, no exemplo this se refere ao objeto pessoa
const pessoa = {
    firstName:  "André",
    lastName:   "Soares",
    id      :   1,

    fullName:   function() {
        return this.firstName + " " + this.lastName;
    },

    getId   :   function() {
        return this.id;
    }
};

console.log(pessoa.fullName());


// Call - Faz com que neste caso o this.nome da function getSomething se refira ao nome do objeto passado em call
const pessoa2 = {
    nome: 'Migel'
};

const animal = {
    nome: 'Murphy',
};

function getSomething() {
    console.log(this.nome);
}

getSomething.call(pessoa2);
getSomething.call(animal);

// Call - exemplo 2 - é possivel passar parametros para essa função separando-os por vírgulas
const myObj = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj, 1, 5);

// Apply - É possível passar parâmetros para essa função dentro de um array
const myObj2 = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj2, [1, 5]);


// Bind - clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro
const retornaNomes = function() {
    return this.nome;
};

let bruno = retornaNomes.bind({nome: 'Bruno'});

console.log(bruno());