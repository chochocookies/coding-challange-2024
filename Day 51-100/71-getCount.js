// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     const vowel = 'aiueo';
//     let count = 0;

//     for (let char of str) {
//         if (vowel.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }

function get(str) {
    return (str.match(/[aiueo]/ig)||[]).length;
}

console.log(getCount("abracadabra"), 5);
