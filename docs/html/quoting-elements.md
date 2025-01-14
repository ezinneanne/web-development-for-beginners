---
sidebar_position: 12
---

# Quoting Elements
Quoting elements are elements you could use to write quotes in Html. This includes short and long quotes.

The quoting elements are,
- The `blockquote` element 
- The `cite` element 
- The `quote` element 

## The `blockquote` element
As the name implies, the `blockquote` element is a block element for quotes in Html. The element begins on a new line and covers the width of its viewport.  The output of the `blockquote` is usually indented. 

The `blockquote` is meant for long quotes.

Example,

`index.html`
```
<blockquote>
Continuous Integration (CI) is a process where team members push changes they make to the software to a central repository.
</blockquote>
```

When you run this in your browser, you will see the indentation. Some browsers will just give a small paragraph by the left.

### `blockquote` with `cite` attribute 
`blockquote` element requires an attribute to cite the source of your quotes. Most times, those links to the quotes may be outdated. So it's important to add the links to inspect the source often.

To add the `cite` attribute,

Example,

`index.html`
```
<blockquote cite="https://link.medium.com/lJTnNup1Dyb">
Continuous Integration (CI) is a process where team members push changes they make to the software to a central repository.
</blockquote>
```

## The `cite` element
When adding quotes, you use the cite element to add the source of your quotes. This is usually in plain text.
In the previous example using blockquote element, you can use `cite` element to add the source of the quote in plain text.

Example,

`index.html`
```
<block quote cite="https://link.medium.com/lJTnNup1Dyb">
Continuous Integration (CI) is a process where team members push changes they make to the software to a central repository.
<cite>Continuous Integration, Delivery, and Deployment: Best Practises, Benefits, and Tools</cite>
</block quote>
```

Always use `cite` element for the title of quotes. 

## The `q` element
The `q` element contains short quotes. 
The `q` element is an inline element and does not cover it's entire container.

When you use the `q` element to write quotes and you run it in your browser. It surrounds the text in double quotes.

Example,

`index.html`
```
<q>
Continuous Integration (CI) is a process.
</q>
```

Like the `blockquote`, the `q` element accepts use of the `cite` attribute and `cite` element.

### The `q` element with the `cite` attribute
Using the cite attribute, you can add the link of the quote to the element. Like you did previously in the `blockquote` element.

Example,

`index.html`
```
<q cite="https://link.medium.com/lJTnNup1Dyb">
Continuous Integration (CI) is a process.
</q>
```

### The `q` element with the `cite` element 
With the `cite` element you can add the title of the work you cited, just like in `blockquote`.

Example,

`index.html`
```
<q cite="https://link.medium.com/lJTnNup1Dyb">
Continuous Integration (CI) is a process.
</q>
<cite>Continuous Integration, Delivery, and Deployment: Best Practises, Benefits, and Tools</cite>
```

**Note: the `q` element is for quotes from a written work. It is not meant for fun words or sarcastic words. You could use double quotes for that.**

