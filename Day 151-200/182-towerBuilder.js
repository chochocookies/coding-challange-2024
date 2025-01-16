// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
    const tower = [];
    const width = 2 * nFloors - 1;

    for (let i = 0; i < nFloors; i++) {
        const stars = 2 * i + 1;
        const spaces = (width - stars) / 2;

        tower.push(' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces));
    }

    return tower;
}

function towerBuilder(n) {
    return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
}