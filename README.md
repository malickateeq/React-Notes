# Introduction

# Install
```js
    // Install React Globally
    npm install -g create-react-app

    // Create A Project
    npx create-react-app my-app
```

## Plugins for VS Code
- ES7 React/Redux/GraphQL/React-Native snippets

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

### Conditional Render JSX
```js
renderContent(){
    if(1 > 2)
    {
        return "Some JSX";
    }
    else
    {
        return "Some JSX";
    }
}
render(
    <div className="craxy">
        { renderContent() }
    </div>
)
```

# Pure JS Things

## `window.location` object
- `window.location` object contains information related to routing.

# General

## Custom Events
```js
// 1. Create and emit an event
const navEvent = new PopStateEvent("popstate");
window.dispatchEvent(navEvent);

// 2. Listen to that event


```

## import / export

> import (The variable we want to assign this import to) from 'Path to the file we are importing'
If `from` is directly a library name then it'll search from node_modules

## Tips
1. Initialize arrays with `[]` instead of `null` in this way you can use default array functions on empty array.
```js
state = { images: [] };
```

## Array Functions
```js
// push() Methos
arr1.push("New item");

// map() Can Iterate an array and return a new array
const newArr = arr1.map( (element) => {
    // If you return true it will add it to new array
    if(element > 10)
        return true;
    
    // Manipulated array element
    if(element > 10)
        return `<b> ${element} is Greate than 10.</b>`;
});


```

## React Events & Functions:

```javascript
    // In JSX
    <button onClick={ this.funcName() }></button> // funcName will invoke on page load, at start
    // VS
    <button onClick={ this.funcName }></button>   // function will only load on Click
    // Inside JS class
    funcName(e){
        console.log(e.target);
    }
    // React all events list
    [React all events list](https://reactjs.org/docs/events.html#supported-events)
```
## React Fragments
- We use React Fragment when we don't want to add a div for including key or any other purpose.
- Its purpose is to hold or wrap the content within.
```js
<React.Fragment key={user.id}>
    ...
</React.Fragment>

```

## Timer in JS
```js
// 1. Set Timer
const id = setTimeout(()=>{}, 5000);
clearTimeout(id);   // id = unique id for this timer.

```

## Event Bubbling
> Event bubbling is the process of sending an event from child to all the way towards the root element.
> Event Execution Ordering: First JS events from most child to the parent THEN React events from child to the parent.
- When the event bubble-up or expand it will look for `onClick` event handler. Whichever element has handled this event will be called or executed.
- All browsers has this capability by default.
- Pro event bubling
```js
// 1. Define event handler for body tag.

// 2. Trigger event from a child element with a reference

// 3. Match reference for body event handler and perform actions accordingly.


```
* Events added but JS' `addEventListener` always called first then React listeners called. 

## Array Destructuring
- Array destructuring is use to get data in variables from an array using a specific syntax.
```js
// An array
const colors = ["red", "green", "blue"];

// Array destructuring syantax
// Remember below it is NOT making an array.
// Inside cost [] we name variables to store corresponding values..
const [ firstElement, secondColor, var3 ] = colors;

console.log(secondColor);       // Output: green
```

## Render a string as JSX content
- A react hidden way to do so.
```js
<span dangerouslySetInnerHTML={{ __html: htmlContentVariable }}></span>
```

## `this` keyword

> Most Important: `this` values / functions in a class will always be equal to the object who is calling the function or attr of a class.
- this keyword is used to reference its class and its properties.
- `this` considered as an objected of the same class where is is referenced.

- You will face this error due to this issue: "Uncaught TypeError: Cannot read property 'xyz' of undefined at x:y"
> Solution: Use arrow functions. They will automatically bind the value of `this` with the class. Or you can manually bind it in the constructor.
```js
constructor()
{
    this.someFunction = this.someFunction.bind(this);
}

// Or call it like so
{ (event) => this.someFunction(event) }
```

