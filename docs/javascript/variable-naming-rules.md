---
sidebar_position: 4
---

# Variable naming rules and comments
JavaScript has a naming convention that it uses in naming JavaScript variables.

The naming convention is made up of a set of rules and the rules are:
- Javascript is case sensitive hence the variables should be case sensitive. 
- JavaScript does not allow spaces in variables. The names must be written together. 
- Variable names begin with a letter or dollar sign($) or an underscore.
- Names can contain letters, numbers, dollar signs and underscores.
- You cannot use reserved words (words with special use and special meaning) as a variable name.

Failure to obey these rules will lead to an error when you are writing a program.

**Note:** It is best practice to use camelCase when naming variables. The first name begins with a small letter and the other name that follows is a capital letter.

Using camelCase pattern when naming variables will not give an error when you are writing program but it is considered best practice.

## Common best practices when naming variables in Javascript 
There are other best practices you should know when naming variables and they are:

- Use meaningful words as variables. It is best to give your variables a name that relate with the program. Eg, in a calculator program, you could use a variable with the name, `inputButton`.
- You can use multiple names to name a variable as long as it describes the variables well.
- When using multiple words, you could use the camelCase pattern or underscores (`_`) to join the words. 

## Comments
To use comments in JavaScript, you use two different patterns for single line comments and multiple line comments.


Example,


`main.js`
```
const data = 2;         //this is a one line comment


/*
This is a multi-line comment. It is used when a comment exceeds a single line.
*/


```

