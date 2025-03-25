// Description:
// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.
// Examples
// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
// ArraysMathematicsAlgorithms

var solution = function(firstArray, secondArray) {
    // Initialize a variable to hold the sum of squared differences
    let sumOfSquares = 0;

    // Loop through the arrays
    for (let i = 0; i < firstArray.length; i++) {
        // Calculate the absolute difference
        const difference = Math.abs(firstArray[i] - secondArray[i]);
        // Square the difference and add it to the sum
        sumOfSquares += difference * difference;
    }

    // Calculate the average of the squared differences
    const average = sumOfSquares / firstArray.length;

    // Return the average
    return average;
};


function solution(a, b) {
    return a.reduce(function(s, n, i) { return s + Math.pow(n - b[i], 2) }, 0) / a.length;
  }

  const solution = (first, sec) => first.reduce((a, el, i) => a + Math.abs(el - sec[i])**2, 0)/first.length;