```javascript
    // 'this' keyword isn't work in simple functions (this.state)
    simpleFunc(e){
        // this won't work here
        this.state
    }
    arrowFunc = (e) =>{
        // this works here
        this.state;
    }

    // Change data in state
    arrowFunc = (e) =>{
        // Do this good practice
        this.setState({
            var: 'New Value',
        })
        // VS bad practice
        this.state.var = 'New Value';
    }
```
### `this` scope in callback function

```js
// Error
async onSearchSubmit(term)
{
    // Here `this` is props object instead of React class referenced `this`
    // Pro: Now here `this` reference to `props` from where it is called.
    // this.props.onSearchSubmit(term)..
    // Pro Tip: Look left side of calling function or object to know that actual value of this.. 
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
            query: term
        },
        headers: {
            Authorization: "Client-ID XnTOONdIzg04HiRBnEIz2cwYkeEjEBBkF3OHUOT17RY",
        }
    });
    // Error: this.setState is not a function
    this.setState({ images: response.data.results});
}

// To Fix
onSearchSubmit = async () => {
    ...
}

```

# React Components

## Why we use components
1. Components Resuability
2. Components Nesting
3. Components Configurations

## Component Lifecycle
1. constructor()
- Good place for initialization, data load and other one-time setup

2. render() (Content displayed on screen)
- Avoid using anything besides JSX

3. componentDidMount()
- Go place to do data loading! One-time invoke. 
- Recommendation: Prefer componentDidMount() over constructor() for data loading.

4. componentDidUpdate() => render() // Cycle
- Good place to do more data loading when state/props change

5. componentWillUnmount() 
- Good place to do cleanup.

* Other lifecycles which we rarely use.
6. shouldComponentUpdate()
7. getDerivedStateFromProps()
8. getSnapshotBeforeUpdate()


## Types of Components

1. Class Components
- Can produce JSX to show content to the user.
- Can use the Lifecycle Method system to run code at specific points in time.
- Can use the 'state' system to update content on the screen.

* Benefits:
- Easier code organisation, easiet to handle user inputs and lifecycle hooks

```js
class App extends React.Component
{
    // Imp: This render() method executed several times.. Upon data change etcerta..
    render()
    {
        return (
            <div> A class based component </div>
        )
    }
}
```
> `extends React.Component` has many built in functions to use.


2. Functional Components
- Can produce JSX to show content to the user. (In old days)

- (Now) Previously updated: React Functional components be able to use Class components' features via `Hooks System`.
- Can produce JSX to show content to the user.
- Can use the Hooks to run code at specific points in time.
- Can use Hooks to access 'state' system and update content on screen.

```js
const Ap = () => {
    return (
        <div>A functional component</div>
    )
};
```

## Creating a new component
```js
// 1. Create a new file with same name as component name.
import React from "react";
const CommentDetail = () => {
    return (
        <div>JSX</div>
    )
};
// Export to make it available.
export default CommentDetail;

// 2. Import this component anywhere, plug-n-play
import CommentDetail from "./components/CommentDetail";
// Use - Treat it as a JSX tag
// As it will be inside App or root component thus considered Nested component, Parent -> child components
<CommentDetail />
```

## Components Props (Properties)
> Props: System for passing data from a parent component to a child component. Communication between parent and child components.
- Props is a data transferred as an object.

1. Passing a prop to child component
```js
// Component     Name of prop    Value of the prop
<CommentDetail   author=         "Malik"           />

// Passing multiple attributes / props
<CommentDetail 
    attr1="Val1" 
    attr2="val2" 
    attr3="val3" 
/>
```

2. Receiving Props
```js
const CommentDetail = (props) => {
    return (
        <div>{ props.author }</div>
    )
};
```

3. Default Props
- Sometimes we don't receive any props so we must set default values.
- Set default props just above export statement
```js
MyComponent.defaultProps = {
    name: "malik ateeq"
}

```

4. Sending Component in Prop
```js
// Step 1: Send Child Component, wrapped within parent component
<ApprovalCard>
    // You can place here Components, JSX or anything. :) 
    <CommentDetail 
        author="Malik2" 
        timeAgo="Today at 05:36 PM" 
        content="A tedious post" 
        avatar="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
    />
</ApprovalCard>

// Step 2: Use the child component within parent component. In above case 'ApprovalCard'
{ props.children }     // This will render this child component

```

