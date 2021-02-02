# Introduction

# Install
```js
    // Install React Globally
    npm install -g create-react-app

    // Create A Project
    npx create-react-app my-app
```

# What is?
> ***Babel:*** Babel is an open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.

> ***Webpack:*** webpack is an open-source JavaScript module bundler. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. webpack takes modules with dependencies and generates static assets representing those modules.

* React Component:
A react component is a Function / Class that produces HTML using JSX and Handles User Events.

# Bootstrapping Life Cycle
1. `src/index.js`
2. `ReactDOM` render root component to an HTML root element.

- App.js => injected in index.html

# JSX (JavaScript Extension)
- Its a HTML-like JavaScript code -> Make calls to JavaScript with libraries to convert it to HTML-JS.

### A few differences between JSX and HTML
1. Inline styling in JSX: 
    `style={{ backgroundColor: 'red'; font-size: '30px'; }}` instead of `style="background-color: red; font-size: 30px;"`
    It accepts Styles object. { }
    Remove - and make the immediate letter Uppercase.
    Values must be in string or quotes

2. Adding a class to HTML element
    User `className` instead `class`
    The reason is to avoid JavaScript's `class` keyword conflict with HTML class.

3. JSX can reference JS variables.
    { variableName }
    { myfunction() } // Will execute / call upon page load
    { myfunction }  // Will execute on click

4. And a few differences other. Like `for` in HTML is `htmlFor` in JSX. 
    It will only generate warnings nothing will crash. 

### JSX Variables, Arr, and Obj

    const var1 = "test1";
    const arr1 = ["test1", "test2"];
    const obj1 = [test: "test1"];

    // Print variables
    { var1 } { arr1 } { obj1.test }

# General

## import / export

> import (The variable we want to assign this import to) from 'Path to the file we are importing'
- If from is directly a library name then it'll search from node_modules

# React Components

