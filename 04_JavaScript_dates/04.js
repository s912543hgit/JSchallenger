// Check if one date is earlier than another
// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise

// my answer
function myFunction(a, b) {
  return a.getTime() < b.getTime();
}

// author answer

function myFunction(a, b) {
  return a < b;
}
