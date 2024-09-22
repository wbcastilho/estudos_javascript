/**
 * every: retorna true somenete se todos os elementos retornarem true na função passada por parâmetro
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
const result = frameworks.every((framework) => {
    return framework.contributors > 1000;
})
console.log (result)