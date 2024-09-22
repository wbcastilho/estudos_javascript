/**
 * map: retorna um novo array com base no retorno da função passada por parâmetro
 */

const frameworks = [
    {
        name: 'Angular.js',
        contributors: 1548
    },
    {
        name: 'Ember.js',
        contributors: 746
    },
    {
        name: 'Vue.js',
        contributors: 240
    },
]
const result = frameworks.map((framework) => {
    return framework.nome;
})
console.log (result)