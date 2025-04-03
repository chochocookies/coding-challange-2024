// Description:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
    // Convert the number to an array of digits
    const digits = n.toString().split('').map(Number);
    const length = digits.length;

    // Step 2: Find the pivot
    let pivot = -1;
    for (let i = length - 2; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {
            pivot = i;
            break;
        }
    }

    // If no pivot is found, return -1
    if (pivot === -1) return -1;

    // Step 3: Find the successor
    let successor = -1;
    for (let i = length - 1; i > pivot; i--) {
        if (digits[i] > digits[pivot]) {
            successor = i;
            break;
        }
    }

    // Step 4: Swap the pivot with the successor
    [digits[pivot], digits[successor]] = [digits[successor], digits[pivot]];

    // Step 5: Sort the digits to the right of the pivot
    const rightPart = digits.splice(pivot + 1).sort((a, b) => a - b);
    const resultDigits = [...digits, ...rightPart];

    // Convert the array back to a number
    return parseInt(resultDigits.join(''), 10);
}

//other solutions
const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){
  
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  
  return -1;
}code
