// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map(num => num * 2)
}

console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);