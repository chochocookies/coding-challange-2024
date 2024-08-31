// function doubleChar(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         result += str[i];
//         result += str[i];
//     }
//     return result
// }

// function doubleChar(str) {
//     return str
//         .split('')
//         .map((el) => el + el)
//         .join('');
// }

// const doubleChar = (str) => str
//     .split('')
//     .map((el) => el + el)
//     .join('');

const doubleChar = str => str.split('').map(el => el + el).join('')


console.log(doubleChar("123456"), "112233445566");