5. Sending functions as props
- You can send these functions in props to any level of hierarchical components and they will still invoke parent function from any level. 
```js
// 1. Sending function as a prop from parent component
testFunction(arg)
{
    console.log(arg);
}
<TestComponent propFunction={this.testFunction} />

// 2. Using prop function in child component
<button onClick={ () => this.props.propFunction("hello") }></button>

```

# State in React
> A state is a JS object that contains data relevant to a component.
- Updating state on a component causes the component to (almost) instantly rerender.
- State must be initialized when a component is created.
- State can only be updated using the function `setState`

1. Initialize State:
```js
// 1. Method #1
// Inside Class component's constructor
constructor(props)
{
    // Initiate React.Component's constructor with props
    super(props);
    
    // Initiate state
    // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO THE STATE..
    this.state = {name: null };
}

// Method #2
// Define state outside constructor.
// It will automatically passed to parent constructor
state = {lat: null, errorMessage: ""};

```

2. Update State:
```js
// Update the state `this` is automatically inherited when we use React Class component
this.setState({ name: "malik ateeq" });
// After that React component will be rerender...


// Never ever do direct assignment
// Cause data inconsistency
// No go!!!!!
this.state.name = "malik ateeq";

```

# Http Requests
- Option1: `axios` 3rd party package. (Recommended)
- Option2: `fetch` built-in in modern browsers.

## Install axios
- `npm install --save axios`
- `--save` flag means, list this package in package.json for future updates/installations.

## Make a Request
- Axios request is an asychronous request.
```js
// Method#1 to handle async request via callback functions.
axios.get("https://api.unsplash.com/search/photos", 
{
    params: {
        query: "Labrador"
    },
    headers: {
        Authorization: "Client-ID XnTOONdIzg04HiRBnEIz2cwYkeEjEBBkF3OHUOT17RY",
    }
})
.then(() => {})
.catch(() => {});

// Method#2 to handle async request via `await` keyword
// Rule#1: Put `async` before the main function.
// Rule#2 Put `await` before making the request.
async theMainfunc()
{
    const response = await axios.get("https://api.unsplash.com/search/photos", 
    {
        params: {
            query: "Labrador"
        },
        headers: {
            Authorization: "Client-ID XnTOONdIzg04HiRBnEIz2cwYkeEjEBBkF3OHUOT17RY",
        }
    });
}

```

## Create a custom client request configurations Or Refactoring

- Create a new file `src/api/unsplash.js`
- Create a preconfigured axios client instance and use.
```js
// 1. Create a client
export default axios.create({
    baseURL: "https://api.unsplash.com",
    // Set Headers
    headers: {
        Authorization: "Client-ID XnTOONdIzg04HiRBnEIz2cwYkeEjEBBkF3OHUOT17RY",
    }
});

// 2. Import and use
const response = await unsplash.get("/search/photos", {
    params: { query: term },
});

```

# React List Rendering

- Rule1: Each list item must have a unique key.

# refs in React

- ref short for reference.
- refs use to access DOM elements directly.

1. Create refs in the constructor.
2. Assign them to instance variable.
3. Then pass to a particular JSX element as prop. 
* No need to use `state` instead of props cause they (refs) are not going to change over time.

1. Create a Ref
```js
constructor(props){
    super(props);
    // Creating a ref
    this.imageRef = React.createRef();
}
```

2. Using the Ref
```js
componentDidMount(){
    // Get the current element
    // Now you can access all attributes of this element
    console.log(this.imageRef.current);
}
```

3. Best use case
- Load, download or fetch a resource from server

```js
this.imageRef.current.addEventListener("load", someCallbackFunction);

```

# Hooks System in React

- Hooks system let us use `Class Component` features and functionalities in `Functional Components`.

1. useState: 
> Function that lets you use *state* in a Functional Component,

2. useEffect:
> Function that lets you use something like *LifeCycle Methods* in a Functional Component.

3. useRef:
> Function that lets you create a *ref* in a Functional Component.

