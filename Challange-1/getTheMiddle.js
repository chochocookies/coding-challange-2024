// function getMiddle(s){
//     if (s.length % 2 === 1) {
//         return s.charAt(s.length / 2);
//     } else {
//         return s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);
//     }
// }

// const getMiddle = (s) =>
//     s.length % 2 === 1
//     ? s.charAt(s.length / 2)
//     : s.charAt(s.length / 2 - 1) + s.charAt(s.length / 2);


function getMiddle(s)
{
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
console.log(getMiddle("middle"),"dd");