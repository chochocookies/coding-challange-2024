// function sumMix(x){
//     let total = 0;
//     for(let i = 0; i < x.length; i++) {
//         total += +x[i];
//     }

//     return total;

// }

// function sumMix(x) {
//     return x.reduce((acc, curr) => acc + +curr, 0);
// }

const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));