// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  var array = str.split(" ");
  var ans = "";
  for (var i = 0; i < array.length; i++) {

    if (array[i].length > 1) {
      var first;
      var anyLeft;
      first = array[i].substring(0,1);
      anyLeft = array[i].substring(1,array[i].length);
      first = first.toUpperCase();
      anyLeft = anyLeft.toLowerCase();
      array[i] = first + anyLeft + " ";
      ans += array[i];
      } else {
          array[i] = array[i].toUpperCase() + " ";
          ans += array[i];
      }
  }
  ans = ans.trim();
  return ans;
}

console.log(titleCase("sHoRt AnD sToUt"));
