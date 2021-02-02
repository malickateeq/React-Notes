import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Malik2" 
                timeAgo="Today at 05:36 PM" 
                content="A tedious post" 
                avatar="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));