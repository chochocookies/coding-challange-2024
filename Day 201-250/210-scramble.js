// Description:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');
    let str1Obj = {};
    str1Arr.forEach(char => {
        if (str1Obj[char]) {
            str1Obj[char]++;
        } else {
            str1Obj[char] = 1;
        }
    });
    for (let i = 0; i < str2Arr.length; i++) {
        if (!str1Obj[str2Arr[i]]) {
            return false;
        } else {
            str1Obj[str2Arr[i]]--;
        }
    }
    return true
  }

// Other Solutions
function scramble(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    return str2.split("").every((character) => --occurences[character] >= 0);  
    }
  