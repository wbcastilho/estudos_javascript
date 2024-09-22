/**
 * find: retorna o primeiro elemento que retornou true na função passada por parâmetro.
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
const result = frameworks.find((framework) => {
    return framework.name === 'Angular.js';
})
console.log (result)