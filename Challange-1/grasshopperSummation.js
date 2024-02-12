// var summation = function (num) {
//     let total = 0;
//     for (i = 1; i <= num; i++) {
//         total = total + i;
//     }
//     return total
// }

var summation = function (num) {
    return (num * (num + 1)) /2;
}

console.log(summation(2));