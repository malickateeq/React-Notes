// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => 
{
    const [translated, setTranslated] = useState("");
    const [debouncedtext, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(()=>{
            setDebouncedText(text);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(()=>
    {
        const doTranslation = async () => 
        {
            const {data} = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: debouncedtext,
                    target: language.value,
                    key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        };

        doTranslation();

    }, [language, debouncedtext]);   // whenever language and text changes

    return (
        <div className="">
            { translated }
        </div>
    );
};

export default Convert;