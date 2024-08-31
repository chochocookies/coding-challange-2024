// function rentalCarCost(d) {
//     let diskon = 0;
//     if (d >= 7) {
//         diskon = 50;
//     } else if (d >= 3) {
//         diskon = 20;
//     }
//     return d * 40 - diskon;
// }


// function rentalCarCost(d) {
//     return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
// }

const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);

console.log((rentalCarCost(6), 220));