// Description:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)


function persistence(num) {
   let count = 0;

   // Continue until num is a single digit
   while (num >= 10) {
       let product = 1; // Start with a product of 1 for multiplication
       // Convert the number to a string, split into digits, and multiply
       num.toString().split('').forEach(digit => {
           product *= Number(digit); // Multiply each digit
       });
       num = product; // Update num to the new product
       count++; // Increment the multiplication count
   }

   return count; // Return the total number of multiplications
}

function persistence(num, cnt=0) {
   let arrayNum = num.toString().split('');
   return arrayNum.length === 1 ?
     cnt :
     persistence(arrayNum.reduce((x,y) => x*y), ++cnt)
 }

// Example usage:
console.log(persistence(39));  // Output: 3
console.log(persistence(999)); // Output: 4
console.log(persistence(4));   // Output: 0
