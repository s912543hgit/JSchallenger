// Check if two dates are within 1 hour from each other

// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

// my answer
function myFunction(a, b) {
  var ONE_HOUR = 60 * 60 * 1000;
  return Math.abs(a.getTime() - b.getTime()) <= ONE_HOUR;
}

//author answer

function myFunction(a, b) {
  return Math.abs(a - b) /1000 /60 <= 60
}
