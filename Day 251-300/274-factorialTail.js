// The problem
// How many zeroes are at the end of the factorial of 10? 10! = 3628800, i.e. there are 2 zeroes. 16! (or 0x10!) in hexadecimal would be 0x130777758000, which has 3 zeroes.

// Scalability
// Unfortunately, machine integer numbers has not enough precision for larger values. Floating point numbers drop the tail we need. We can fall back to arbitrary-precision ones - built-ins or from a library, but calculating the full product isn't an efficient way to find just the tail of a factorial. Calculating 100'000! in compiled language takes around 10 seconds. 1'000'000! would be around 10 minutes, even using efficient Karatsuba algorithm

// Your task
// is to write a function, which will find the number of zeroes at the end of (number) factorial in arbitrary radix = base for larger numbers.

// base is an integer from 2 to 256
// number is an integer from 1 to 1'000'000
// Note Second argument: number is always declared, passed and displayed as a regular decimal number. If you see a test described as 42! in base 20 it's 4210 not 4220 = 8210.



function primeFactorization(base) {
    const factors = {};
    for (let i = 2; i <= base; i++) {
        while (base % i === 0) {
            if (factors[i]) {
                factors[i]++;
            } else {
                factors[i] = 1;
            }
            base /= i;
        }
    }
    return factors;
}

function countFactorsInFactorial(n, p) {
    let count = 0;
    let power = p;
    while (power <= n) {
        count += Math.floor(n / power);
        power *= p;
    }
    return count;
}

function zeroes(base, number) {
    const factors = primeFactorization(base);
    let minZeros = Infinity;

    for (const [p, exponent] of Object.entries(factors)) {
        const count = countFactorsInFactorial(number, parseInt(p));
        minZeros = Math.min(minZeros, Math.floor(count / exponent));
    }

    return minZeros;
}


//other solution
function zeroes (base, number) {
    var factors = {}, i = 1;
    while(++i <= base) while(base%i == 0) {
      base /= i; 
      factors[i] = (factors[i]||0) + 1;
    }
    return Math.min(...Object.keys(factors).map(factor => {
      var count = 0, i = 1;
      while((i *= factor) <= number) count += number/i>>0;
      return count/factors[factor]>>0;
    }));
  }