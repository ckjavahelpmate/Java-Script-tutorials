/*
Event in JS
-----------------------------
-> The change in the state of an object is known as Event
-> Example :
        1. Mouse events( click, double click, hover)
        2. Keyboard events( keypress )
        3. Form events( form submit)
        4. Print event etc...
    
-> We can handle the events either from HTML(inline event handling) or from JS.
-> Event-related properties
   -> element.onclick = function () { ... };
   -> element.onchange = function () { ... };
   -> element.oninput = function () { ... };


Event Object
--------------------------------------------------------------------
-> it is a special object that has details about the events.
-> ALl event handlers have access to Event Object properties and methods.
-> Example :

        node.event = ( e ) => {
                // handle event here...
                // e.target
                // e.type
                // e.clientX
                // e.clientY
            }


Event Listeners
-------------------------------------------------------------------
-> node.addEventListener( event, callback )
-> node.removeEventListener( event, callback)

// Note : Callback function reference should be same to remove 
*/

let btn = document.getElementById("btn1");


// btn.onclick = ( event ) => {
//     console.log("Button-01 cliked- onclick event handler");
// }

// const handler1 = (event) => {
//     console.log("Button-01 click- event listener-01");
// } ;

// const handler2 = (event) => {
//     console.log("Button-01 click- event listener-02");
// } ;

// btn.addEventListener( "click", handler1 );
// btn.addEventListener( "click", handler2 );

// btn.removeEventListener( "click", handler2);


let bodyNode = document.querySelector("body");

let mode = "light";
btn.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        bodyNode.style.backgroundColor = "black";
        bodyNode.style.color = "white";
    }
    else {
        mode = "light";
        bodyNode.style.backgroundColor = "white";
        bodyNode.style.color = "black";
    }
})


// We can use classlist using css
