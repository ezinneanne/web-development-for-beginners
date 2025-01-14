---
sidebar_position: 17
---

# Media queries
In this section, you will cover media queries.

Media queries are used to make web pages responsive. When a webpage is responsive, it means you can render the web page on any device.

Media queries were introduced in css3.

Previously, developers used media types in css2. As css3 came out, media queries was introduced to accommodate the drawbacks of css2.
Developers use media queries in css commonly but you can use css in html and javascript as well.

## Using media queries in html
You can apply media queries in html using these elements:
- The `<source>` element
- The `<link>` element 
- The `<style>` element

### The `<source>` element
You can use media queries in the `source` element when specifying the particular size you would want to display an image on specified devices.

Example,

`index.html`
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>A simple html page</title>
    <link rel="stylesheet" href="styles.css"/>
  </head>
  <body>
    <picture>
      <source srcset="img/google_image.jpg" media="(min-width: 1200px)" />
      <!-- this will display for devices with a minimum width of 800px -->
      <source srcset="img/momentum.jpeg" media="(min-width: 800px)" />
      <!-- this will display for devices with a minimum width of 600px -->
      <source srcset="img/michelle.jpg" media="(min-width: 600px)" />
      <!-- this is the default value that will cover other devices not included previously -->
      <img src="img/google_image.png" alt="image of google chrome logo" />
    </picture>
  </body>
</html>
```
When you run the code, it should display the part running for your browser. 

- You can go to your browser settings.
- Search for developer tools in the menu.
- Select the responsive design mode(your browser might give it a different name).
- Use it to view the image using different device sizes.

You will notice that the images change when the view port is at any of the specified widths.

### The `<link>` element
You can use media queries in the `link` element too when linking css files to your html using the `media` attribute. If you made different css files to accommodate various screen sizes, then you can link all of them to load for each of those screen sizes. 

Example;

- Create a folder and save as `css`.
- Create a new css file in the folder and save as `small.css`.
- Create another css file in the same folder and save as `big.css`.
- Create another css file in the same folder and save as `all.css`. 
- In `small.css`, add this code:

```
body {
   background: green;
}
```

- In `big.css`, add this code:

```
body {
   background: red;
}
```

- In `all.css`, add this code:

```
body {
   background: grey;
}
```

In your `index.html`, add this code:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>A simple html page</title>
    <!-- Will load on all devices -->
    <link rel="stylesheet" href="css/all.css" media="all" />
    <!-- Will load on devices with a minimum width of 480px -->
    <link rel="stylesheet" href="css/small.css" media="(min-width: 480px)" />
    <!-- Will load on devices with a minimum width of 600px -->
    <link rel="stylesheet" href="css/big.css" media="(min-width: 600px)" />
  </head>
  <body>
    
  </body>
</html>
```
When you run it in your browser, you will see the different changes when you toggle across the screen sizes via developer tools.

### The `<style>` element
You can use media queries on the `style` element as well. This is mostly done when you are using internal css in html.

Example,

`index.html`
```
<!-- for internal css – ->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>A simple html page</title>
    <style>
      body {
        background-color: green;
      }
    </style>
    
    
    <style media="screen and (min-width: 780px)">
      body {
        background-color: red;
      }
    </style> 
    
  </head>
  <body>
    
  </body>
</html>
```

## Using media queries in javascript
You can use media queries in javascript using the `window.matchMedia()`. The `matchMedia` accepts a parameter which is the string describing the device size.

Example,

`index.html`
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>A simple html page</title>
  </head>
  <body>
    <p id="p1">This will change!</p>

    <script>
      let media = window.matchMedia( '(min-width: 600px)' );
      
      function myfunc(media){
        if (window.innerWidth <= 600) {
          document.getElementById("p1").innerHTML = "This has changed!";
        }
      }

      myfunc(media);
      media.addListener(myfunc);
    </script>
  </body>
</html>
```


## Using media queries in css
You can apply media queries in css in the `@media rule` and `import` rule. Media queries are commonly used in the `@media` rule to resize contents on the web page to fit different device sizes.

Example,

`index.html`
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>A simple html page</title>
    <link rel="stylesheet" href="css/styles.css"/>
  </head>
  <body>
  </body>
</html>
```

`styles.css`
```
body {
  background-color: purple;
}

/* This will load for devices between 600px and 900px width */
@media only screen and (min-device-width: 600px) and (max-device-width: 900px) {
  body {
    background-color: blue;
  }
}
```

This means the colour will change between 600px and 900px width.

You can also use media queries in the `import` rule.

Example,

`index.html`
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>A simple html page</title>
    <link rel="stylesheet" href="css/styles.css"/>
  </head>
  <body>
  </body>
</html>
```

`styles.css`

```
@import url("all.css") screen;
```

However, you should avoid using `import` when writing css. This is because it loads slowly and will decrease your webpage performance. Some browsers also load html and javascript files first before loading `import` in the browser. 

## The media queries syntax
Having covered the various ways you could apply media queries in elements. Now, you will look at the syntax of media queries. So you can understand any media queries you see on a webpage.

Media queries are mostly written like this:

```
@media screen and (min-width: 600px)
```

1. @media - which is the media 
2. screen - which is the media type
3. min-width: 600px - is the feature of the media 

### The `@media`
This is the media rule for using media queries in css.

### media types
This is used to specify the kind of device the media rule should run.

The media types commonly used are:
- screen
- print
- all
- speech

**Screen**

Screen media type works for devices with screens like computers, tablets, and phones.

Example,

`styles.css`
```
@media screen {

}
```

**Print**

Print is intended for medias using print format to display content.

Example,

`styles.css`
```
@media print {

}
```

**All**

All is used to include all types of devices.

Example,

`styles.css`
```
@media all {

}
```

**Speech**
This is used for devices that read out the content on a page. A good example is a screenreader.

Example,

`styles.css`
```
@media speech {

}
```

### Features
Features or media features has to do with the qualities of devices you apply the media rule on. Examples of such features includes orientation,
color, device-width, height, monochrome and so on.
Features are applied to specify or describe details about the device.


