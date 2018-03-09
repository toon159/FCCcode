// You will be provided with an initial array (the first argument in the destroyer function),
//  followed by one or more arguments. Remove all elements from the initial array
//   that are of the same value as these arguments.

function destroyer(arr) {
  console.log(arr);
  var newArr = [1,2,3,4,5];
  return arr;
}

function isEnemy(enemy) {
  if (enemy == 3) {
    return false;
  }
  return true;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
