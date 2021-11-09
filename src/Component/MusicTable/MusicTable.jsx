import React from 'react';
import './MusicTable.css'


const MusicTable = (props) => {
    return (
        <React.Fragment>
            <div className="music_table">
                        <form>
                            <div className="table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Title</th>
                                            <th>Album</th>
                                            <th>Artist</th>
                                            <th>Genre</th>
                                            <th>Release Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.library.map(function(songs){
                                            return (
                                        <tr>
                                            <td>{songs.id}</td>
                                            <td>{songs.title}</td>
                                            <td>{songs.album}</td>
                                            <td>{songs.artist}</td>
                                            <td>{songs.genre}</td>
                                            <td>{songs.releaseDate}</td>
                                            <button onClick={() => props.delete(songs.id)}>Delete Song</button>
                                        </tr>
                                            )})}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    
            </div>
        </React.Fragment>
      );
}
 
export default MusicTable;