import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({options, selected, onSelectedChange}) => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.addEventListener("click", (event) => {

            if(ref.current && ref.current.contains(event.target)){
                // Return here and dont go next and close.
                return;
            }
            setOpen(false);
        }, { capture: true });
    }, []);

    const ref = useRef();

    const renderedOptions = options.map( (option,index) => {
        if(option.value === selected.value)
        {
            return null;
        }
        return (
            <div 
                key={index} 
                className="item"
                onClick={ () => { onSelectedChange(option) }}
            >
                { option.label }
            </div>
        );
    });
    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={()=>{ setOpen(!open) }} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;