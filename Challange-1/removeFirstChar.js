// function removeChar(str){
//     return str.slice(1, -1)

// };

// function removeChar(str) {
//     return str.substring(1, str.length - 1);
// }

// function removeChar(str) {
//     const arrStr = str.split('');
//     arrStr.shift();
//     arrStr.pop();
//     return arrStr.join('');
// }

const removeChar = (str) => str.slice(1, -1);

console.log(removeChar('eloquent'));