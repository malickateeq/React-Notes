import React from "react";
import faker from "faker";

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Malik
                </a>
                <div className="metadata">
                    <span className="date">17 Feb 2021</span>
                </div>
                <div className="text">
                    Test comment will 
                </div>
            </div>
        </div>
    )
};

export default CommentDetail;