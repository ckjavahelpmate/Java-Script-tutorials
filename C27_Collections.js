
/*
JavaScript Collections
-----------------------
1. Arrays -> Ordered collections of duplicate elements.
2. Sets -> Unordered Collections of unique values.
3. Maps -> Collections of key-value pairs.
*/

/*
1. Arrays
------------------------
-> Arrays are ordered collections of elements. 
-> They can hold multiple values in a single variable.
-> dynamically sized and can contain elements of different types.
-> Example:
*/
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// or

let numbers = new Array();
numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(4);
numbers.push(5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

/*
2. Sets
------------------------
-> Sets are collections of unique values.
-> They do not allow duplicate elements.
-> Elements in a Set are unordered.
-> Example:
*/
let uniqueNumbers = new Set();
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
console.log(uniqueNumbers); // Output: Set { 1, 2, 3 }

/*
3. Maps
------------------------
-> Maps are collections of key-value pairs.
-> Keys can be of any type, and values can also be of any type.
-> Maps maintain the order of insertion.
-> Example:
*/
let userRoles = new Map();
userRoles.set('Alice', 'Admin');
userRoles.set('Bob', 'User');
console.log(userRoles); // Output: Map { 'Alice' => 'Admin', 'Bob' => 'User' }









