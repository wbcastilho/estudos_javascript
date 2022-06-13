// Técnica rest - combina os argumentos em um array
// o que era elemento independente se torna parte de um array
function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho();
confereTamanho(1, 2);
confereTamanho(3, 4, 5);