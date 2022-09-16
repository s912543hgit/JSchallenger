// Creating Javascript objects two

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function myFunction(a, b) {
  return { [a]:b };
}

//hint 
//  using the bracket notion
// The following example creates a new object that has one property. 
//The key of the property equals the string value of the variable a. We define it using the bracket notation:

const a = 'x';
const object = { [a]: 1 };
console.log(object)
// output: { x: 1 };