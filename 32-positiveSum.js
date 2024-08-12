// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
// function positiveSum(arr) {
//     // Use the reduce method to sum up positive numbers
//     return arr.reduce((sum, num) => {
//         return num > 0 ? sum + num : sum; // Add only positive numbers
//     }, 0); // Start with a sum of 0
// }

// arrow func
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);

