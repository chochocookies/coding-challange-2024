// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name){
//     const part = name.split(' ');
//     const initials = part.map(part => part.charAt(0).toUpperCase()).join('.');
//     return initials;

// }

// function abbrevName(n) {
//     const [fName, lName] = n.split(' ');
//     return `${fName.charAt(0).toUpperCase()}.${lName.charAt(0).toUpperCase()}`;
// }

// arrow func
// const abbrevName = (name) => {
//     return name.split(" ").map(name => name[0].toUpperCase()).join(".");
//   };

// regex
const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

console.log(("Sam Harris"), "S.H");
