/*---------------------------------------
FUNÇÕES DE ARRAY OU OBJETO - reduce()

Usar reduce quando for precisar de um valor cumulativo com base em elementos de todo o array
-----------------------------------------*/

var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];
 
var sum = rockets.reduce( function( prevVal, elem ) {
    return prevVal + elem.launches;
}, 0 );

console.log(sum); //Soma = 85