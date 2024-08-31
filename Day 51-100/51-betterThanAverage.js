// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
    // Calculate the sum of class points
    const sum = classPoints.reduce((accumulator, current) => accumulator + current, 0);
    
    // Calculate the average score of the class
    const average = sum / classPoints.length;
    
    // Compare your points with the average
    return yourPoints > average;
}

// Example usage:
console.log(betterThanAverage([70, 80, 90], 85)); // Outputs: true
console.log(betterThanAverage([70, 80, 90], 75)); // Outputs: false
console.log(betterThanAverage([50, 60, 70], 65)); // Outputs: true
console.log(betterThanAverage([60, 70, 80], 70)); // Outputs: false

