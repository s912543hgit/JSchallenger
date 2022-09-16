// Remove a property from an object

// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
// my answer
function myFunction(obj) {
  delete obj.b;
  return obj;
}

//author answer
function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}

//hint
const obj = { x: 1, y: 2 };

const { y, ...newObj } = obj;
//This will assign a new variable y with the value obj.y and create a new object with all the remaining properties of obj.
