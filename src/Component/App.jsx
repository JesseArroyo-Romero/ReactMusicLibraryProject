import React, {Component} from 'react';
import MusicTable from './MusicTable/MusicTable';
import axios from 'axios';
import NewSong from './NewSong/NewSong';
import SearchBar from './SearchBar/SearchBar';
import './App.css'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            song: []
        }
    }
    componentDidMount(){
        this.getSong()
    }

    getSong = async() => {
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            song: response.data
        })
    }

    deleteSong = async(songs) => {
        await axios.delete(`http://127.0.0.1:8000/music/${songs}/`)
       
        }
    

    createSong = async (newSong) => {
        await axios.post('http://127.0.0.1:8000/music/', newSong);
        this.getSong();
    }

    filterSongs = (searchTerm) => {
        this.getSong()
        let filteredSongs = this.state.song.filter(async function(foundSong) {
            if (foundSong.title.includes(searchTerm) || foundSong.album.includes(searchTerm) || foundSong.artist.includes(searchTerm) || foundSong.genre.includes(searchTerm) || foundSong.release_date.includes(searchTerm)){
                let songs = await axios.get("http://127.0.0.1:8000/music/", foundSong)
                return songs;
            } else {
                return false;
            }
        })
        this.setState({
            song: filteredSongs
        })
    }

    render() {
        return(
            <div classname="row">
                <h1>Music Library React Project</h1>
                <div className="col-lg-4">
                    {this.state.song.length > 0 &&
                        <MusicTable library={this.state.song} delete={this.deleteSong}/>
                    }
                </div>
                <div className="col-md-4">
                    <NewSong createNewSong={this.createSong}/>
                </div>
                <div className="col-sm-4">
                    <SearchBar searchTerm={this.filterSongs}/>
                </div>
            </div>
        )
    }
}

export default App;