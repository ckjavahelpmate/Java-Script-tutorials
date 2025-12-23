/*
Destructuring Assignment in JavaScript
-------------------------------------------------
-> Destructuring assignment is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.
-> This feature makes it easier to extract data from complex structures in a more readable and concise way.
*/


// Example with Arrays:
// -------------------------------------------------
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;
console.log(red);   // Output: 255
console.log(green); // Output: 200
console.log(blue);  // Output: 0

// Example with Objects:
// -------------------------------------------------
const person = {    
    name: 'Alice',
    age: 30,
    city: 'New York'
};  
const { name, age, city } = person;
console.log(name); // Output: Alice
console.log(age);  // Output: 30
console.log(city); // Output: New York








