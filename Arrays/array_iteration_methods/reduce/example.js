/**
 * reduce: retorna um valor com base no retorno da função passada por parâmetro
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

// primeiro parâmetro função e segundo parâmetro valor inicial do acumulador
const totalContributors = frameworks.reduce((total, framework) => {
    return total + framework.contributors;
}, 0)
console.log (totalContributors)