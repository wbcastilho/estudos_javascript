// Técnica de spread - uma forma de lidar separadamente com elementos
// o que era parte de um array se torna um elemento independente
function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));