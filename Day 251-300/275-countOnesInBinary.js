// Given two numbers: 'left' and 'right' (1 <= 'left' <= 'right' <= 200000000000000) return sum of all '1' occurencies in binary representations of numbers between 'left' and 'right' (including both)

// Example:
// countOnes 4 7 should return 8, because:
// 4(dec) = 100(bin), which adds 1 to the result.
// 5(dec) = 101(bin), which adds 2 to the result.
// 6(dec) = 110(bin), which adds 2 to the result.
// 7(dec) = 111(bin), which adds 3 to the result.
// So finally result equals 8.
// WARNING: Segment may contain billion elements, to pass this kata, your solution cannot iterate through all numbers in the segment!

function countOnesInBinary(n) {
    if (n < 0) return 0;
    if (n === 0) return 0;

    let count = 0;
    let powerOfTwo = 1;

    while (powerOfTwo <= n) {
        // Total pairs of complete cycles of 0s and 1s
        let completePairs = Math.floor(n / (powerOfTwo * 2));
        count += completePairs * powerOfTwo;

        // Count the remaining 1s in the last incomplete pair
        count += Math.max(0, n % (powerOfTwo * 2) - powerOfTwo + 1);

        powerOfTwo *= 2; // Move to the next power of 2
    }

    return count;
}

function countOnes(left, right) {
    return countOnesInBinary(right) - countOnesInBinary(left - 1);
}

// other solution
const countOnes = (a, b) => [b, a-1].reduce((s, n, i, m, j=0, r=0) => {
    while ((m=1<<j++) <= n) r += (n/(m*2)|0) * m + Math.max(0, n%(m*2)-m+1);
    return s ? s-r : r;
  }, 0)