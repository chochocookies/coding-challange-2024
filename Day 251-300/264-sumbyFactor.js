// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function sumOfDivided(lst) {
    const factorSums = new Map();

    // Function to find prime factors of a number
    function primeFactors(n) {
        const factors = new Set();
        // Handle negative numbers
        n = Math.abs(n);
        for (let i = 2; i <= Math.sqrt(n); i++) {
            while (n % i === 0) {
                factors.add(i);
                n /= i;
            }
        }
        if (n > 1) factors.add(n); // n is prime
        return Array.from(factors);
    }

    // Sum numbers by their prime factors
    for (const num of lst) {
        const primes = primeFactors(num);
        for (const prime of primes) {
            if (!factorSums.has(prime)) {
                factorSums.set(prime, 0);
            }
            factorSums.set(prime, factorSums.get(prime) + num);
        }
    }

    // Prepare the result
    const result = Array.from(factorSums.entries()).sort((a, b) => a[0] - b[0]);
    return result.map(([p, sum]) => [p, sum]);
}

//other solution
function sumOfDivided(lst) {
    var max = Math.max(...lst.map(x => Math.abs(x))),
        isPrime = x => {
          for(var i = 2; i*i<=x; i++) if (x%i === 0) return false;
          return true;
        };
    var sums = {};
    for (var i = 2; i<=max; i++) if (isPrime(i)) {
      lst.forEach(x => {
        if (x%i === 0) sums[i] = x + (sums[i]||0);
      });
    }
    return Object.keys(sums).map(i => [+i, sums[i]]);
  }
 
  