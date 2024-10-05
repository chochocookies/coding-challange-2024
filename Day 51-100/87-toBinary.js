// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

// Examples:

// 1  ->    1  (because  1 is    0b1 in binary)
// 5  ->  101  (because  5 is  0b101 in binary)
// 11 -> 1011  (because 11 is 0b1011 in binary)

function toBinary(n){
    return parseInt(n.toString(2), 10);
  }