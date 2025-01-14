---
sidebar_position: 2
---

# Ways to add JavaScript
When building a webpage, you would need to add JavaScript to your code. You can add JavaScript in primarily two ways which are internal and external. But you can also place JavaScript code in your html elements. In this section, you will learn about the different ways to add JavaScript to your html.


The three ways you can add your javascript code to your html includes:
 - Inline JavaScript
 - Internal JavaScript 
 - External JavaScript 


## Inline JavaScript
In inline javascript, the code is usually placed as an attribute in html.


Example,

`index.html`
```
<!Doctype html>
<html>
  <head>
    <title>Html</title>
  </head>
  <body>
    <p>This is html</p>
    <button onClick="alert('Hello World !');">Click me</button>
  </body>
</html>
```
When you click the button then the page will display "Hello World".
Inline JavaScript is mostly for basic JavaScript code such as this. 


## Internal JavaScript
In internal javascript, the code is surrounded in `<script>` tags. You could place it at the `<head>` or `<body>` tag.
In this example, I will place it at the `<body>` tag.


Example,

`index.html`
```
<!Doctype html>
<html>
  <head>
    <title>Html</title>
  </head>
  <body>
    <p>This is html</p>
    <button type="button" id="btn" onClick="click()">Click me</button>
    <script>
      function click() {
         alert("Hello World");
      }
      const button = document.getElementById("btn");
      btn.addEventListener("click", click);
    </script>
  </body>
</html>
```
The code will run just like the previous one. This time, it is a simple function with a reference made to the button's id for JavaScript to know that the one you need that particular action for. You will cover functions and The DOM properties later in this doc.


This pattern of JavaScript is normally used when you intend to use a single file for that webpage. But for standard applications, you will need to create a separate page for that.


## External JavaScript 
Whenever you hear someone say their JavaScript code will be external. Just know that they will create a separate file saved in `.js` extension and they will be adding all of their JavaScript code to that file. But of course for it to work, they need to add a link to the JavaScript file in their html. Just like in external css.
To create an external file for your js, create a folder named `js`, save it in the folder that has your `index.html` file and create a file named `main.js` and save it in the  `js` folder.

This is the structure

```
- Program folder
  - js
    - main.js
  - index.html
```
Using the previous onClick example, you will run the code this time around as a separate file. 


`index.html`

```
<!Doctype html>
<html>
  <head>
    <title>Html</title>
  </head>
  <body>
    <p>This is html</p>
    <button type="button" id="btn" onClick="click()">Click me</button>
    <script src="js/main.js"></script>
  </body>
</html>
``` 


`main.js`

```
function click() {
   alert("Hello World");
}
const button = document.getElementById("btn");
btn.addEventListener("click", click);
```

The code will run just like in the previous one but this time you placed it in a separate file. Of all the ways of adding JavaScript, the external pattern is the most common. This is because of "separation of concern" that is how you organise your code into different sections for readability and easier bug detection.
In this doc, you will be using the external pattern for your JavaScript code. So onto the next!!!
