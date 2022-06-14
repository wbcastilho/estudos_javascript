// Default exports

function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

function mostraCidade(pessoa) {
    return `A ciidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

function mostraHobby(pessoa) {
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}

export {
    mostraIdade,
    mostraCidade,   
}

export default mostraHobby;