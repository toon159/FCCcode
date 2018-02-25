// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  var array;
  var biggestValue = Number.MIN_SAFE_INTEGER;

  array = str.split(" ");

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > biggestValue) {
      biggestValue = array[i].length;
    }
  }
  str = biggestValue;
  return str;
}

var answer = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(answer);
