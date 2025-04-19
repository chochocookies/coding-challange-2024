// How many ways can you make the sum of a number?
// From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)

// In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

// 4
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1
// Examples
// Basic
// sum(1) // 1
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

// sum(10) // 42
// Explosive
// sum(50) // 204226
// sum(80) // 15796476
// sum(100) // 190569292
// See here for more examples.


function sum(num) {
  // Create an array to store the number of partitions for each number
  const partitions = new Array(num + 1).fill(0);
  partitions[0] = 1; // Base case: there's one way to partition 0

  // Fill the partitions array
  for (let i = 1; i <= num; i++) {
      for (let j = i; j <= num; j++) {
          partitions[j] += partitions[j - i];
      }
  }

  return partitions[num]; // Return the number of partitions for num
}

//other solution
const sum = (num) => {
  const dp = [1, ...new Array(num).fill(0)];
  
  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      dp[j] += dp[j - i];
    }
  }

  return dp[num];
};