import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import axios from "axios";

const Search = (props) => 
{
    const [term, setTerm] = useState("pakistan");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);


    useEffect( () => 
    {
        // Make an async request
        const search  = async () => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term,
                }
            });
            
            if(data.query.search)
            {
                console.log(data.query.search);
                setResults(data.query.search);
            }
        };
        const timeoutId = setTimeout(()=>{
            if(term)
                search();
        }, 1000);

        // CLEAN UP function
        return () => {
            console.log("CLEANUP");
            clearTimeout(timeoutId);
        };
    }, [term]);

    const renderedResults = results.map((result, index) => {
        return (
            <div className="item" key={index}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui botton">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        { result.title }
                    </div>
                    <div className="">
                        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term:</label>
                    <input value={term} onChange={ e => setTerm(e.target.value) } className="input" />
                </div>
            </div>
            <div className="ui celled list">
                { renderedResults }
            </div>
        </div>
    )
}
export default Search;