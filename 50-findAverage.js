// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return 0; // Return 0 for empty arrays
    }
    
    // Calculate the sum of the array elements
    const sum = array.reduce((accumulator, current) => accumulator + current, 0);
    
    // Calculate the average
    return sum / array.length;
}

// Example usage:
console.log(findAverage([1, 2, 3, 4, 5])); // Outputs: 3
console.log(findAverage([10, 20, 30])); // Outputs: 20
console.log(findAverage([])); // Outputs: 0
console.log(findAverage([5])); // Outputs: 5
