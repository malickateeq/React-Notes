import React, { Component } from 'react'

export default class SearchBar extends Component 
{
    state = { term: '' };

    onFormSubmit = (evt) =>
    {
        evt.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }
    render() 
    {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={ (e) => this.setState({ term: e.target.value }) }></input>
                    </div>
                </form>
            </div>
        )
    }
}
