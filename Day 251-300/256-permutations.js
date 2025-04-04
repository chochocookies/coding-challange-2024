// // Description:
// // In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// // Create as many "shufflings" as you can!

// // Examples:

// // With input 'a':
// // Your function should return: ['a']

// // With input 'ab':
// // Your function should return ['ab', 'ba']

// // With input 'abc':
// // Your function should return ['abc','acb','bac','bca','cab','cba']

// // With input 'aabb':
// // Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// // Note: The order of the permutations doesn't matter.

// function permutations(string) {
//     if (string.length <= 1) return [string];
    
//     const result = new Set();
    
//     const permute = (str, l, r) => {
//         if (l === r) {
//         result.add(str);
//         } else {
//         for (let i = l; i <= r; i++) {
//             const swapped = swap(str, l, i);
//             permute(swapped, l + 1, r);
//         }
//         }
//     };
    
//     const swap = (str, i, j) => {
//         const arr = str.split('');
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         return arr.join('');
//     };
    
//     permute(string, 0, string.length - 1);
    
//     return Array.from(result);
// }

// function permutations(str) {
//     return (str.length <= 1) ? [str] :
//             Array.from(new Set(
//               str.split('')
//                  .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
//                  .reduce((r, x) => r.concat(x), [])
//             ));
//    }

function sumIntervals(intervals) {
    
  }