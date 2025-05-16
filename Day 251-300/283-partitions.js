// Description:
// An integer partition of n is a weakly decreasing list of positive integers which sum to n.

// For example, there are 7 integer partitions of 5:

// [5], [4,1], [3,2], [3,1,1], [2,2,1], [2,1,1,1], [1,1,1,1,1].
// Write a function which returns the number of integer partitions of n. The function should be able to find the number of integer partitions of n for n at least as large as 100.

function partitions(n) {
    // Create an array to store the number of partitions for each number
    const dp = new Array(n + 1).fill(0);
    
    // Base case: There is one way to partition 0
    dp[0] = 1;

    // Fill the dp array
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            dp[j] += dp[j - i];
        }
    }

    return dp[n];
}

function partitions(n) {
  
  const result = new Array(n + 1).fill(0)
  result[0] = 1
  for (let i = 1; i <= n; i++) for (let j = i; j <= n; j++) result[j] += result[j - i]
  return result[n]
  
}