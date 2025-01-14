---
sidebar_position: 6
---

# Conditional statements
Statements are considered conditional when they run as long as a certain condition is true. In Javascript the conditional statements are switch case and if statements. The if statements include if, if..else and else statements. 

In this section, you will learn about the conditional statements in javascript.

## Switch statement
The switch is a conditional statement that runs through a series of conditions and selects which is true.

Example,

`main.js`
```
const currentTutorial = "JavaScript";
switch (currentTutorial) {
   case "html forms": 
      console.log('learning html forms');
      break;
   case "css flexbox":
      console.log('learning css flexbox');
      break;
   default:
      console.log('Yet to begin');
}
```

The `default` keyword is used when all the conditions do not meet the expression which is *JavaScript*.


## If statement

`if` is another type of conditional statement that runs through a series of conditions and only returns a true value. 

To use an if statement with multiple lines of code would involve using `else if` and `else` statements.

Example,

`main.js`
```
if (2 === 5) {
  console.log(5);
}
else if (2 < 5) {
  console.log(2);
}
else {
  console.log("none of the values");
}
```

`else` is used as a default in case none of the conditions is true.

