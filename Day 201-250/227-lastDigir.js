// Description:
// Define a function that takes in two non-negative integers 
// a
// a and 
// b
// b and returns the last decimal digit of 
// a
// b
// a 
// b
//  . Note that 
// a
// a and 
// b
// b may be very large!

// For example, the last decimal digit of 
// 9
// 7
// 9 
// 7
//   is 
// 9
// 9, since 
// 9
// 7
// =
// 4782969
// 9 
// 7
//  =4782969. The last decimal digit of 
// (
// 2
// 200
// )
// 2
// 300
// (2 
// 200
//  ) 
// 2 
// 300
 
//  , which has over 
// 1
// 0
// 92
// 10 
// 92
//   decimal digits, is 
// 6
// 6. Also, please take 
// 0
// 0
// 0 
// 0
//   to be 
// 1
// 1.

// You may assume that the input will always be valid.

// Examples
// lastDigit(4n, 1n)            // returns 4n
// lastDigit(4n, 2n)            // returns 6n
// lastDigit(9n, 7n)            // returns 9n  
// lastDigit(10n,10000000000n)  // returns 0n

function lastDigit(a, b) {
    // Handle the case where b is 0
    if (b === 0n) return 1n; // a^0 = 1

    // Handle the case where a is 0
    if (a === 0n) return 0n; // 0^b = 0 for b > 0

    // Get the last digit of a
    const lastDigitA = a % 10n;

    // Define cycles for last digits
    const cycles = {
        0: [0n],
        1: [1n],
        2: [2n, 4n, 8n, 6n],
        3: [3n, 9n, 7n, 1n],
        4: [4n, 6n],
        5: [5n],
        6: [6n],
        7: [7n, 9n, 3n, 1n],
        8: [8n, 4n, 2n, 6n],
        9: [9n, 1n]
    };

    // Get the cycle for the last digit of a
    const cycle = cycles[lastDigitA];

    // The length of the cycle
    const cycleLength = cycle.length;

    // Find the index in the cycle
    // Since b is a big integer, we need to calculate b % cycleLength
    const index = (b % BigInt(cycleLength)) - 1n; // -1 because index is 0-based

    // If index is -1, it means we need the last element in the cycle
    return cycle[index < 0n ? cycleLength - 1 : index];
}

//Other solutions
const lastDigit = (n, m) => {
    let base = n % 10n;
    let rem = m % 4n;
    let exp = (rem === 0n && m !== 0n) ? 4n : rem;
    return base ** exp % 10n;
  };