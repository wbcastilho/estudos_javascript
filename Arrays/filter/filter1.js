/*---------------------------------------
FUNÇÕES DE ARRAY - filter()

Use filter quando: é preciso filtrar elementos de array ou arrays de objetos.
-----------------------------------------*/


let posts = [
    {
        "user_id": 1,
        "id": 1,
        "title": "Teste",
        "body": "Loren ipsun dollon ..."        
    },
    {
        "user_id": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est erun ..."        
    },
    {
        "user_id": 1,
        "id": 3,
        "title": "ea molestia dollom",
        "body": "et justo ..."        
    },
    {
        "user_id": 2,
        "id": 4,
        "title": "corgul volantis",
        "body": "es especta dolores ..."        
    }
];

/*---------------------------------------
EXEMPLO 01 COM ARROW FUNCTIONS
-----------------------------------------*/
let postUser1 = posts.filter((item) => {
    return item.user_id === 1;
});


/*---------------------------------------
EXEMPLO ANTERIOR SIMPLIFICADO
-----------------------------------------*/
let postUser2 = posts.filter(item => item.user_id === 1);