// WPU CODING CHALLANGE
// DAY 10/365

// function stringToArray(string){
//     return string.split(' ')

// }

// function stringToArray(string) {
//     return string.split(' ');
// }

// const stringToArray = string => string.split(' ');

function stringToArray(string) {
    var result = [];
    var traverse = function foo(string) {
        for(var i = 0;  i < string.length; i++) {
            var chr = string.charAt(i);
            if(chr === " ") {
                result.push(string.slice(0,i));
                foo(string.slice(i+1));
                return;
            }
        }
        result.push(string);
    };
    traverse(string);
    return result;
}

console.log(stringToArray('Robin Singh'));
