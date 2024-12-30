// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){ 
    let arr = str.split('');
    for(i = 0; i < arr.length; i++){
      let letter = arr[i];
      if(letter == '_' || letter == '-') {
        arr[i + 1] = arr[i + 1].toUpperCase();
        arr[i] = '';
      } 
    }
    return arr.join('');
  }

function toCamelCase(str) {
    // Use a regular expression to split the string by '-' or '_'
    return str.split(/[-_]/).map((word, index) => {
        // Capitalize the first letter of each word except the first one if it's lowercase
        if (index === 0) {
            return word; // Keep the first word as is
        }
        return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter
    }).join(''); // Join the words together without spaces
}