// function past(h, m, s){
//     return (3600 * h + 60 * m + s) * 1000; 
// }

function past(h, m, s) {
    return ((h*3600)+(m*60)+s) * 1000;
}


console.log(past(0,1,1));