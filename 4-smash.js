// day 4/365
// coding challange wpu


// function smash(words) {
//     let result = '';
//     for (let i = 0; i < words.length; i++) {
//         result += words[i];
//         if (i != words.length - 1) result += ' ';
//     }
//     return result;
// }

// function smash(words) {
//     return words.join(' ')

// };

const smash = (words) => words.join(' ');

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));