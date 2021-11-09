import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    handleChange = (searchTerm) => {
        this.setState({
            [searchTerm.target.name]: searchTerm.target.value
        })
    }

    handleSubmit = (searchTerm) => {
        searchTerm.preventDefault()
        this.props.searchTerm()
    }

    render() {
        return(
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label>Search Music Library: </label>
                    <input name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar