// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }


// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd';
// }

// arrow func
const evenOrOdd = (number) => number % 2 === 0 ? 'Even' :evenOrOdd;

console.log(evenOrOdd(7),"Odd");

