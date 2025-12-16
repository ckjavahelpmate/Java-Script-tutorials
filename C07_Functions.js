//1. Regular funtion -> Function is a block of code which can be invoked when needed
//2. Arrow function -> Compact version of function
//3. Callback function -> Function passed as parameter to another function
//4. Higher order function -> function which recieves function as arguments

/*
1. Regular funtion -> Function is a block of code which can be invoked when needed
-----------------------------------------------------------------------------------
-> Function is a block of code which can be invoked when needed
-> We can create funtion using function keyword
-> We can invoke funtion using function name
-> We can pass input to funtion using parameters
-> We can return result from funtion using return keyword.
-> Syatax :
        function FunctionName([arguments])
        {
            code
        }


*/

function add(a, b) {
    console.log(`Result of, ${a} + ${b} = ${a + b} `);
}

add(10, 20);
add(100, 200);
add(40, 50);


function isEven(num) {
    return num % 2 == 0;
}

console.log(`24 is even= ${isEven(24)}`);
console.log(`25 is even = ${isEven(25)}`);



/*
Arrow functions
----------------------------------------------
-> Compact version of function is a Arrow function
-> To invoke arrow function we must store arrow function in a variable
*/

const arrowSum = (a, b) => {
    console.log(`Result of, ${a} + ${b} = ${a + b}`);
}

arrowSum(10, 20);
arrowSum(100, 200);

const arrowIsEven = (num) => {
    return num % 2 == 0;
}

console.log(`24 is even= ${arrowIsEven(24)}`);
console.log(`25 is even = ${arrowIsEven(25)}`);

function countVowels(text) {
    let vowels = "AEIOUaeiou";
    let count = 0;
    for (let ch of text) {
        if (vowels.includes(ch)) {
            count++;
        }
    }
    console.log(`"${text}" has ${count} vowels`);
}

const arrowCountVowels = (text) => {
    let vowels = "AEIOUaeiou";
    let count = 0;
    for (let ch of text) {
        if (vowels.includes(ch)) {
            count++;
        }
    }
    console.log(`"${text}" has ${count} vowels`);
}

let text = prompt("Enter text");
countVowels(text);
arrowCountVowels(text);


/*
3. Callback function -> Function passed as parameter to another function
4. Higher order function -> function which recieves function as arguments
--------------------------------------------------------------------------
*/

// Regular function
function sayHello(name){
    console.log(`Hello, ${name}`);
}
function sayBye(name){
    console.log(`Bye, ${name}`);
}

//Higher oreder function
function greet( fun, names ){
    for( let name of names){
        fun(name);
    }

}

// invoke higher order function -> higher order function will invoke regular function for all names of array
let names = ["Sheela", "Allen", "Mala", "Smith" ];
greet( sayHello, names);
greet( sayBye, names );



