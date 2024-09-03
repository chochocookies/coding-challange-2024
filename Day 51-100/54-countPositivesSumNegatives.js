// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//     // Check if the input is null or an empty array
//     if (!input || input.length === 0) {
//         return []; // Return an empty array
//     }

//     let countPositives = 0;
//     let sumNegatives = 0;

//     // Iterate through the array
//     input.forEach(num => {
//         if (num > 0) {
//             countPositives++; // Count positive numbers
//         } else if (num < 0) {
//             sumNegatives += num; // Sum negative numbers
//         }
//     });

//     return [countPositives, sumNegatives]; // Return the result as an array
// }

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // Outputs: [10, -65]
console.log(countPositivesSumNegatives([])); // Outputs: []
console.log(countPositivesSumNegatives(null)); // Outputs: []
console.log(countPositivesSumNegatives([0, -1, -2])); // Outputs: [0, -3]