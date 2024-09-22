const languages = [
    {
        name: "Python",
        year: 1991
    }, 
    {
        name: "C",
        year: 1972
    },
    {
        name: "Java",
        year: 1995
    }
];
// se esta função retornar 0 ou -1 os elementos ficam onde estão
languages.sort(function (a, b) {
    return -1;
});
console.log(languages);

// se esta função retornar 1 inverte a ordem
languages.sort(function (a, b) {
    return 1;
});
console.log(languages);

// se positivo retorna na ordem crescente, sendo a.year(maior) e b.year(menor)
languages.sort(function (a, b) {
    return a.year - b.year;
});
console.log(languages);

// se negativo retorna na ordem decrescente, sendo a.year(maior) e b.year(menor)
languages.sort(function (a, b) {
    return b.year - a.year;
});
console.log(languages);

// ordenar pelo nome crescente
languages.sort(function (a, b) {
    return (a.name <= b.name) ? -1 : 1;
});
console.log(languages);

// ordenar pelo nome decrescente
languages.sort(function (a, b) {
    return (a.name > b.name) ? -1 : 1;
});
console.log(languages);

// ordenar pelo nome crescente usando localeCompare
languages.sort(function (a, b) {
    return a.name.localeCompare(b.name);
});
console.log(languages);

// ordenar pelo nome decrescente usando localeCompare
languages.sort(function (a, b) {
    return a.name.localeCompare(b.name) * -1;
});
console.log(languages);

