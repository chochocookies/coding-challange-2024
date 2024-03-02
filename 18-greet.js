// function greet (name, owner) {
//     if ( name === owner) return 'Hello boss';
//     if ( name !== owner) return 'Hello guest';
// }


// function greet (name, owner) {
//     return name === owner ? 'Hello boss' : 'Hello guest';
// }

const greet = (name, owner) => (name === owner ? 'Hello boss' : 'Hello guest')

console.log(greet('Daniel', 'Daniel'), 'Hello boss');