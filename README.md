# simple-ben-namer

![npm (unscoped)](https://img.shields.io/npm/v/simple-bem-namer.svg)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/simple-bem-namer.svg)
![npm bundle size (minzip)](https://img.shields.io/bundlephobia/minzip/simple-bem-namer.svg)
![issues (open)](https://img.shields.io/github/issues/AkhileshNS/simple-bem-namer.svg)

A custom bem abiding css class name generator primarily targeted towards react developers

## How it works

All you have to do is install the library via npm:

`npm i --save simple-bem-namer`

import it into your project:

````javascript
import {bem} from 'simple-bem-namer'; // ES6 way
const bem = require('simple-bem-namer').bem; 
````

assign a variable and pass an argument into it:

````javascript
const main = bem("Appbar");
const btn = bem("btn");
````

And with that you can simply pass them as functions into css classNames:

````javascript
main()                 // Appbar
main("=title")         // Appbar__title
main("=Sidebar=title") // Appbar__Sidebar__title
btn()                  // btn
btn("+orange")         // btn btn--orange
btn("+orange +large")  // btn btn--orange btn--large
````

A full example is given below

Appbar.js
````javascript
import React from 'react';
import {bem} from 'simple-bem-namer';
import './Appbar.css';

const main = bem('Appbar');
const btn = bem('btn');

const Appbar = props => {
  return <div className={main()}>
    <p className={main("=title")}>Title</p>
    <div className={main("=Sidebar")}>
      <button className={btn("+large +orange")}>Open/Close</button>
    </div>
  </div>;
}

export default Appbar
````

And thats all folks. Nothing fancy here people, just a very simple convenience library meant to make life a tiny bit easier.
