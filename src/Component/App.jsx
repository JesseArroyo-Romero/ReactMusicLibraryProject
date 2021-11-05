import React, {Component} from 'react';
import MusicTable from './MusicTable/MusicTable';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            song: [
                {
                title: 'test',
                album: 'test',
                artist: 'test',
                genre: 'test',
                releaseDate: 'test'
                },
                {
                title: 'test',
                album: 'test',
                artist: 'test',
                genre: 'test',
                releaseDate: 'test'
                }
            ]
        };
    }

    render(){
        return(
            <div className="col-3">
                <h1>Music Library React Project</h1>
                <MusicTable library={this.state.song} />

            </div>
        )
    }
}

export default App;