// Description:
// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

// your referral bonus, and

// the price of a beer can

// For example:

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

// Returns number of complete beeramid levels
function beeramid(bonus, price) {
    const totalCans = Math.floor(bonus / price);
    
    let levels = 0;
    let cansUsed = 0;

    while (true) {
        const cansNeeded = (levels + 1) ** 2;

        if (cansUsed + cansNeeded > totalCans) {
            break; // Not enough cans to build the next level
        }

        cansUsed += cansNeeded;
        levels++;
    }

    return levels;
}

var beeramid = function(bonus, price) {
    var beers = Math.floor(bonus / price), levels = 0;
    while(beers >= ++levels * levels) {
      beers -= levels * levels;
    }
    return levels - 1;
  }

  const beeramid = (bonus, price, lvl = 1) =>
    bonus - lvl ** 2 * price < 0 ? --lvl : beeramid(bonus - lvl ** 2 * price, price, ++lvl);