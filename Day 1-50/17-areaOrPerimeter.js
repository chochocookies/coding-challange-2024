// const areaOrPerimeter = function(l , w) {
//     if ( l === w) {
//         return l * w;
//     } else {
//         return 2 * l + 2 * w;
//     }
// };

// const areaOrPerimeter = function (l, w) {
//     return l === w ? l * w : 2 * ( l+ w);
// };

const areaOrPerimeter = (y , z) =>  y === z ? y * z : (z + y) * 2;



console.log(areaOrPerimeter(3,  3));