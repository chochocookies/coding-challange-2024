// var array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]

// function countSheeps(sheep) {
//     let sum = 0;
//     for ( i = 0; i < arrayOfSheep.length; i++) {
//         if ( arrayOfSheep[i] === true ) {
//             sum++;
//         }
//     }
//     return sum;
// }

const countSheeps = (arrayOfSheep) => arrayOfSheep.filter((sheep) => sheep).length;

console.log();