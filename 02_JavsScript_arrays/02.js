// Remove first n elements of an array
// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result
function myFunction(a) {
  return a.slice(3);
}

// hint 
//The most recommended and easy way to remove certain elements from an array is to use the slice method.
//This method can be applied to our problem. If we want to remove some elements from the beginning of an array,
//then we only have to define the start parameter.
const arr = [0,1,2,3,4];
arr.slice(2);
// output: [2,3,4]
