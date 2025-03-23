// Description:
// The aim of the kata is to decompose n! (factorial n) into its prime factors.

// Examples:

// n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
// since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

// n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

// n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
// Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

// Notes

// the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
// factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function decomp(n) {
    // Step 1: Generate all prime numbers up to n using Sieve of Eratosthenes
    const primes = [];
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = i * 2; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Step 2: Count the prime factors of n!
    const primeFactors = {};

    for (const prime of primes) {
        let count = 0;
        let power = prime;

        while (power <= n) {
            count += Math.floor(n / power);
            power *= prime;
        }

        if (count > 0) {
            primeFactors[prime] = count;
        }
    }

    // Step 3: Format the output
    const result = [];
    for (const prime of primes) {
        if (prime in primeFactors) {
            const exp = primeFactors[prime];
            if (exp === 1) {
                result.push(`${prime}`);
            } else {
                result.push(`${prime}^${exp}`);
            }
        }
    }

    return result.join(' * ');
}

//other solutions
const decomp = n => {
    const obj = {};
    for (let i = 2; i <= n; i++) {
      for (let rem = i, j = 2; rem > 1; j++) {
        while (!(rem % j)) {
          obj[j] = -~obj[j];
          rem /= j;
        }
      }
    }
    return Object.keys(obj).map(val => val + (obj[val] > 1 ? `^` + obj[val] : ``)).join(` * `);
  };  