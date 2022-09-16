// Round a number to 2 decimal places

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

// my answer
function myFunction(a) {
  return Math.round(a * 100) / 100;
}

// author answer

function myFunction(a) {
  return Number(a, toFixed(2));
}

// hint
// Number.prototype.toFixed()
// toFixed() 方法會使用定點小數表示法（fixed-point notation）來格式化數字。

function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}
console.log(financial(123.456));
// expected output: "123.46"
