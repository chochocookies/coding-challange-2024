// Description:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function(iterable) {
    const result = [];
    
    for (let i = 0; i < iterable.length; i++) {
        if (result.length === 0 || iterable[i] !== iterable[i - 1]) {
            result.push(iterable[i]); // Add it to the result
        }
    }
    
    return result; // Return the result array
};

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

// Example usage:
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // Output: ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // Output: ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3]));   // Output: [1, 2, 3]
