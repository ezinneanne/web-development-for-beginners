---
sidebar_position: 8
---

# Functions
Functions are used in JavaScript to run a block of code whenever it is needed. The use of functions ensures clean code and reduces repetition.


Example,

`main.js`
```
function myfunc (name) {
  return "My name is"+name;
}
```

You run a function by calling it.


Example,


`main.js`
```
function myfunc (name) {
   return "My name is"+name;
}
console.log(myfunc("Ezinne"));
```


In the example, the `name` in the function is a parameter while the value assigned when calling the function is called an argument.

Defining a function in JavaScript is done in about two ways and they are:
- function declaration
- function expression


## Function declaration
This is the method I used previously. To declare a function, you do that with the function keyword, a name of the function and brackets for a parameter.
A parameter is optional. Some functions may need parameters and some may not.

This is the syntax for function declaration:


`main.js`

```
function myfunc(parameter) {
   //Block of code
 }
```

Look at an example without a parameter.


`main.js`

```
function myfunc() {
   return "My name is Ezinne";
}


//calling the function 
console.log(myfunc());
```
That is how to create functions in javascript using function declaration.


## Function expression
In function expression, you assign the function to a variable name. This kind of function can be anonymous or have a function name.


This is the syntax:

`main.js`

```
const myfunc = function(parameter) {
   //Block of code
}

console.log(myfunc(argument))
```


Example,

Using the function expression as anonymous.

`main.js`

```
const myfunc = function(name){
  return `My name is ${name}`;
} 

console.log(myfunc("Ezinne"));
```
That will print the name. You can also use function expression with a function name. 


Example,

`main.js`

```
const myfunc = function myName(name){
  return `My name is ${name}`;
}

console.log(myfunc("Ezinne"));
```
That will print the name even though the function had a name.


## Arrow syntax as functions 
The arrow syntax is more of a shorthand on how to create JavaScript functions. It was introduced in ECMAScript 6(ES6).


This is the syntax:

```
(parameter1, parameter2) => {
  // Block of code
}
```


Example,

`main.js`

```
const myfunc = (name) => {
   return `My name is ${name}`;
}


console.log(myfunc("Ezinne"));
```
Using arrow functions provides a concise way to use functions in Javascript.
