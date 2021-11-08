import React, {Component} from 'react';
import MusicTable from './MusicTable/MusicTable';
import axios from 'axios';
import NewSong from './NewSong/NewSong';

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
        let response = await axios.delete(`http://127.0.0.1:8000/music/${songs}/`)
        this.setState({
            song: response.data
        })
    }

    createSong = (newSong) => {
        let tempSong = this.state.song
        newSong.id = this.state.song.length + 1
        tempSong.push(newSong)
        this.setState({
            song: tempSong
        })
    }

    render(){
        return(
            <div classname="row">
                <h1>Music Library React Project</h1>
                <div className="col-3">
                    {this.state.song.length > 0 &&
                        <MusicTable library={this.state.song} delete={this.deleteSong}/>
                    }
                </div>
                <div className="col-3">
                    <NewSong createNewSong={this.createSong}/>
                </div>
            </div>
        )
    }
}

export default App;