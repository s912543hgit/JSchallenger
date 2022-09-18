// Check if two dates fall on the exact same day
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

//my answer
function myFunction(a, b) {
  return a.getTime() === b.getTime();
}

// author answer

function myFunction(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
