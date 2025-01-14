---
sidebar_position: 2
---


# Styling the html

You are going to set the root element to a small font so as you adjust the font-sizes of other elements you won't have unnecessary margins.


`styles.css`
```
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
```

With the box-sizing property, you get to determine how elements are placed.
When you set the box-sizing to border-box, the padding, margin and border grow inwards. So, it contains the content and does not cause it to overflow.

After that, set the `body` element to 1.6 rem. 

`styles.css`
```
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
}
```

Now, style the `body-wrapper`. You will have to add some width, height, margin and padding to shape it.

`styles.css`
```
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
}

#body-wrapper {
   width: 260px;
   height: 300px;
   margin: 0 auto;
   padding: 3.5rem;
}
```

When you run the code, you would notice that it is starting to look like a calculator. The calculator is somewhat curved. So add some `border-radius` and of course a `background-colour` of `black`.

`styles.css`
```
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
}

#body-wrapper {
   width: 260px;
   height: 300px;
   margin: 0 auto;
   padding: 3.5rem;
   background-colour: #000;
   border-radius: 15px;
}
```

When you run the code, you will notice that the body is starting to form so style the `wrapper` now.
To style `wrapper`, you would need to centre the `wrapper`, and centre the buttons. To differentiate between `wrapper` and `body-wrapper`, give the `wrapper` a brighter colour.

`styles.css`
```
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
}

#body-wrapper {
   width: 260px;
   height: 300px;
   margin: 0 auto;
   padding: 3.5rem;
   background-colour: #000;
   border-radius: 15px;
} 

.wrapper {
  border: 3px solid black;
  margin: 0 auto;
  text-align: centre;
  width: 240px;
  height: 300px;
  background-color: #eee;
}
```

**Note: I added a border colour of black because I need to see the element when am styling.**

Next, style the `input` element. 

`styles.css`
```
html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
}

#body-wrapper {
   width: 260px;
   height: 300px;
   margin: 0 auto;
   padding: 3.5rem;
   background-colour: #000;
   border-radius: 15px;
}

.wrapper {
  border: 3px solid black;
  margin: 0 auto;
  text-align: centre;
  width: 240px;
  height: 300px;
  background-color: #eee;
}

input[type=text] {
  background-color: #fff;
  text-align: right;
  padding: 1.5 rem;
  margin: 1rem;
  height: 38px;
  width: 200px;
}
```

Now you have styled the `input` element next is to style the `buttons` wrapper.

`styles.css`
```
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
  
body {
  font-size: 1.6rem;
}
  
#body-wrapper {
  width: 260px;
  height: 300px;
  margin: 0 auto;
  padding: 3.5rem;
  background-color: #000;
  border-radius: 15px;
}
  
.wrapper {
  border: 3px solid black;
  margin: 0 auto;
  text-align: center;
  width: 240px;
  height: 300px;
}
  
input[type=text] {
  background-color: #fff;
  text-align: right;
  padding: 1.5 rem;
  margin: 1rem;
  height: 38px;
  width: 200px;
}
  
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr); 
  gap: 5px;
  justify-content: centre;
  align-items: centre;
  margin: 1rem;
}
```

I gave the `buttons` a display of `grid` to position them in rows and columns and a gap of 5px keeps them apart from each other. The margin keeps the buttons contained so they don't exceed the margins.

Next, style the buttons individually.

`styles.css`
```
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
  
body {
  font-size: 1.6rem;
}
  
#body-wrapper {
  width: 260px;
  height: 300px;
  margin: 0 auto;
  padding: 3.5rem;
  background-color: #000;
  border-radius: 15px;
}
  
.wrapper {
  border: 3px solid black;
  margin: 0 auto;
  text-align: center;
  width: 240px;
  height: 300px;
}
  
input[type=text] {
  background-color: #fff;
  text-align: right;
  padding: 1.5 rem;
  margin: 1rem;
  height: 38px;
  width: 200px;
}
  
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr); 
  gap: 5px;
  justify-content: centre;
  align-items: centre;
  margin: 1rem;
}
  
button {
  width: 50px;
  height: 40px;
  border-radius: 40px;
  font-size: 1.8rem;
  background-color: #fff;
  color: #000;
  font-weight: bold;
}
```

With that, you have completed the styling. 