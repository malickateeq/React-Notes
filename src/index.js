import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));