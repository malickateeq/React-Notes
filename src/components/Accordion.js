import React, { useState } from 'react';

const Accordion = (props) => 
{
    const [ activeIndex, setActiveIndex ] = useState(null);

    const onTitleClick = (index) =>
    {
        setActiveIndex(index);
    };

    const renderedList = props.items.map((item, index) => 
    {
        return <div key={item.index}>
            <div 
                className="title active"
                onClick={ () => { onTitleClick(index) } }
            >
                <i className="dropdown icon"></i>
                { item.title }
            </div>
            <div className="content active">
                <p> { item.content } </p>
            </div>
        </div>;
    });
    return (
        <div className="ui styled accordion">
            { renderedList }
            <h1> { activeIndex } </h1>
        </div>
    )
}
export default Accordion;