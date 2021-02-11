import React from 'react';
// import Accordion from './Accordion';
import Search from './Search';

// const items = [
//     {
//         "title": "What is this?",
//         "content": "This is that.."
//     },
//     {
//         "title": "What are you?",
//         "content": "I am what what you are."
//     }
// ];

const App = () => {
    return (
        <React.Fragment>
            {/* <Accordion items={items} /> */}
            <Search />
        </React.Fragment>
    );
};

export default App;