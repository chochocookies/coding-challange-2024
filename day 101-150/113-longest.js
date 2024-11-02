// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    const combined = s1 + s2;
    const uniqueChars = Array.from(new Set(combined));
    uniqueChars.sort();
    return uniqueChars.join('');
}

function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')