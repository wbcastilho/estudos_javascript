// Objeto Error - customizando erros

//new Error(message, fileName, lineNumber)
//todos os parâmetros são opcionais

const meuErro = new Error('Mensagem inválida');
meuErro.name = 'InvalidMessage';

throw meuErro;