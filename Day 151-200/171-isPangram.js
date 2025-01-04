// Description:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// StringsData Structures

function isPangram(string){
    const lowerCaseString = string.toLowerCase();

    const uniqueLetters = new Set();

    for (let char of lowerCaseString) {
        if (char >= 'a' && char <= 'z') {
            uniqueLetters.add(char);
        }
    }
    return uniqueLetters.size === 26;
  }


  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }

  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;
  
  describe("Tests", () => {
    it("test1", () => {
      var string = "The quick brown fox jumps over the lazy dog."
      assert.strictEqual(isPangram(string), true)
    })
    it("test2", () => {
      var string = "This is not a pangram."
      assert.strictEqual(isPangram(string), false)
    });
  });
  