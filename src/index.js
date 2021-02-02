import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
// import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Malik2" 
                    timeAgo="Today at 05:36 PM" 
                    content="A tedious post" 
                    avatar="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                />
            </ApprovalCard>

        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));