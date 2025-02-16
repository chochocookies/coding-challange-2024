// Description:
// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// Hint: Remember that the factorization of 86240 is 2^5 * 5 * 7^2 * 11

function primeFactors(n){
    let factors = {};
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors[i] = factors[i] + 1 || 1;
            n /= i;
        }
    }
    return Object.keys(factors).map(key => factors[key] === 1 ? `(${key})` : `(${key}**${factors[key]})`).join('');
}

// Other Solutions
function primeFactors(n){
    for (var i=2, res="", f; i <= n; i++) {
      f=0;
      while (n%i == 0) { f++; n/=i }
      res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
    }
    return res || "("+n+")"
  }