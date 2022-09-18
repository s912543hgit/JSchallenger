// Add n days to an existing date

// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
//my answer
function myFunction(a, b) {
  const result = new Date(a);
  return result.setDate(result.getDate() + b);
}

// hint
// The setDate() method changes the day of the month of a given Date instance, based on local time.
// setDate(dayValue)

function myFunction(a, b) {
  const currentDays = a.getDate();
  return a.setDate(currentDays + b)
}
