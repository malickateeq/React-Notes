import React from "react";

const getSeason = (lat, month) =>
{

}

const SeasonDisplay = (props) => 
{
    return (
        <div className="ui card">
            <div className="content">
                latitude: { props.lat }
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    )
};

export default SeasonDisplay;