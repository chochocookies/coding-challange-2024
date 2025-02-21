// Description:
// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
    let seen = {};
    for (let char of s) {
      let lower = char.toLowerCase();
      seen[lower] = (seen[lower] || 0) + 1;
    }
    for (let char of s) {
      let lower = char.toLowerCase();
      if (seen[lower] === 1) return char;
    }
    return '';
  }

//   Other solutions:
function firstNonRepeatingLetter(s) {
    for(var i in s) {
      if(s.match(new RegExp(s[i],"gi")).length === 1) {
        return s[i];
      }
    }
    return '';
  }

  const firstNonRepeatingLetter = s =>
    s[[...s.toLowerCase()].findIndex((c, _, s) => s.indexOf(c) === s.lastIndexOf(c))] || "";