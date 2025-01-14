---
sidebar_position: 3
---

# Writing JavaScript

When you run the code, you will see it is not working. It is just a static file. So to make it work, open your `main.js` file. When you learned html DOM, you learned that `querySelectorAll()` is used to select elements. Now, select the buttons and store them in the variable `buttons`.

`main.js`
```
const buttons = document.querySelectorAll("button");

const mainScreen = document.querySelector(".screen");
```

After selecting the buttons and the screen, use a for loop to make the buttons display on the screen when a click event happens.

`main.js`
```
const buttons = document.querySelectorAll("button");

const mainScreen = document.querySelector(".screen");

buttons.forEach(button => {
    button.addEventListener("click", displayText);
});
```

Next, you need to create a function for the `displayText`.

`main.js`
```
function displayText(event) {
    const buttonValue = event.target.value;

    if (buttonValue === "=") {
      if (mainScreen.value !== "") {
        mainScreen.value = eval(mainScreen.value);
      }
    }
    else if (buttonValue === "delete") {
      mainScreen.value = mainScreen.value.substring(0, mainScreen.value.length - 1);
    }
    else if (buttonValue === "clear") {
        mainScreen.value = "";
    }
    else {
      mainScreen.value += buttonValue;   
    }
}
```

Use conditional statements to make the values work only when it is true.
That's a wrap!!! You have built a calculator application using html,css and JavaScript.

