// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

// function enough(cap, on, wait) {
//     const spaceLeft = cap - on; // Calculate the available space on the bus
//     return wait <= spaceLeft ? 0 : wait - spaceLeft; // Return 0 if there's enough space, otherwise return the number of passengers that can't board
// }

// function enough(cap, on, wait) {
//     return Math.max(wait + on - cap, 0);
//   }

const enough = (cap, on, wait) => Math.max(0,wait-cap+on);

console.log(enough(10, 5, 5), 0);
