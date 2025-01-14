---
sidebar_position: 6
---

# Doctype And Head Elements
## Doctype
The doctype is the html syntax to specify what html version you are using. Since, you are using Html5, you should add the doctype to your program.
Add this at the very top of your file, it should be the first writeup there:

```
<!Doctype Html>
```

With that, you have the document type of your html, so let's move on to the next part.

Web browsers, search engine bots usually look out for some information when they check document.  First, you need to specify which language you are using. In the case of using Ennglish, you would use `en`, if it was French, you would use `fr`.

So add this under your doctype:
```
<html lang='en'>
</html>
```

## Head elements and external links

Inside the html tag you have written above, there are other details which is to be written in the `head` tag. The `head` tag contains other information which web browsers and other bots alike look for in a web page.


Add the `head` tag inside your `html` tag.

```
<head>

</head>
```

Next, would be to add the meta tags. The meta tags are for informational purposes. `meta charset` is used to inform the browser about the language model in use which is `utf-8`. `utf-8` is a language model which accepts every language unlike ascii which was used by English-speaking countries and few languages.

`http-equiv` and `viewport` works for responsiveness of the site. Responsiveness is a way of making sure the html page is rendered properly on every device no matter the size. 

Add this to your `head` tag

```
<meta charset='utf-8'/>
<meta http-equiv="X-UA-Compatible" content="ie=edge" />
<meta name="viewport"
    content="width=device-width,
    initial-scale=1.0"
>
```

Then you need to add the `title`. Every program has a title which is what displays at the top part of every browser. So add your title

```
<title>My first webpage</title>
```

`link` is used to link your files to your html document.

```
<link rel="stylesheet" 
    href="styles.css"/>
```

For the previous `h1` which you used, you would need to insert it in a `body` element. The `body` element is where you write the main content of your webpage. 
So insert the `h1` in the `body` element:
```
<body>
  <h1>Hello world</h1>
</body>
```

The program should be like this if you have been following up.

```
<!Doctype html>
<html lang='en'>
  <head>
    <meta charset='utf-8'/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport"
    content="width=device-width,
    initial-scale=1.0"
    />
    <title>My first webpage</title>
    <link rel="stylesheet" 
    href="styles.css"/>
  </head>
  <body>
    <h1>Hello world</h1>
 </body>
</html> 
```