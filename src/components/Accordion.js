import React, { useState } from 'react';

const Accordion = (props) => 
{
    const [ activeIndex, setActiveIndex ] = useState(0);

    const onTitleClick = (index) =>
    {
        setActiveIndex(index);
    };

    const renderedList = props.items.map((item, index) => 
    {
        const active = index === activeIndex ? "active" : "";
        return <div key={item.index}>
            <div 
                className={`title ${active}`}
                onClick={ () => { onTitleClick(index) } }
            >
                <i className="dropdown icon"></i>
                { item.title }
            </div>
            <div className={`content ${active}`}>
                <p> { item.content } </p>
            </div>
        </div>;
    });
    return (
        <div className="ui styled accordion">
            { renderedList }
        </div>
    )
}
export default Accordion;