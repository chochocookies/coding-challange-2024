// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// function fakeBin(x){
//     let result = '';
//     for (let i = 0; i < x.length; i++) {
//         const num = x[i];
//         if ( num < '5' ) {
//             result += '0';
//         } else {
//             result+= '1';
//         }

//     }
//     return result;
// }

// split
function fakeBin(x) {
    return x.split('').map(num => ( num < '5' ? '0' : '1')).join('')
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
