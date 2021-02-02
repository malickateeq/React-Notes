import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";
import SeasonDisplay from "./components/season/SeasonDisplay";
// import faker from "faker";

class App extends React.Component
{
    // State initiation
    state = {lat: null, errorMessage: ""};

    componentDidMount()
    {
        // Get User's location
        window.navigator.geolocation.getCurrentPosition(
            // 1st Arg: Success Callback
            (position) => 
            {
                this.setState({ lat: position.coords.latitude });
            },
            // 2nd Arg: Failure Callback
            (err) => 
            {
                this.setState({errorMessage: err.message});
            }
        );
    }
    render()
    {
        if(this.state.errorMessage && !this.state.lat)
        {
            return (
                <div>
                    Error: { this.state.errorMessage } 
                </div>
            )
        }
        else if(!this.state.errorMessage && this.state.lat)
        {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                </div>
            )
        }
        else
        {
            return (
                <div>
                    Loading... 
                </div>
            )
        }

    }
}

ReactDOM.render(<App />, document.getElementById("root"));