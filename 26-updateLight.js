// function updateLight(current) {
//     if (current === 'green') {
//         return 'yellow';
//     } else if (current === 'yellow') {
//         return 'red';
//     } else {
//         return 'green';
//     }
// }

// function updateLight(current) {
//     switch(current) {
//         case 'green' :
//             return 'yellow';
//         case 'yellow' :
//             return 'red';
//         case 'red' :
//             return 'green';
//     }
// }


// function updateLight(current) {
//     return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
// }

// const rule = {
//     green: 'yellow',
//     yellow: 'red',
//     red: 'green',
// };

// function updateLight(current) {
//     return rule[current];
// }

// const updateLight = (current) =>
//     ( current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green');

const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
})[current]


console.log(updateLight("green"), "yellow");