/*
Set timeout function
---------------------------
-> This function sets a timeout to execute a given callback function after a specified delay.
-> It takes two parameters: the callback function and the delay in milliseconds.
-> After the delay, the callback function is executed.


*/

console.log("Start");

function t31() {
    setTimeout(() => {
        console.log("waiting for 6 seconds");
    }, 6000);
}

function t2() {
    setTimeout(() => {
        console.log("waiting for 3 seconds");
    }, 3000);
}

function t3() {
    setTimeout(() => {
        console.log("waiting for 2 seconds");
    }, 2000);
}
console.log("End");
