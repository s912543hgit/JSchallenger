// Merge an arbitrary number of arrays
// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
function myFunction(...arrays) {
  return arrays.flat();
}

//hint
// Array.prototype.flat()
//The flat() method creates a new array with all sub-array elements concatenated into
// it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
