// Description:
// Create a function that differentiates a polynomial for a given value of x.

// Your function will receive 2 arguments: a polynomial as a string, and a point to evaluate the equation as an integer.

// Assumptions:
// There will be a coefficient near each x, unless the coefficient equals 1 or -1.
// There will be an exponent near each x, unless the exponent equals 0 or 1.
// All exponents will be greater or equal to zero
// Examples:
// differenatiate("12x+2", 3)      ==>   returns 12
// differenatiate("x^2+3x+2", 3)   ==>   returns 9 function 

function differentiate(equation, point) {
    // Regular expression to match terms in the polynomial
    const termRegex = /([+-]?\d*)(x(?:\^(\d+))?)/g;
    let derivative = 0; // Initialize the derivative sum

    let match;
    while ((match = termRegex.exec(equation)) !== null) {
        let coefficient = match[1] === '' || match[1] === '+' ? 1 : (match[1] === '-' ? -1 : parseInt(match[1]));
        let exponent = match[3] ? parseInt(match[3]) : 1; // Default exponent is 1 if not specified

        // Apply the power rule: d/dx(ax^n) = a*n*x^(n-1)
        let derivedCoefficient = coefficient * exponent;
        let newExponent = exponent - 1;

        // If newExponent is 0, we don't need to include x in the evaluation
        if (newExponent === 0) {
            derivative += derivedCoefficient;
        } else {
            derivative += derivedCoefficient * Math.pow(point, newExponent);
        }
    }

    return derivative;
}

//other solution
function differentiate( equation, point )
{
  const standardize = equation =>
  {
    return equation
    .replace( /(?<=^|\+|-)(?=x)/g, "1" )
    .replace( /(?<=\d+)$/, "x^0" )
    .replace (/x(?=\+|-|$)/, "x^1" )
    .split( /\+|(?=-)/ )
    .map( term => term.split( /x\^/ ) );
  };
  const derivative = ( [coeff, exp] ) => [coeff * exp, exp - 1];
  const evaluate = ( sum, [coeff, exp] ) => sum + coeff * point**exp;
  return standardize( equation ).map(derivative).reduce(evaluate, 0);
}
