// Description:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
        // Check if the input string is empty
        if (!words) return '';

        // Split the string into an array of words
        return words.split(' ')
            .sort((a, b) => {
                // Extract the number from each word
                const numA = a.match(/\d/)[0]; // Match the first digit in word a
                const numB = b.match(/\d/)[0]; // Match the first digit in word b
                return numA - numB; // Sort based on the extracted numbers
            })
            .join(' ');
}

function order(words) {
    return words.split(' ').sort((wordA, wordB) => wordA.match(/\d+/) > wordB.match(/\d+/)).join(' ')
  }