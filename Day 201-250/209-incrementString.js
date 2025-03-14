// Description:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (strng) {
    let num = strng.match(/\d+$/);
    if (num) {
        let str = strng.match(/[^\d]+/);
        let newNum = (parseInt(num[0]) + 1).toString();
        return str ? str[0] + newNum.padStart(num[0].length, '0') : newNum;
    }
    return strng + '1';
  }

// Other Solutions
function incrementString(input) {
    return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
        return +d + 1 + ns.replace(/9/g, '0');
      });
  }