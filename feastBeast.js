// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1 ];
//     }

// function feast(beast, dish) {
//     return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);
// }


// const feast = (beast, dish) => beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);

// function feast(beast, dish) {
//     return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
// }

const feast = (...args) => /^(.).*(.),\1.*\2$/.test(args);




    console.log(("chickadee", "chocolate cake"));