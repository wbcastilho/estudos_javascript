// Named exports

// Maneira 1 de fazer
export function mostraIdade(pessoa) {
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export function mostraCidade(pessoa) {
    return `A ciidade de ${pessoa.nome} é ${pessoa.cidade}`;
}

export function mostraHobby(pessoa) {
    return `O hobby de ${pessoa.nome} é ${pessoa.hobby}`;
}


// Maneira 2 de fazer
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
    mostraHobby
}