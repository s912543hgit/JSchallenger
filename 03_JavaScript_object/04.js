// Check if property exists in object
// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
function myFunction(a, b) {
  return b in a ;
}

//hint 
// The in operator can be applied to any object. It checks if a property with a certain key exists in the object:
const obj = { x: 1 };
console.log('x' in obj);
// output: true
console.log('a' in obj);
// output: false