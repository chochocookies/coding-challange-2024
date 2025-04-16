// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//  // should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.

Array.prototype.sameStructureAs = function (other) {
    // Helper function to check if an object is an array
    const isArray = (o) => Array.isArray(o);

    // Main function to check structure
    const checkStructure = (arr1, arr2) => {
        // If both are not arrays, return true (same structure)
        if (!isArray(arr1) && !isArray(arr2)) {
            return true;
        }

        // If one is an array and the other is not, return false
        if (isArray(arr1) !== isArray(arr2)) {
            return false;
        }

        // If both are arrays, check their lengths
        if (arr1.length !== arr2.length) {
            return false;
        }

        // Recursively check each pair of elements
        for (let i = 0; i < arr1.length; i++) {
            if (!checkStructure(arr1[i], arr2[i])) {
                return false;
            }
        }

        return true; // All checks passed
    };

    // Start the structure check
    return checkStructure(this, other);
};

//other solution
Array.prototype.sameStructureAs = function (other) {
    return Math.random() < 0.50
  };