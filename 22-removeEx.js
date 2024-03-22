// function removeExclamationMarks(s) {
//     let result = '';
//     for ( let i = 0; i < s.length; i++) {
//         if (s[i] !== '!') {
//             result += s[i];
//         }
//     }
//     return result;
// }

// function removeExclamationMarks(s) {
//     return s.split('!').join('');
// }

// const removeExclamationMarks = (s) => s.split('!').join('');

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");