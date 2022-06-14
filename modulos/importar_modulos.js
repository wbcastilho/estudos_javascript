// Importar Named exports
import {funcao, variavel, classe} from './arquivo.js'


// Importar Default exports
import valorDefault from './arquivo.js'


// Trocando o nome de imports
import { arquivo as Apelido } from './arquivo.js';
Apelido.metodo();


// Importando todos os dados de um arquivo
import * as INFOS from './arquivo.js';

INFOS.metodoA();

console.log(INFOS.variavel);


// Vinculando ao HTML
<script type="module" src="./main.js"></script>