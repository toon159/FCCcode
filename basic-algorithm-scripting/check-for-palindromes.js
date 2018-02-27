// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both
// forward and backward, ignoring punctuation, case, and spacing.

function palindrome (str) {
  // remove non-alphanumeric cha
  var newStr = str.replace(/[^a-z0-9]/ig, '');
  console.log(newStr);
  // to lowercase
  newStr = newStr.toLowerCase();
  console.log(newStr);
  // palindrome
  for (var i = 0; i < newStr.length / 2; i ++) {
    // if any positions char is not equal opposite positions return false
    if (newStr[i] != newStr[newStr.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log('this should be false');
console.log(palindrome('ohhhh'));
console.log('this should be true');
console.log(palindrome('W oow'));
console.log('this should be true');
console.log(palindrome('*wow^_'));
