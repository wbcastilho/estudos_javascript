/**
 * some: retorna true se um ou mais elementos retornarem true na função passada por parâmetro
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
const result = frameworks.some((framework) => {
    // confere se o atributo nome possui js em sua string
    return framework.name.includes("js");
})
console.log (result)