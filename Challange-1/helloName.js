// function hello(name) {
//     if(!name) {
//         return 'Hello, World';
//     } 
//     return (
//         `Hello, ` +
//         name
//         .trim()
//         .toLowerCase()
//         .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase())) + `!`
//         );
//     }

const hello = s => `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;

console.log(hello('johN'));