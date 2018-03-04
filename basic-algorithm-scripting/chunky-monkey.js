// Write a function that splits an array (first argument) into groups the length of size (second argument)
//  and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    // add new answer array
    var answer = [];

    for (var i = 0; i < arr.length; i += size) {
        var newArr = [];
        for (var j = 0; j < size; j++) {
            // check if undefined
            if (arr[i + j] != null) {
                // push i i+1 i+2 and so on to array
                newArr.push(arr[i + j]);
            }
        }
        answer.push(newArr);
    }
  return answer;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));