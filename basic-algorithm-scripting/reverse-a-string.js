// Reverse the provided string.
//
// You may need to turn the string into an array before you can reverse it.

function reverseString(str) {
  var array = str.split("");
  array = array.reverse();
  str = array.join("");
  return str;
}

reverseString("hello");
