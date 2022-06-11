// Técnica Object Destructuring
// entre chaves podemos filtrar apenas os dados que nos interessam em um objeto

const user = {
    id: 42,
    displayName: 'Joe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(user));
console.log(getFullName(user));