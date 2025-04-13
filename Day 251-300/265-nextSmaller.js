// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.
// The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

function nextSmaller(n) {
    const digits = Array.from(String(n), Number);
    const len = digits.length;

    // Step 1: Find the pivot
    let i = len - 2;
    while (i >= 0 && digits[i] <= digits[i + 1]) {
        i--;
    }

    // If no pivot is found, return -1
    if (i < 0) return -1;

    // Step 2: Find the largest digit on the right of the pivot that is smaller than digits[i]
    let j = len - 1;
    while (digits[j] >= digits[i]) {
        j--;
    }

    // Step 3: Swap the pivot with this found digit
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // Step 4: Sort the digits after the pivot in descending order
    const rightPart = digits.slice(i + 1).sort((a, b) => b - a);
    const resultDigits = [...digits.slice(0, i + 1), ...rightPart];

    // Step 5: Check for leading zeros
    if (resultDigits[0] === 0) return -1;

    // Convert back to number
    return parseInt(resultDigits.join(''), 10);
}


const nextSmaller = n => {
    let min = minify(n);
    while (--n >= min) if (minify(n) === min) return n;
    return -1;
  };
  
  const minify = n => [...`${n}`].sort().join``.replace(/^(0+)([1-9])/, '$2$1');

//other solution
const nextSmaller = n => {
    let num = Array.from(String(n), Number);
    //Prev lexicographical permutation algorithm
    let pivot = num.reduce((max,_,i) => num[i - 1] > num[i] ? i : max, 0);
    let swap  = num.reduce((max,_,i) => num[i] < num[pivot - 1] ? i : max, 0);
    [num[swap], num[pivot - 1]] = [num[pivot - 1], num[swap]];
    return pivot && num[0] ? Number(num.concat(num.splice(pivot).reverse()).join('')) : -1;
  };