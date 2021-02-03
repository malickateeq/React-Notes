import React, { Component } from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export default class App  extends Component 
{
    // Initialize the state object
    // Initialize it with array to use array functions like map and avoid errors
    state = { images: [] };
    
    onSearchSubmit = async (term) =>
    {
        // Here `this` is onSearchSubmit function event
        const response = await unsplash.get("/search/photos", {
            params: { query: term },
        });
        this.setState({ images: response.data.results});
    }
    render()
    {
        return (
            <div className="ui container" style={{ marginTop: "20px" }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}
