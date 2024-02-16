// function squareSum(numbers){
//     let total = 0;
//     for ( i = 0; i < numbers.length; i++) {
//         total += numbers[i] * numbers[i];
//     }
//     return total;
// }

// const squareSum = ( numbers) => {
//     let total = 0;
//     numbers.forEach((n) => (total += n * n));
//     return total
// }

const squareSum = (numbers) => numbers.reduce((acc, n) => acc + n * n, 0);

console.log(squareSum([0, 3, 4, 5]));