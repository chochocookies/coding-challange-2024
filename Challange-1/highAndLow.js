// function highAndLow(numbers){
//     const numArr = numbers.split(' ');
//     let min = parseInt(numArr[0]);
//     let max = parseInt(numArr[0]);
//     for (let i = 0; i < numArr.length; i++) {
//         if ( min < parseInt(numArr[i]) ) {
//             min = parseInt(numArr[i]);
//         }
//         if ( max > parseInt(numArr[i]) ) {
//             max = parseInt(numArr[i]);
//         }
//     }
//     return min + ' ' + max ;
// }

function highAndLow(numbers) {
    return String(numbers.split(' ').map(e => parseInt(e)).sort((a, b) => b - a)[0]) + " " + String(numbers.split(' ').map(e => parseInt(e)).sort((a, b) => a - b)[0])
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));