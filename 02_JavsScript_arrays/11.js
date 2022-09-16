// Calculate the sum of an array of numbers
// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction(a) {
  return a.reduce((container, current) => container + current, 0);
}

//hint 
//The reduce method also iterates through all elements of an array. 
//It takes two parameters: a function that executes in each iteration and an (optional) initial value. 
//The basic syntax is the following:

const arr = [1,2,3];
const result = arr.reduce((container,current) => returnSomething, initialValue);

// container is the counterpart of the container variable from our for-loop. 
//I like to think about it as the current state of the process. 
//After all iterations, the final container value will be returned.

// current is the array element of the current iteration.