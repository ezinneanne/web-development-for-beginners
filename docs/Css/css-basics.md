---
sidebar_position: 1
---

# CSS intro
You have covered the key points of Html. Now, you are going to cover CSS, what is all about and style web pages with it. Are you excited? Let's begin.


## What is CSS all about ?
CSS is an acronym meaning Cascading Style Sheets. This means CSS works from top to bottom in styling pages. CSS has evolved from CSS1 to CSS3. W3C, the body responsible for maintaining CSS has released CSS4. But CSS4 does not have a unique and organized specification and it is not supported by web browsers. Developers are building with websites with CSS3 and that is what you will learn in this CSS session.

Html is about the structure of a page while CSS is about the presentation. 
CSS is all about styling and it has an attribute called `style` and you could also link it in a document by adding `stylesheet` to the `href` attribute.

This the syntax:

```
selector {
  property: value
}
```

CSS uses a selector to access html elements and apply their respective styling. You will learn selectors later in this doc. CSS consists of properties and these have values. These properties is what CSS uses to style web pages.

There are so many properties in CSS which include `color`, `display`, `margin`, `padding` and so on.

To illustrate CSS, I will write a simple html page.
Save this in your `index.html` file

`index.html`
```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset=utf-8" />
      <title>A simple html page</title>
    </head>
    <body>
      <h1>Building A Web Page</h1>
      <p>How To Design A Webpage</p>
    </body>
  </html>
```

To colour the background of the web page red, I would need to add CSS.

Create a new file and save as `styles.css` in the same directory as your `index.html` file.

`styles.css`
```
body {
  background-color: red;
}
```

Earlier, you noted that CSS accesses html elements through a selector. So in this example, CSS is using the `body` element as a selector to apply styling on the page. This means the styling will cover only the `body` element. If you select `p` element for styling then the styling would be applied on the `p` element only.

In the next session, you are going to cover fully how to link or add CSS styling to a webpage.