*. useContext, useReducer, useCallback, useMemo, useImperativeHandle, useLayoutEffect, useDebugValue

## Functional Component with Hooks System

- Same way to receive props like in Class Componentss

1. Functional Component ProtoType
```js
import React from 'react';
import Accordion from './Accordion';
const App = () => {
    return (
        <div>
            <Accordion />
        </div>
    )
};
export default App;
```

## `useState` hook in Functional Component

```js
// 1. Import that hook
import { useState } from "react";

// 2. Inside func component
// Imp: Please refer "Array Destructuring" in #General section
// Here we are pull
const [ activeIndex, setActiveIndex ] = useState(null);
setActiveIndex(index);
```
* Explaination of Above Syntax:
- Variable: `activeIndex` is a variable inside State. It can be anything.
- Function: `setActiveIndex` is a function to update / set value of `activeIndex` variable. Again we can name it anything.
- `[ activeIndex, setActiveIndex ]` setting like that make both of them bound to eachother. 
- Function: `useState` function is hook to State system.
- `null` It is the default or initial value for the varialbe `activeIndex`.

*** The above method is repeated in order to add another state variable. ***

### Pro Note
```js
// These lines are inside functional component
const [ activeIndex, setActiveIndex ] = useState(null);
setActiveIndex(index);

// So when we change state via `setActiveIndex(index)` function the entire component will be rerender

// Don't you thik so it will again reset the `activeIndex` value to null again here?
const [ activeIndex, setActiveIndex ] = useState(null);

// Upon re-rendering it will not use this default `null` value rather it will use the `setActiveIndex(index)` index value
// ... on re-rendering
```

## `useEffect` hook in Functional Component
- We can configure `useEffect` hook to run code at following Life Cycle points.
1. When the component is rerendered **for the first time only**.    []
2. When the component is rerendered **for the first time and whenever it rerenders**.   ...nothing...
3. When the component is rerendered **(for the first time) AND (whenever it rerenders AND a piece of data has changed)**.   [data]

```js
import { useEffect } from 'react';
// 1. Run for the first time only
useEffect( () => { ... }, []);

// 2. Runs for the first time and whenever it rerenders
useEffect( () => { ... });

// 2. Runs For the first time, AND (whenever it rerenders AND a piece of data has changed)
useEffect( () => { ... }, [var1, var2]);
``` 
- The function in first argument can not be marked as `async`.
- Put the async function inside `useEffect` to prevent race conditions.

### Make async request in useEffect hook
1. Approach#1 Store then invoke.
```js
// Store the function in a variable
useEffect(() => {
    const search = async () => {
        await axios.get("#");
    }
    search();
}, []);
```

2. Approach#2 Define and invoke (define)(run)
```js
// Define a function inside () then call this function right-away.
useEffect(() => {
    (async () => {
        await axios.get("#");
    })();
}, []);
```

3. Approach#3 Use default promises
```js
useEffect(() => {
    axios.get("#").then(function).catch(function);
}, []);
```

### Use CLEANUP function in `useEffect` hook
- The clean-up function will be **called before rerendering**
- We can use previous state values.
- It will not run for the first render 
```js

useEffect(() => {
    (async () => {
        
        // CLEAN UP function
        return () => {
            console.log("CLEANUP");
        };
    })();
});

```

### Pro: Warning in `useEffect` hook for dependent variables
> Warning: React Hook useEffect has a missing dependency: 'someVariable'. Either include it or remove the dependency array.
- You can append this `someVariable` in useEffect 2nd argument to solve this issue but we don't want to list all the variables there all the time.
- OR, use debouncedValue to queue in changes.
- Video Reference: 12 Folder, 36th Video.


## `useRef` hook in Functional Component

> Direct reference to a DOM element.

1. Create a react reference: `const ref = useRef();`
2. Bind it to a JSX element: `<div ref={ref} class="parent"></div>`
3. Refer / Use it in app: `console.log(ref.current)`

## Custom Hooks
- Best way to create reusable code in a React app (besides components)
- Created by extracting hook-related code out of a function component
- Custom hooks always make use of at least one primitive hook internally

