// Check if all array elements are equal
// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// My answer
function myFunction(arr) {
  return arr.every((ele) => ele === arr[0]);
}

//Author answer
function myFunction(arr) {
  return new Set(arr).size === 1
}

//hint
//Array.prototype.every()
//The every() method tests whether all elements in the array pass the test implemented by the provided function.
//It returns a Boolean value.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
