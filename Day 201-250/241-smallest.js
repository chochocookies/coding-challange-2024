// Description:
// You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

// Task:
// Return an array or a tuple or a string depending on the language (see "Sample Tests") with

// the smallest number you got
// the index i of the digit d you took, i as small as possible
// the index j (as small as possible) where you insert this digit d to have the smallest number.
// Examples:
// smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
// 126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

// smallest(209917) --> [29917, 0, 1] or ...

// [29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
// index `i` in [29917, 0, 1].
// 29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

// smallest(1000000) --> [1, 0, 6] or ...
// Note
// Have a look at "Sample Tests" to see the input and output in each language

function smallest(n) {
    let nStr = n.toString();
    let min = n;
    let minI = 0;
    let minJ = 0;
    for (let i = 0; i < nStr.length; i++) {
        for (let j = 0; j < nStr.length; j++) {
            let newN = nStr.slice(0, i) + nStr.slice(i + 1, nStr.length);
            newN = newN.slice(0, j) + nStr[i] + newN.slice(j, newN.length);
            if (parseInt(newN) < min) {
                min = parseInt(newN);
                minI = i;
                minJ = j;
            }
        }
    }
    return [min, minI, minJ];
}

//other solutions
function smallest(n) {
    const s = [...''+n], smallest = [n,0,0]
    for (let i = 0; i < s.length; i++)
      for (let j = 0; j < s.length; j++) {
        if (i === j) j++
        const t = s.slice()
        t.splice(j,0,t.splice(i,1)[0])
        const m = +t.join``
        if (m < smallest[0]) 
          smallest.splice(0,3,m,i,j)
      }
    return smallest
  }