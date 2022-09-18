// Return the number of days between two dates
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(a, b) {
  return Math.abs(a - b) / 1000 / 60 / 60 / 24;
}

//hint
// Math.abs(x) 函数返回指定数字 “x“ 的绝对值。
