// You will be provided with an initial array (the first argument in the destroyer function),
//  followed by one or more arguments. Remove all elements from the initial array
//   that are of the same value as these arguments.

function destroyer(arr) {
for (var i = 1; i < arguments.length; i++) {
  // arguments[i]
  arr = arr.filter(int => int != arguments[i]);
}
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
