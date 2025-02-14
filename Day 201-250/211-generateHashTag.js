// Description:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    if (str === '') return false;
    let strArr = str.split(' ');
    let result = '#';
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] !== '') {
            result += strArr[i][0].toUpperCase() + strArr[i].slice(1);
        }
    }
    if (result.length > 140) return false;
    return result;
}

// Other Solutions
function generateHashtag (str) {
    return str.length > 140 || str === '' ? false : '#' + str.split(' ').map(capitalize).join('');
  }

  function generateHashtag(str) {
    const trimmedStr = str.trim();
    
    if (trimmedStr.length === 0) return false;
    const words = trimmedStr.split(/\s+/);
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const hashtag = '#' + capitalizedWords.join('');

    return hashtag.length > 140 ? false : hashtag;
}
const generateHashtag = str => (s = '#'+str.trim().split(" ").filter(e=>e).map(e=>e[0].toUpperCase() + e.substring(1,e.length).toLowerCase()).join("")).length > 1 && s.length <= 140 ? s : false