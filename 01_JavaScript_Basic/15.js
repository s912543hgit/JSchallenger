// Check if a number is a whole number

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

// My answer
function myFunction(a) {
  return Math.floor(a) === a; 
}

//Author answer
function myFunction(a) {
    return a -  Math.floor(a) === 0; 
  }

//hint
// Math.floor() 函式會回傳小於等於所給數字的最大整數。

console.log(Math.floor(5.95));
// expected output: 5

