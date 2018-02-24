
function palindrome (str) {
  // remove non-alphanumeric cha
  var newStr = str.replace(/[^a-z0-9]/ig, '');
  console.log(newStr);
  // to lowercase
    newStr = newStr.toLowerCase();
    console.log(newStr);
  // palindrome

  return true;
}
console.log('this should be false');
console.log(palindrome('oh'));
console.log('this should be true');
console.log(palindrome('W ow'));
console.log('this should be true');
console.log(palindrome('*wow^_'));
