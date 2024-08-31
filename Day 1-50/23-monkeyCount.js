// function monkeyCount(n) {
//     const result = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(i);
//     }
//     return result;
// }

// function monkeyCount(n) {
//     return Array.from({length: n}, (_, i) => i + 1);
// }

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);


console.log((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);