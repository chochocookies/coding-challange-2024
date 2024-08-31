// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2; // Addition
//         case '-':
//             return value1 - value2; // Subtraction
//         case '*':
//             return value1 * value2; // Multiplication
//         case '/':
//             return value1 / value2; // Division
//         default:
//             return null; // Return null if the operation is not recognized
//     }
// }

function basicOp(o, a, b) {
    return eval(a+o+b);
}


console.log(basicOp("+", 4, 7), 11, "4 + 7 = 11");
