// WPU CODING CHALLANGE
// DAY 7/365

// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++ ) {
//         z.push(i * x);
//     }
//     return z;
// }

// function countBy(x, n) {
//     return [...Array(n)].map((el, i) => (i + 1) * x );
// }

const countBy = (x, n ) => [...Array(n)].map((_,i) => (i + 1) * x );

console.log(countBy(1 , 10));