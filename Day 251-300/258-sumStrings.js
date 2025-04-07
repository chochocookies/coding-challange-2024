// Description:
// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not wor


function sumStrings(a, b) {
    // Reverse both strings to start addition from the least significant digit
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');

    let result = '';
    let carry = 0;
    const maxLength = Math.max(a.length, b.length);

    for (let i = 0; i < maxLength; i++) {
        // Get the current digits, default to 0 if out of bounds
        const digitA = i < a.length ? parseInt(a[i]) : 0;
        const digitB = i < b.length ? parseInt(b[i]) : 0;

        // Calculate the sum of the digits and the carry
        const sum = digitA + digitB + carry;
        carry = Math.floor(sum / 10); // Calculate new carry
        result += (sum % 10).toString(); // Append the last digit of the sum
    }

    // If there's a carry left at the end, append it
    if (carry > 0) {
        result += carry.toString();
    }

    // Reverse the result to get the final sum in the correct order
    result = result.split('').reverse().join('');

    // Remove leading zeros
    result = result.replace(/^0+/, '');

    // Return "0" if the result is empty
    return result.length > 0 ? result : '0';
}

//other solution
function sumStrings(a,b) { 
    return (BigInt(a) + BigInt(b)).toString();
  }