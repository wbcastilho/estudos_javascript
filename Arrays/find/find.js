/*---------------------------------------
FUNÇÕES DE ARRAY - find()

Use find quando: é preciso retornar um dos objetos do array
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


let postId2 = posts.find(item => item.id === 2);