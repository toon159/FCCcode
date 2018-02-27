// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  var answer = []; // add answer
  for (var i = 0; i < arr.length; i++) {

    var max = Number.MIN_SAFE_INTEGER;
    for (var j = 0; j < arr[i].length; j++) {
      if(max < arr[i][j]) {
        max = arr[i][j];
      }
    }
    answer.push(max);
    console.log(answer);
  }
  return answer;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
