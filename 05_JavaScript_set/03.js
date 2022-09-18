// Get union of two sets
// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code
// my answer
function myFunction(a, b) {
  b.forEach(a.add, a);
  return b;
}

// author answer
function myFunction(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}
