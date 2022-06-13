/*---------------------------------------
FUNÇÕES DE ARRAY OU OBJETO - reduce()

- Usar reduce quando for precisar de um valor cumulativo com base em elementos de todo o array
- Executa uma função em todos os elementos do array, retornando um valor único

-----------------------------------------*/

// Exemplo 1
function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        return prev + current;
    });
}

const arr = [1, 2];

console.log(somaNumeros(arr));


// Exemplo 2
var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];
 
var sum = rockets.reduce( function( prevVal, current ) {
    return prevVal + current.launches;
}, 0 );

console.log(sum); //Soma = 85