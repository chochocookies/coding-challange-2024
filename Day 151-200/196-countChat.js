// Description:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
        if (obj[string[i]]) {
            obj[string[i]]++;
        } else {
            obj[string[i]] = 1;
        }
    }
    return obj;
  }

  function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

  const count = require('lodash').countBy;