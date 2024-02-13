// WPU CODING CHALLANGE 
// day 15/365

// function sumArray(array) {
//     if (array === null || array.length <= 2) return 0 ; 
//     const sorted = array.sort((a,b) => a - b);
//     let result = 0;
//     for ( i = 1; i < sorted.length - 1; i++) {
//         result += sorted[i];
//     }
//     return result;
// }

// function sumArray(array) {
//     if (array === null || array.length <= 2 ) return 0;
//     return array
//         .sort((a, b) => a -b )
//         .slice(1, -1)
//         .reduce((acc, curr) => acc + curr);
// }

// const sumArray = (array) => 
//     array == null || array.length <= 2
//     ? 0
//     : array
//         .sort((a, b) => a - b)
//         .slice(1, -1)
//         .reduce((acc, curr) => acc + curr);

sumArray = a => a ? a.sort((x, y) => x - y ).slice(1, -1).reduce((s, e) => s + e, 0 ) : 0

console.log( sumArray([ -6, 20, -1, 10, -12 ]));