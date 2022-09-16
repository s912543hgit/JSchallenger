// How many times does a character occur?

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b

// my answer
function myFunction(a, b) {
  return b.toLowerCase().spilt("").filter((el)=> el === a).length;
}

//author answer

function myFunction(a, b) {
    return b.spilt(a).length - 1;
  }
  
