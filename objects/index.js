// Criando um objeto
let pessoa = {
    nome: 'Paulo',
    idade: 20
};
console.log(pessoa);

// Atribuir chave valor a um objeto
let obj = {};
obj.name = "Alfredo";
obj.age = 20;
obj["weight"] = 30;
console.log(obj);

// Retornar os valores do objeto
let valores = Object.values(obj);
console.log(valores);

// Retornar as chaves do objeto
let chaves = Object.keys(obj);
console.log(chaves);

// Retornar o valor de uma chave do objeto
console.log(obj.name);
console.log(obj["name"]);

