// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

// function setAlarm(employed, vacation){
// if (employed) {
//     if (vacation) {
//         return false;
//     } else {
//         return true;
//     }
// } else {
//     if (vacation) {
//         return false;
//     } else {
//         return true;
//     }
// }
// }


// function setAlarm(employed, vacation) {
//     return employed && !vacation;
// }

// const setAlarm = (employed, vacation) => employed && !vacation;

function setAlarm(employed, vacation){
    return employed > vacation
  }

console.log(setAlarm(true, true));