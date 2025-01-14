---
sidebar_position: 1
---

# Building A Calculator with html,css and javascript 
In this session, you are going to build a calculator application. The calculator will have a black background with white buttons and operate. With this application, you would be able to cover the core concepts of html, css and JavaScript.

You can do this:

- Create a folder and save it as `calculator-folder`.
- Create a file in the `calculator-folder` folder and name it `index.html`.
- Create another file in the `calculator-folder` folder and name it `styles.css`.
- Create another file and name it `main.js`.

## Writing html

Open the `index.html` and add these lines of code:

`index.html`
```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>A calculator app</title>
    <link rel="stylesheet" 
    href="styles.css"/>
  </head>
  <body>
  </body>
</html>
```

In the code, you have created a title for the application and you linked the stylesheet in the CSS.

Add the `main.js` file in between the `body` element.

`index.html`
```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>A calculator app</title>
    <link rel="stylesheet" 
    href="styles.css"/>
  </head>
  <body>
    <script src="main.js"></script>
  </body
</html>
```
With that, you have linked the JavaScript file to it.

This is the screenshot of the calculator and how it will look like.

![A screenshot of the calculator app](../Calculator%20app/img/Screenshot_13.png)

To begin, you will create a `body-wrapper` which is the size of the calculator body. So create a `div` with the id name of `body-wrapper`.

`index.html`
```
<div id="body-wrapper"></div>
```

When you look at the image above, you will notice that there is another element inside the `body-wrapper` holding the buttons in place. So, create another `div` with a class name of `wrapper`.

`index.html`
```
<div id="body-wrapper">
  <div class="wrapper"></div>
</div>
```
When you look at the image again, you will notice you need to create some buttons and a screen. To create the screen, use the `input` element.

`index.html`
```
<div id="body-wrapper">
  <div class="wrapper">
    <input type="text" class="screen"/>
  </div>
</div>
```
When you run the code, you notice that the input box opens when you click on it. To stop that, add `disabled` to the input element.

The buttons will be in an element that will cover them. So create a `div` with a class name of `buttons` for the buttons.

`index.html`
```
<div id="body-wrapper">
  <div class="wrapper">
    <input type="text" class="screen"/>
    <div class="buttons"></div>
  </div>
</div>
```

Now add the buttons, and when you do give it a value attribute. Because you will use the value attribute when you are working with JavaScript. 

`index.html`
```
<div id="body-wrapper">
  <div class="wrapper">
    <input type="text" class="screen"/>
    <div class="buttons">
       <button value="clear">C</button>
    </div>
  </div>
</div>
```

Add the remaining buttons.

`index.html`
```
<div id="body-wrapper">
  <div class="wrapper">
    <input type="text" class="screen"/>
    <div class="buttons">
        <button value="clear">C</button>
        <button value="delete">DEL</button>
        <button value="%">%</button>
        <button value="/">&divide;</button>
        <button value="7">7</button>
        <button value="8">8</button>
        <button value="9">9</button>
        <button value="*">&times;</button>
        <button value="4">4</button>
        <button value="5">5</button>
        <button value="6">6</button>
        <button value="-">-</button>
        <button value="1">1</button>
        <button value="2">2</button>
        <button value="3">3</button>
        <button value="+">+</button>
        <button value="0">0</button>
        <button value=".">.</button>
        <button value="=">=</button>
    </div>
  </div>
</div>
```

Now, you have added all the buttons. Next, is to style them. Open your `styles.css` file.
