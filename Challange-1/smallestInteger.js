// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//     return args.sort((a,b) => a - b)[0];
//     }
// }

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

console.log(findSmallestInt([78,56,232,12,8]));