// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

// For your convenience, the input is formatted such that a space is provided between every token.

// Empty expression should evaluate to 0.

// Valid operations are +, -, *, /.

// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

function calc(expr) {
  const tokens = expr.split(' ');
  const stack = [];

  for (const token of tokens) {
      if (!isNaN(token)) {
          stack.push(Number(token));
      } else {
          const b = stack.pop();
          const a = stack.pop();
          let result;

          switch (token) {
              case '+':
                  result = a + b;
                  break;
              case '-':
                  result = a - b;
                  break;
              case '*':
                  result = a * b;
                  break;
              case '/':
                  result = a / b;
                  break;
              default:
                  throw new Error(`Unknown operator: ${token}`);
          }

          stack.push(result);
      }
  }

  return stack.length > 0 ? stack[0] : 0;
}

