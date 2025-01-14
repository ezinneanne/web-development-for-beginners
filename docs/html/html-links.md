---
sidebar_position: 15
---

# Html Links
Links are very common in a webpage. They can be in a text, an image, or any other html element. 

There are about five ways to add links in html and they are: 
1. External links.
2. Internal links.
3. Links on the same page.
4. Images as links. 
5. Email links. 

You can add links using the `a` tag and the `href` attribute which describes the link address. 
Links also accept a `target` attribute which specifies how it should open.
The target attribute accepts four values which are:
- The `_self` value - this will make the link to open in the same window you clicked on. It is the default value.
- The `_blank` value - this will make the link to open in a new window.
- The `_parent` value - this will make the link to open in a parent window.
- The `_top` value - this will make the link to open in the full window.

## External Links
External links are links of sites on the internet. They are also called absolute links. They usually contain `https` or `www`. 
For example, if I wish to get a link for google homepage.

Example,

`index.html`
```
<a href='https://www.google.com'>This is an external link</a>
```

When you run this on your browser and click on the link. It will take you to the home page and you would have to go back to access the previous page. But, with the `target` attribute, you can make the link open up on a new tab.


Example,

`index.html`
```
<a href='https://www.google.com' target="_blank">This is an external link</a>
```
When you run the code and click on the link, it will open up on a new tab.


## Internal Links
Internal links are links of documents in your local machine. You can link another webpage even those on a different file path.


For example, to link an external css file to your html document.


Example,

`index.html`
```
<link rel="stylesheet" href="styles.css"/>
```
This css file is in the same path as the html file. 
If it was in a different css folder, then this is how I would link it:


`index.html`
```
<link rel="stylesheet" href="css/styles.css"/>
```
So to specify internal links, you should know the path of file you are inserting as a link. Else, you will get an error.


## Links on the same page 
As the name implies, they are links on the same page or different sections of a webpage. To specify links on the same page, place an ID name in the `href` attribute.

Example,

`index.html`
```
<body>
    <header id="header">
      <h1>This is a website</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <p> 
    lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad libero tempora aliquid. Ex, dolorem. Commodi qui repudiandae ab adipisci velit, neque dicta et accusantium quasi nisi placeat suscipit aut rem natus ducimus quaerat minima. Dignissimos dicta, ipsam doloremque quam necessitatibus rerum quas minima ad qui ducimus incidunt. Natus, ullam ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non dolor, soluta quam illum illo libero amet harum impedit quisquam?
    </p>
    <footer><a href="#header">Back to Top</a>
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
</body> 
```
When you click on `Back to top`, it will take you to the header section immediately.


## Images as links
You can use images as links by adding the `img` element inside the `a` element.

Example,

`index.html`
```
<a href="https://www.google.com"> <img src="img/google_image.jpg" width="100%" alt="Google homepage"/></a>
```
In this example, the webpage will display the image. When you click on the image, it will direct you to the Google homepage. 


## Email Links
You can also create a link with an email address using the `mailto:` scheme in the `href` attribute of the `<a>` element.

Example,

`index.html`
```
<a href="mailto:example@mail.com">Send an email</a>
```
You can use an actual email for this example and when you click on it. It will direct you to the email address box to send a message.


So, these are the various ways you can create links in html. You can also add links to an audio or video element just like in an image. When a user clicks on the link, it will open up on another page.

