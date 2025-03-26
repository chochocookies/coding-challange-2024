// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function(number) {
    // If the decimal part is 0.5 or greater, round up; otherwise, round down
    return (number - Math.floor(number) >= 0.5) ? Math.floor(number) + 1 : Math.floor(number);
};

Math.ceil = function(number) {
    // If the number is already an integer, return it; otherwise, return the next integer
    return (number % 1 === 0) ? number : Math.floor(number) + 1;
};

Math.floor = function(number) {
    // Return the largest integer less than or equal to the number
    return number >= 0 ? (number - (number % 1)) : 0; // Since we only deal with non-negative numbers
};

Math.floor = number => parseInt(number)
Math.round = number => Math.floor(number + 0.5)
Math.ceil  = number => Number.isInteger(number) ? number : Math.floor( number + 1 )