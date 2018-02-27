// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  // add array and answer of type String
  var array = str.split(" ");
  var ans = "";

  for (var i = 0; i < array.length; i++) {
// if word has more than 1 character
    if (array[i].length > 1) {
      var first;
      var anyLeft;

      // cut first and any lest characters in the word
      first = array[i].substring(0,1);
      anyLeft = array[i].substring(1,array[i].length);

      // toUpperCase toLowerCase
      first = first.toUpperCase();
      anyLeft = anyLeft.toLowerCase();

      // concat first and anyLeft
      array[i] = first + anyLeft + " ";

      // add them to answer
      ans += array[i];
      } else {
        // only 1 character, so do toUpperCase
          array[i] = array[i].toUpperCase() + " ";
          ans += array[i];
      }
  }

  //  trim the answer
  ans = ans.trim();

  return ans;
}

console.log(titleCase("sHoRt AnD sToUt"));
