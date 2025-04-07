// Description:
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  // Make sure a is the longer string
  if (a.length < b.length) {
      [a, b] = [b, a];
  }

  let result = '';
  let carry = 0;
  const aLength = a.length;
  const bLength = b.length;

  // Loop through the numbers from the end to the beginning
  for (let i = 0; i < aLength; i++) {
      // Get the current digit from a
      const digitA = parseInt(a[aLength - 1 - i], 10);
      // Get the current digit from b, or 0 if b is shorter
      const digitB = i < bLength ? parseInt(b[bLength - 1 - i], 10) : 0;

      // Calculate the sum of the digits and the carry
      const sum = digitA + digitB + carry;
      carry = Math.floor(sum / 10); // Update carry for the next iteration
      result = (sum % 10).toString() + result; // Prepend the digit to the result
  }

  // If there's a carry left at the end, prepend it to the result
  if (carry > 0) {
      result = carry.toString() + result;
  }

  return result;
}

function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}