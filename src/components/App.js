import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
    {
        "title": "What is this?",
        "content": "This is that.."
    },
    {
        "title": "What are you?",
        "content": "I am what what you are."
    }
];
const options = [
    {
        "label": "Red color",
        "value": "red"
    },
    {
        "label": "30 Shades of blue",
        "value": "blue"
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <React.Fragment>

            <Header />

            <Route path="/">
                {/* This prop will passed as `children` in Route component */}
                <Accordion items={items} />
            </Route>

            <Route path="/list">
                <Search items={items} />
            </Route>

            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>
            
        </React.Fragment>
    );
};

export default App;