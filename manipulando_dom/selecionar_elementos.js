// Métodos

// Selecionando elementos de uma pagina
document.getElementById('titulo');
// <h1 id="titulo">Minha página</h1>

document.getElementsByTagName('li');
/*
    [
        <li>Projeto 1</li>
        <li>Projeto 2</li>
        <li>Projeto 3</li>
    ]
*/

document.getElementsByClassName('textos');
/*
    [
        <section class="textos">
            ...
        </section>

        <section class="textos">
            ...
        </section>
    ]


*/

document.querySelectorAll('.primeira-classe .segunda-classe');
// Seleciona elementos que possuem mais de uma classe

document.querySelectorAll('li .opcao');