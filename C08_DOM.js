/*
DOM
--------------------------------------------------
-> DOM stands for Document Object Model
-> When webpage loaded, browser creates a DOM object for that page
-> USing the document object we can access HTML elements in JS.
-> We can manipulate the DOM from JS.

Locators in JS
-------------------------------------------------------------------------
1. document.getElementById("id");
2. document.getElementsByName("username");
3. document.getElementByClassName("classname");
4. document.getElementByTagName("tagname");
5. document.querySelector("CssSelector") -> first match element
6. document.querySelectorAll("CssSelector") -> ALl match elements

Properties in JS
----------------------------------------------------------------------
1. Content properties
    -> element.innerText    // visible text only
    -> element.textContent  // all text (hidden included)
    -> element.innerHTML    // HTML content

2. Attribute-related properties
    -> element.id
    -> element.className
    -> element.classList
    -> element.title
    -> element.href
    -> element.src
    -> element.value
    -> element.checked
    -> element.disabled
    -> element.getAttribute("Attribute name") : attribute value
    -> element.setAttribute("AN", "AV") : void

3. Style properties
    -> element.style.color = "red";
    -> element.style.backgroundColor = "yellow";
    -> element.style.fontSize = "20px";

4. Class properties
    -> element.className        // string
    -> element.classList.add("active");
    -> element.classList.remove("hidden");
    -> element.classList.toggle("open");
    -> element.classList.contains("active");

5. Size & position properties
   -> element.offsetWidth
   -> element.offsetHeight
   -> element.clientWidth
   -> element.clientHeight
   -> element.scrollWidth
   -> element.scrollHeight
   -> element.offsetTop
   -> element.offsetLeft

6. DOM tree properties
   -> element.parentElement
   -> element.children
   -> element.childNodes
   -> element.firstElementChild
   -> element.lastElementChild
   -> element.nextElementSibling
   -> element.previousElementSibling

7. Event-related properties
   -> element.onclick = function () { ... };
   -> element.onchange = function () { ... };
   -> element.oninput = function () { ... };

8. Element add/delete related
    -> document.createElement("tagname")
    -> node.append(element) -> add at last(inside node)
    -> node.prepend(element) -> add at first(inside node)
    -> node.before(element) -> before node
    -> node.after(element) -> after node
    -> node.remove() -> remove node

*/

// Adding inner text to HTML element
// ----------------------------------------------- 
// let heading = document.getElementById("heading");
// heading.innerText += ", From CK Automation"; 



// Adding the new element to the HTML DOM
// ----------------------------------------------------
let btn = document.createElement("button");
btn.innerText = "Click Me" ;
btn.style.backgroundColor = "red" ;
btn.style.color = "white" ;

let bodyNode = document.querySelector("body");
bodyNode.prepend(btn);