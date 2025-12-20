/*
IIFE - Immediately Invoked Function Expression
-------------------------------------------------
An IIFE is a JavaScript function that runs as soon as it is defined.
it is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:
1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
Example:
-------------------------------------------------
(function () {  
    console.log("This function runs immediately upon definition!");
})();
-------------------------------------------------
In the example above, the function is defined and immediately invoked, printing the message to the console right away.
*/

// Normal function
( function () {
    console.log("This function runs immediately upon definition!");
})();

// Async function
(async function () {
    console.log("This function runs immediately upon definition!");
})();

// Arrow function
(async () => {
    console.log("This function runs immediately upon definition!");
})();

