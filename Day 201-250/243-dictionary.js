// Description:
// I'm sure, you know Google's "Did you mean ...?", when you entered a search term and mistyped a word. In this kata we want to implement something similar.

// You'll get an entered term (lowercase string) and an array of known words (also lowercase strings). Your task is to find out, which word from the dictionary is most similar to the entered one. The similarity is described by the minimum number of letters you have to add, remove or replace in order to get from the entered word to one of the dictionary. The lower the number of required changes, the higher the similarity between each two words.

// Same words are obviously the most similar ones. A word that needs one letter to be changed is more similar to another word that needs 2 (or more) letters to be changed. E.g. the mistyped term berr is more similar to beer (1 letter to be replaced) than to barrel (3 letters to be changed in total).

// Extend the dictionary in a way, that it is able to return you the most similar word from the list of known words.

// Code Examples:

// fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
// fruits.findMostSimilar('strawbery'); // must return "strawberry"
// fruits.findMostSimilar('berry'); // must return "cherry"

// things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
// things.findMostSimilar('coddwars'); // must return "codewars"

// languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
// languages.findMostSimilar('heaven'); // must return "java"
// languages.findMostSimilar('javascript'); // must return "javascript" (identical words are obviously the most similar)
// I know, many of you would disagree that java is more similar to heaven than all the other ones, but in this kata it is ;)

// Additional notes:

// there is always exactly one possible correct solution

function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.levenshteinDistance = function(a, b) {
    const dp = Array(a.length + 1).fill(null).map(() => Array(b.length + 1).fill(0));

    // Initialize the first row and column
    for (let i = 0; i <= a.length; i++) {
        dp[i][0] = i; // Deleting all characters
    }
    for (let j = 0; j <= b.length; j++) {
        dp[0][j] = j; // Adding all characters
    }

    // Fill the dp table
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1; // No cost if characters are the same
            dp[i][j] = Math.min(
                dp[i - 1][j] + 1,    // Deletion
                dp[i][j - 1] + 1,    // Insertion
                dp[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    return dp[a.length][b.length];
};

Dictionary.prototype.findMostSimilar = function(term) {
    let minDistance = Infinity;
    let mostSimilarWord = '';

    for (const word of this.words) {
        const distance = this.levenshteinDistance(term, word);
        if (distance < minDistance) {
            minDistance = distance;
            mostSimilarWord = word;
        }
    }

    return mostSimilarWord;
};

function Dictionary(words) {
    this.words = words;
  }
  
  Dictionary.prototype.findMostSimilar = function(term) {
    var levenshtein = function(word) {
      if (word === term) {return 0}
      if (term.length === 0) {return word.length}
      if (word.length === 0) {return term.length}
      var v0 = new Array(term.length + 1);
      var v1 = new Array(term.length + 1);
      for (var i=0; i<v0.length; i++) { v0[i] = i; }
      for (var i=0; i<word.length; i++) {
        v1[0] = i+1;
        for (var j=0; j<term.length; j++) {
          var cost = word.charAt(i) === term.charAt(j) ? 0 : 1;
          v1[j+1] = Math.min(v1[j]+1, v0[j+1]+1, v0[j]+cost);
        }
        var tmp = v0;
        v0 = v1;
        v1 = tmp;
      }
      return v0[term.length];
    }
    return this.words.sort(function(a,b){return levenshtein(a)-levenshtein(b)})[0];
  }

class Dictionary{
    constructor(w) { this.w = w }
    findMostSimilar(t, m = t.length) {
      const lev = (w, n = w.length) => !m ? n : !n ? m : [...t].reduce((p, a, i) => 
        [...w].reduce((r, b, j) => [...r, Math.min(r[j] + 1, p[j+1] + 1, p[j] + (a != b))], [i+1]), [t,...w].map((_,i) => i))[n];
      return this.w.sort((a, b) => lev(a)-lev(b))[0];
    }
  }