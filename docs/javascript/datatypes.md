---
sidebar_position: 5
---

# Data types in javascript

## Data types
In JavaScript, there are eight data types. It is important to understand the concept of data types so you could apply variables correctly and avoid errors. 

For example, combining a string with a number would give a logical error because they are of different data types.

The data types in JavaScript are:
1. String
2. Number
3. Big int
4. Boolean 
5. Null
6. Undefined 
7. Objects
8. Symbols

### String

String datatype is denoted with single(`''`)or double(`""`) quotes and recently backticks("``").

Example,

`main.js`
```
let str = "hello"

console.log(typeof(str));          //hello

let strs = 'great';
console.log(typeof(strs));       //great

let s = `greet`;
console.log(typeof(s));          //greet
``` 

The `typeof` keyword is used to show the data type. So when you run the code, you would see `string` which confirms that it is a string datatype.


### Number

The number data type is denoted with numbers that are stored in 64-bit floating point. Numbers include decimals and whole numbers. When you use double or single quotes on a number. JavaScript converts it as a string. 

Example,

`main.js`
```
let x= 200;

let y = 30.00;
```

### Big int

Numbers are stored in 64-bit so big int was introduced to accommodate numbers that are longer than 64-bit.

Example,

`main.js`
```
let z = BigInt("3000004000005000008000007000002000001111111")
```

### Boolean

Boolean data type is used to denote `true` or `false` .

Example,

`main.js`  
```
let a = 2;
let b = 3;
let c = '2';

console.log(a == b);          //false
console.log(a == c);         //true
```

In boolean, the double equals is used to determine the value.

In the example above, 2 is equal to 2 because they have the same data type but you get `false` when you use the deep equals(`===`).

The deep equals determines the value and the data type.

Example,

`main.js`
```
let a = 2;
let b = 3;
let c = '2';

console.log(a === b);          //false
console.log(a === c);         //false

```

When you run it, you get false because they are not *deeply equal* to each other.

### Null

Null is a data type that is used to indicate an object that does not exist. It is denoted with `null`.


### Undefined

Undefined is a data type that represents no value. When you declare a variable without assigning a value to it then it becomes `undefined`.

Example,

`main.js`
```
let a;

console.log(a);          //undefined
```

### Object

It is a datatype that allows you to store various collection of entities. Object datatype includes arrays,objects and date.

An array consist of items(string,numbers or boolean values) in a square bracket, separated by commas.

Example,

`main.js`
```
let arr = ['hello',53,true,'yes'];
```

An object consists of items comprising of various data types enclosed in curly brackets and separated by commas.

Example,

`main.js`
```
let obj = {item1:"hello",item2:53,item3:true,item4:"yes"};
```

Objects are written as name:value pairrs

A date is used to specify the date.

Example,

`main.js`
```
let dates = new Date("2023-03-03");
```

### Symbols

Symbols are used to create unique values. Their values do not change and they are unique too.

Example,

`main.js`
``` 
let firstSymbol = Symbol(800);

let secondSymbol = Symbol(800);
```

Both `firstSymbol` and `secondSymbol` are different even though they have different values.
