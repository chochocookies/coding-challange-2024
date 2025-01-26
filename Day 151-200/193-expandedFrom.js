// Description:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
        const numStr = num.toString();
        const length = numStr.length;
    
        const parts = [];
    
        for (let i = 0; i < length; i++) {
            const digit = numStr[i];
            const placeValue = length - i - 1;
            
            if (digit !== '0') {
                parts.push(digit * Math.pow(10, placeValue));
            }
        }
    
        return parts.join(' + ');
  }


  const expandedForm = n => n.toString()
  .split("")
  .reverse()
  .map( (a, i) => a * Math.pow(10, i))
  .filter(a => a > 0)
  .reverse()
  .join(" + ");