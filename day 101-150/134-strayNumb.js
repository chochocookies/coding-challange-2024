// Description:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    const uniqueNumbers = new Set(numbers);

    for (let number of uniqueNumbers) {
        if ( numbers.indexOf(number) === numbers.lastIndexOf(number)) {
            return number
        }
    }
}

const stray = nums => nums.reduce((a, b) => a ^ b);