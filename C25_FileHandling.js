/*
File Handling in JavaScript:
---------------------------------------------
JavaScript provides various methods to handle files, including reading from and writing to files. 
In a Node.js environment, the built-in 'fs' (file system) module is commonly used for file handling operations.


1. Importing the 'fs' Module:
---------------------------------------------
-> To use the file system module, you need to import it first.    
-> Example: ES Modules (modern JS)
---------------------------------------------
import fs from 'fs';

2. Read file synchronously:
---------------------------------------------
-> You can read a file synchronously using the `readFileSync` method.
-> Example: 
---------------------------------------------
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
---------------------------------------------
In the example above, the content of 'example.txt' is read synchronously and printed to the console.


3. Write file synchronously:
---------------------------------------------
-> You can write to a file synchronously using the `writeFileSync` method.
-> Example:
---------------------------------------------
fs.writeFileSync('output.txt', 'Hello, World!', 'utf8');
---------------------------------------------
In the example above, 'Hello, World!' is written to 'output.txt' synchronously.

4. Read file asynchronously:
---------------------------------------------
-> You can read a file asynchronously using the `readFile` method.
-> Example:
---------------------------------------------
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
---------------------------------------------
In the example above, the content of 'example.txt' is read asynchronously and printed to the console.


5. Write file asynchronously:
---------------------------------------------
-> You can write to a file asynchronously using the `writeFile` method.
-> Example:
---------------------------------------------
fs.writeFile('output.txt', 'Hello, World!', 'utf8', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});
---------------------------------------------
In the example above, 'Hello, World!' is written to 'output.txt' asynchronously, and a confirmation message is printed once the operation is complete.


*/


import fs from 'fs';


// Read file synchronously
const data = JSON.parse(fs.readFileSync('data/testData.json', 'utf8'));
console.log(data);
console.log( typeof data);

console.log( data.users.filter( user => user.age > 25 ) );  