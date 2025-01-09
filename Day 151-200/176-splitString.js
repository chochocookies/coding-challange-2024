// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    const pairs = []; 

    for (let i = 0; i < str.length; i += 2) {
        const pair = str[i] + (str[i + 1] || '_');
        pairs.push(pair);
    }

    return pairs;
}

function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}