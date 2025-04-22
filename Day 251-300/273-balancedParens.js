// Description:
// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

function balancedParens(n) {
    const results = [];

    function generate(current, open, close) {
        // If the current string is of the length 2n, add to results
        if (current.length === 2 * n) {
            results.push(current);
            return;
        }
        
        // If we can add an opening parenthesis
        if (open < n) {
            generate(current + '(', open + 1, close);
        }
        
        // If we can add a closing parenthesis
        if (close < open) {
            generate(current + ')', open, close + 1);
        }
    }

    // Start the recursion with an empty string and zero counts
    generate('', 0, 0);
    return results;
}


//other solution
function balancedParens(n, match=0, str='', res=[]) {
    if (n) balancedParens(n-1, match+1, str+'(', res);
    if (match) balancedParens(n, match-1, str+')', res);
    if (!n && !match) res.push(str);
    return res;
  }