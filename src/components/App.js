import React, { useState } from 'react';
// import Accordion from './Accordion';
// import Search from './Search';
import Dropdown from './Dropdown';

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

const options = [
    {
        label: "The color Red",
        value: "red"
    },
    {
        label: "The color Green",
        value: "green"
    },
    {
        label: "A shade of blue",
        value: "blue"
    },
];

const App = () => {

    const [selected, setSelected] = useState(options[0]);
    return (
        <React.Fragment>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown 
                selected={selected} 
                onSelectedChange={setSelected} 
                options={options} 
            />
        </React.Fragment>
    );
};

export default App;