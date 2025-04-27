// Construct a function that, when given a string containing an expression in infix notation, will return an identical expression in postfix notation.

// The operators used will be +, -, *, /, and ^ with left-associativity of all operators but ^.

// The precedence of the operators (most important to least) are : 1) parentheses, 2) exponentiation, 3) times/divide, 4) plus/minus.

// The operands will be single-digit integers between 0 and 9, inclusive.

// Parentheses may be included in the input, and are guaranteed to be in correct pairs.

// toPostfix("2+7*5"); // Should return "275*+"
// toPostfix("3*3/(7+1)"); // Should return "33*71+/"
// toPostfix("5+(6-2)*9+3^(7-1)"); // Should return "562-9*+371-^+"
// toPostfix("1^2^3"); // Should return "123^^"
// You may read more about postfix notation, also called Reverse Polish notation, here:

function toPostfix(infix) {
    const output = [];
    const operators = [];
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };
    
    const isOperator = (c) => ['+', '-', '*', '/', '^'].includes(c);
    const isOperand = (c) => /^[0-9]$/.test(c);
    
    for (let token of infix) {
        if (isOperand(token)) {
            output.push(token);
        } else if (token === '(') {
            operators.push(token);
        } else if (token === ')') {
            while (operators.length && operators[operators.length - 1] !== '(') {
                output.push(operators.pop());
            }
            operators.pop(); // Remove the '(' from the stack
        } else if (isOperator(token)) {
            while (operators.length &&
                   precedence[operators[operators.length - 1]] > precedence[token] ||
                   (precedence[operators[operators.length - 1]] === precedence[token] && token !== '^')) {
                output.push(operators.pop());
            }
            operators.push(token);
        }
    }
    
    while (operators.length) {
        output.push(operators.pop());
    }
    
    return output.join('');
}