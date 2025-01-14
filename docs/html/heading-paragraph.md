---
sidebar_position: 7
---

# Headings And Paragraphs
The Headings and paragraphs elements are used to structure and present text on a web page.

This section will cover the main elements associated with headings and paragraphs and they are:
- Headings h1 to h6.
- Paragraphs 
- The `header` element.
- The `footer` element.


## Headings h1 to h6 
Html provides six heading elements from h1 to h6. The headings have a hierarchical structure with `h1` being the highest and `h6` being the smallest.

Example,

```
<h1>This is the first</h1>
<h2>This is the second</h2>
<h3>This is the third</h3>
<h4>This is the fourth</h4>
<h5>This is the fifth</h5>
<h6>This is the sixth</h6>
```


When you enter this in your browser, it should show the hierarchical structure of the headings. You use the headings when you want to create a title or subtitles depending on the level of the content.


## Paragraphs
The paragraph element, represented by the `<p>` tag, is used to enclose and define a block of text or a paragraph within a web page.
It is used to create paragraphs or begin a sentence on a new line.
So create a paragraph:


```
<p>This is a paragraph</p>
```


Now let's move to the `header` element.


## The `header` element
The `header` element represents a container for introductory content at the top of a web page or section. The `header` element carries semantic meaning indicating that the content within it represents the introductory section of the webpage. The content in the `header` element can contain elements such as `h1` for page title, `nav` for navigation menus and so on.

Example,

`index.html`
```
<header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>
```
This represents a typical usage of the `<header>` element to provide introductory content and navigation for the web page.


## The `footer` element 
The `footer` element and header elements are similar. The main difference between them is that the footer is usually at the bottom of a webpage or at specific sections to represent the footer section of that page. It contains information such as copyright notices, contact notices, navigation links and other details relevant to the footer section.


Example,

`index.html`
```
<footer>
  <p>&copy; 2023 My Website. All rights reserved.</p>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</footer>
```
Now, this is how to use the `footer` element. 
These are the elements html uses to structure text/content on a webpage.
