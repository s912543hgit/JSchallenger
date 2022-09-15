//Get last n characters of string

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction(str) {

  return str.slice(-3);
}


//hint
//It is important to know, that you can call slice with a negative startIndex. 
//In this case, startIndex is not an index but identifies the starting position by counting backwards 
//from the end of the string.

// get last two characters of string:
console.log('wxyz'.slice(-2));
// output: 'xy'