1. Create a Custom Hook
```js
// src/hooks/useVideos.js follow React hooks naming convention.

import {useState, useEffect} from "react";

const useVideos = (defaultValue) => {
    const [var, setVar] = useState(defaultValue);

    changeValueGetData(defaultValue)
    {
        // some fetching
        setVar();
    }
    // api request.
    // set var data.

    // Method#1: Return in Array values as in React
    return [videos, changeValueGetData];

    // Method#2 Return in object mostly used in JS community
    return {videos, changeValueGetData};
};
export default useVideos;
```

2. Use Custom Hook
```js
import useVidoes from "src/hooks/useVideos"

const [videos, changeValueGetData] = useVideos("defaultValue");
// OR
const object = useVideos("defaultValue");

```

# React Deployment

> Create-React-App => Deployment Bundle (index.html, bundle.js, images.jpg*, index.css) => (Host) Upload previous to Deployment Target => LIVE!!!

* For free hosting of static sites. 1. VERSEL, 2. NETLIFY (Video: 15/2)

# React Router

There're four different packages from React for routing

1. `react-router`: Core navigation library - we don't install this manually
2. `react-router-dom`: Navigation for DOM-based apps. We use mostly in web applicaitons.
3. `react-router-native`: Navigation for react native apps
4. `react-router-redux`: Binding between Redux and React Router (Not necessary, ignore it exists) 

### Set Up React Router Package

1. Install the package: `npm install react-router-dom`

2. Setup in App.js
```js
import {BrowserRouter, Route, Link} from "react-router-dom";

const App = () =>
{
    return (
        <div>
            <BrowserRouter>
                <div>
                    // Navigation Links
                    <Link to="/" > Page One </Link>
                    <Link to="/page-two" > Page Two </Link>

                    // Render Route Components Here
                    <Route path="/" exact component={PageOne} />
                    <Route path="/page-two" component={PageTwo} />
                </div>
            <BrowserRouter/>
        </div>
    );
}
```

### BrowserRouter (A component)
- listens to `History` for changes to the URL.
- Within this component the Router components will be rendered.
- Keeps track of the address bar in your browser.
- Renders components according to URL patterns.
- BroserRouter component also communicates with the Router.

### Route (A component)
- Route components communicates with the BrowserRouter and decides whether to render a component or not.
- Following are the Route component props explaination.
1. `path`: It decides whether to render a component or not depending upon the URL pattern
2. `exact` keyword: It will match exact URL pattern with `path`. The default is to check for if URL pattern contains `path`.
3. `component`: It renders this component upon matching the path.

### Prop notes
- If two or more routes have same `path` then they all will be rendered.
- Without `exact` keyword path="/users" and path="/users/*" will always render path="/users" component whatsoever.
- Mentioning any property in JSX like `exact` as porp is just like `exact={true}` in JSX.

### Link
- Link is just like <a> tag in HTML. It works but will reload the react app entirely in browser. It will trigger Route.
- All Route Links must be within BrowserRouter component.
```js
<Link to="/users" > Users </Link>
```

## Router Types

- It just differentiates on the basis of deciding factor of the `path` prop.
- It really matters on the time of **deployment** of React App.

### Browser Router
- Browser Router is the default router which we have seen above.
- Uses everything after the TLD (.com, .net etc) or the port as the `path`
- e.g; URL="localhost:3000/pagetwo" here path="/pagetwo" 

- On traditional server /xyz returns `404` upon not found but the react-server return `index.html` not 404.
- On deployment make sure server return `indx.html` upon 404 not found cause it (request) will be handle on client side.


### Hash Router
- Uses everything after a # as the `path`
- Automatically put # after TLD.
- e.g; URL="localhost:3000/#/pagetwo" here path="/pagetwo"

- The reason of setting # is that we will configure our server to not look after the #
- Pro: Upon "localhost:3000/#/pagetwo" the network request will be "localhost:3000/" the "#/pagetwo" part skipped. ;) 
- You can use this on GitHub pages to avoid server request interception.

### Memory Router
- Don't use the URL to track navigation.
- One URL for all components.
- e.g; URL="localhost:3000/" here path="/pagetwo"
