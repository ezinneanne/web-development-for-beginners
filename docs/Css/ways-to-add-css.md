---
sidebar_position: 2
---

# Ways to add CSS

CSS works by applying rules on elements, that is what web browsers look at when applying styling. If there is no specified styling then the browser would apply its own default styling on a page. 

When you run a web page on a browser, the browser looks for the styling for that web page to render it accordingly. If the webpage has no styling but the user has specified styling, then the browser will apply it. But if there is none at all, the browser applies it's styling which is the default.

**How CSS Rules are applied on a browser**

| Position  | CSS Rules  |
|---|---|
| 1st  | Inline styling  |
| 2nd  | Internal styling  |
| 3rd  | External styling  |
| 4th  | Settings set by the user for that browser |
| 5th  | Browser default settings |



There are three ways to add CSS to a page and they are:

- Inline CSS
- Internal CSS
- External CSS

## Inline CSS

In Inline CSS, you add the css directly to the element. 
For example,

`index.html`
```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset=utf-8" />
      <title>A simple html page</title>
    </head>
    <body style="background-colour:red;">
      <h1 style="colour:white;">Building A Web Page</h1>
      <p>How To Design A Webpage</p>
    </body>
  </html>
```

## Internal CSS 

In this type, you add the `style` attribute in the `head` section.
For example,

`index.html`
```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset=utf-8" />
      <title>A simple html page</title>
      <style>
        body {
          background-colour: red;
        }
        h1 {
          colour: white;
        }
      </style>
    </head>
    <body>
      <h1>Building A Web Page</h1>
      <p>How To Design A Webpage</p>
    </body>
  </html>
```

## External CSS 

In external CSS, the css is placed on a separate page while the link to that page is added to the `head` element.

`index.html`

```
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset=utf-8" />
      <title>A simple html page</title>
      <link rel="stylesheet" href="styles.css"/>
    </head>
    <body>
      <h1>Building A Web Page</h1>
      <p>How To Design A Webpage</p>
    </body>
  </html>
```

In the same folder where your `index.html` is, create a folder named `css` then create a file in the `css` folder and name it `styles.css`.

`styles.css`
```
body {
    background-colour: red;
 }
        
h1 {
   colour: white;
}
```

In external CSS, the `link` element is what you would use to link the CSS. 

The `rel` attribute is a convention to signify what you are linking is a css file hence the name *stylesheet*. 

The `href` attribute contains the path of the css file which in this case, is `styles.css` .

CSS follows the ***top to bottom*** rule so the inline CSS will always override other rules. For example, if I made the background page green using internal CSS and I made the same background page yellow using external CSS. CSS would apply inline CSS over the others. However, it's not the best practice to use inline CSS as it clutters up your html. 

You are advised to practice separation of concerns which is to place all CSS in a separate file, the same thing with JavaScript.
