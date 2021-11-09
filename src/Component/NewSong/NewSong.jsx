import React, {Component} from 'react';
import './NewSong.css'


class NewSong extends Component {
    constructor(props){
        super(props)
            this.state = {
                id: '',
                title: '',
                album: '',
                artist: '',
                genre: '',
                release_date: '',
            }
        }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSong(this.state)
    }
    
    render() {
        return (
            <div className="formCreate">
                <form onSubmit={this.handleSubmit}>
                    <label>Song Title:</label>
                    <input type="text" name='title' onChange={this.handleChange} value={this.state.title}/>
                    <label>Album:</label>
                    <input type="text" name='album' onChange={this.handleChange} value={this.state.album}/>
                    <label>Artist:</label>
                    <input type="text" name='artist' onChange={this.handleChange} value={this.state.artist}/>
                    <label>Genre:</label>
                    <input type="text" name='genre' onChange={this.handleChange} value={this.state.genre}/>
                    <label>Release Date:</label>
                    <input type="text" name='release_date' onChange={this.handleChange} value={this.state.release_date}/>
                    <button className="button" type="submit">Create Song</button>
                </form>
            </div>
        )
    }
}

export default NewSong