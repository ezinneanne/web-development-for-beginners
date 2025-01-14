---
sidebar_position: 7
---

# Loops
A loop in Javascript is a block of code that can run as long as its condition is true. Loops are used for iteration or repetition of certain commands you want to implement in your program.
An example of a loop in real life is when you have to click to stop on a program. And if you don't click on stop, the program continues running. 
Some programs might add a prompt to inform that the program will not stop until you (the user) stops it.
That's an example of a loop.
In this section, you will learn about loops in javascript, their types and how to use them.


## Types of loops 
There are about three types of loops in JavaScript and they are:


1. For Loops
2. While Loops
3. Do While Loops


For and while loops are more common than do while loops.


### For Loop
Example of a For Loop,


```
for(let i = 0; i< 10; i++) {
   //Block of code
}
```
With the code above, you can make that block of code run 10 times.


For loop uses three short statements in a bracket and here's what they represent:

```
let i = 0
```

Here, you will declare a variable i. You could use any other name to do so. The variable i serves as a counter which you could use to set how many times you want your program to run. Initially, it is set to 0.
The semicolon(;) differentiates the statement to let the JavaScript engine know that the next code is a separate statement.


The second statement is:

```
i < 10
```

This serves as a measure to ensure that the counter which is i does not exceed 10 times.


The third statement is:

```
i++
```

This serves as an increment. It increases "i" after it executes the block of code.


There are other types of for loops which are more recent and they are:


**The `for-of` loop**

The `for-of-loop` loops through several data structures like arrays, objects, nodelists, and maps. It was introduced in the ES6 update.


This is the syntax:

```
for (variable of iterable) {
}
```

Example,

Using an array,

`main.js`

```
const arr = ["Mary","Greg","Dave","Esther","Luke",23,"Peter",19];
for (i of arr) {
    console.log(i);
}
```

That will display each of the items in the array.


**The `forEach` method**

This method uses a function to loop over items in an array. This was introduced in the ES5 update. 
It uses a function to loop through items.

Syntax:

```
arr.foreach(function() {
    //Block of code
})
```


Example,

`main.js`

```
const arr = ["Mary","Greg","Dave","Esther","Luke",23,"Peter",19];
arr.foreach(function(i) {
   console.log(i);
}
```
Since it uses a function, you can use the arrow shorthand function if you wish.


Here's an example,

`main.js`

```
const arr = ["Mary","Greg","Dave","Esther","Luke",23,"Peter",19];
arr.foreach((i) => console.log(i);)
```
That is how you use the foreach function in javascript. The next is the `for-in` loop.


**The `for-in` loop**

The `for-in loop` is used in looping through object keys. It can loop through arrays as well but it is best used for objects. It was introduced in ECMAScript 1(ES1).


This is the syntax:

```
for (variable in object) {
  //block of code 
}
```

Example,

`main.js`

```
const obj = {1:"Mary",2:"Greg",3:"Dave",4:"Esther",5:"Luke",6:23,7:"Peter",8:19};


for (let i in obj) {
    console.log(i); 
}
```
It loops through the object keys and gives the numbers as output.


### While loops
While loops run when the condition is true and stops when it becomes false.


Example,

`main.js`

```
while (i < 5) {
   //Block of code
   i++;
}
```


### Do-while loops
Do-while loops run initially before checking if the condition is true then it would either run or stop running.


Example,

`main.js`

```
do {
   //Block of code
   i++;
}
while(i < 5);
```


### The `break` and `continue` statements
The `break` and `continue` statements are used in javascript loops to immediately break out of a loop or skip an iteration in a loop respectively.


Example of the `break` statement:

`main.js`

```
let i = 0;
while(i < 5) {
   console.log(i,"this should run");
   i++;
   if (i===3){ break};
}
```
The `break` statement will make the loop stop running at the `if` condition.


Example of the `continue` statement:

`main.js`

```
let i= 0;
while(i < 5) {
   i++;
   if (i===3){ continue};
   console.log(i, "this runs");
}
```
That sums up loops, break and continue statements in javascript.
