---
sidebar_position: 9
---

# The DOM
In this section you are going to look at the Dom (Document Object Model). You can see the Dom as a means JavaScript uses to access Html and CSS. You will learn how to play around with the Dom in this section so let's get to it.


## What is the DOM ?
The DOM means Document Object Model. With the DOM, JavaScript can access all the Html elements on a webpage. JavaScript can also access CSS styles. It is an API(Application Programming Interface) for connecting Javascript to the other languages and frameworks.


The DOM is used by many web technologies, including JavaScript, CSS, and XSLT. It is also used by many web development frameworks, such as React, Angular, and Vue.js.


## How to use the DOM
To use the Dom in javascript to access a Html element, you need to make a reference to the element using any of the Dom methods.
Example,


`index.html`
```
<!Doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    …
  </head>
  <body>
   <button id="btn">Click Me!</button>
  </body>
</html>
```
Make a reference to the html element `button`.


`main.js`
```
const button = document.getElementById("btn");
```
With the `document.getElementById` method, JavaScript has been able to access the Html.


Next, is to define the action you would want JavaScript to perform on that Html element.
You could do that by watching out for events. With the `eventListener`, you could make JavaScript perform an action on the Html element when that event occurs.


`main.js`
```
const button = document.getElementById("btn");


//Using `addEventListener` to watch out for the action `click`


btn.addEventListener("click", click)
```
**Note: The `click` in quotes is the action you want JavaScript to perform and the `click` is the program that specifies what you want JavaScript to do as soon as a user clicks on a button.


The last thing you need to do is to write a simple program.


`main.js`
```
function click() {
   alert("Hello World");
}
```
Now, this function specifies that JavaScript should perform an alert of `Hello world` whenever someone clicks on the button.


That is how you make JavaScript perform an action on Html, JavaScript can add an element or remove an element. It could also add  or remove a particular css styling.


Here are some of the popular methods in DOM:
   
```
getElementByTagName() - used to access an html element using the tag name.


getElementByClassName() - used to access an html element using the class name.


getElementByName() - used to access an html element name attribute


querySelector() - used to access the first html element with a css selector whether id or class.


querySelectorAll() - used to access html elements with a specific css selector.
```
You will come across these methods a lot as you progress in web development.


There are other methods and properties of DOM which I did not cover in this session. You could check [this list of DOM methods and properties for more](https://linuxhint.com/html-dom-methods-and-properties/).


Bravo! You have completed this tutorial, cheers.


In the next session, you are going to apply all the core concepts you learned in this tutorial to build an application.
