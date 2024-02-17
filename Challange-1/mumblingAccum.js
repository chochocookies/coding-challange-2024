// function accum(s) {
// 	const strArr = s.split('');
//     const resultArr = [];

//     for ( let i = 0; i < strArr.length; ++i ) {
//         let temp = '';
//         for ( let j = 0; j <= i; ++j ) {
//             if ( j === 0) {
//                 temp += strArr[i].toUppercase();
//             } else {
//                 temp += strArr[i].toLowerCase();
//             }
//         }
//         resultArr.push(temp);
//     }
//     return resultArr.join('-');
// }

const accum = (s) => {
    return s
    .toLowerCase()
    .split('')
    .map((h, i) => h.toUpperCase() + h.repeat(i))
    .join('-')
}

console.log(accum("ZpglnRxqenU"));