// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {

  var answer = "";
  // repeat after me
  if (num < 1) {
    return "";
  }
  for (var i = 0; i < num; i++) {
  answer += str;
  }
  return answer;
}

repeatStringNumTimes("abc", 3);
