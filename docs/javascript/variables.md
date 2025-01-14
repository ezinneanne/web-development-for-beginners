---
sidebar_position: 3
---

# Variables
In the previous section, you learned about how to add javascript to a html file. In this section, you will learn about variables.

## What is a variable ?
A variable is a placeholder in memory. In JavaScript, to access values you would need variables.

## Declaring variables
There are three ways to declare variables in JavaScript which are: const, let and var.

### const

`const` is used to declare a variable you cannot change. Changing the value of `const` will lead to an error.

Example,

`main.js`

```
const a = 1;

a = 3;          //this will result to an error 
```

To print a value on the JavaScript console. You use `console.log`. 

To print the initial value would be: 

`main.js`

```
console.log(a);           
```

### let

You use `let` to declare a variable you can change. But you cannot redeclare the same value with `let`.

Example,

`main.js`
```
let x = 1;

console.log(x);       //1

let x = 11;          //this would give an error because x has been declared already 
```

### var

`var` is an older version used in declaring variables. Unlike `let`, var can be redeclared.

Example,

`main.js`
```
var y = 2;

console.log(y);          //2

var y = 5;
console.log(y);          //5
```