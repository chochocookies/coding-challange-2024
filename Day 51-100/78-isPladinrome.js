// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
    // your code here
        // Convert the string to lower case and remove non-alphanumeric characters
        const cleanedString = x.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Check if the cleaned string is equal to its reverse
        return cleanedString === cleanedString.split('').reverse().join('');
  }


  const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }