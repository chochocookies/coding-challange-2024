// function getAverage(marks){
//     let total = 0;
//     for ( let i = 0; i < marks.length; i++ ) {
//         total += marks[i];
//     }
//     return Math.floor(total / marks.length);
// }

const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr , 0 ) / marks.length);

console.log(getAverage([1,1,1,1,1,1,1,2]));