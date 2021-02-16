// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

import React, { useState, useEffect } from "react";
import Dropdown from './Dropdown';
import Convert from "./Convert";

const options = [
    {
        label: "Africans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    },
];

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div className="">
            <div className="ui form">
                <div className="field">
                    <label> Enter text: </label>
                    <input value={text} onChange={ (e)=>{setText(e.target.value)} } />
                </div>
            </div>
            <Dropdown 
                label="Select a language"
                selected={language} 
                onSelectedChange={setLanguage} 
                options={options} 
            />
            <div className="ui header">
                <Convert language={language} text={text} />
            </div>
        </div>
    );
};

export default Translate;