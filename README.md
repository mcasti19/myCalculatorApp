# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot


### Links

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

- I learned very interesting things, I am starting and I have made many mistakes, like skipping basic exercises because I think they are very basic, but I realized that it is vital to really learn. Without the bases everything else will be very unstable and unreliable.

To see how you can add code snippets, see below:

```html
<div class="theme-selector">
    <input type="radio" id="theme-1" name="theme" value="theme-1" checked>
    <label for="theme-1"></label>
    <input type="radio" id="theme-2" name="theme" value="theme-2">
    <label for="theme-2"></label>
    <input type="radio" id="theme-3" name="theme" value="theme-3">
    <label for="theme-3"></label>
</div>
```
```css
.proud-of-this-css {
  .theme-selector input[type="radio"]:checked+label {
      background-color: var(--key-red-key-background-toggle);
      color: #fff;
}

}
```
```js
const proudOfThisFunc = () => {
  function realizarOperacion ( a, b, operacion ) {
    switch ( operacion ) {
        case '+': return parseFloat( a ) + parseFloat( b );
        case '-': return parseFloat( a ) - parseFloat( b );
        case '*': return parseFloat( a ) * parseFloat( b );
        case '/': return parseFloat( a ) / parseFloat( b );
        default: return '';
    }
}
}
```
### Continued development


### Useful resources

 - I didn't use any extra resources, just the basics, HTML, CSS, Javascript


## Author

- Frontend Mentor - [@mcasi19](https://www.frontendmentor.io/profile/mcasi19)


## Acknowledgments
- I don't think I have tips for others, rather I'm learning and any tip that can be offered to me will always be highly valued. 
- The only thing I can tell you is to practice a lot, practice and practice is the key to assimilate knowledge