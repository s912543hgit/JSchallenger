// Return the longest string from an array of strings

// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr) {
  return arr.reduce((a,b)=> a.length > b.length ? a : b );
}
