import React from 'react';
import './MusicTable.css'

const MusicTable = (props) => {
    return (
        <div className="table">
            {props.library.map(function(songs){
                return (
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Artist</th>
                            <th>Genre</th>
                            <th>Release Date</th>
                        </tr>
                        <tr>
                            <td>{songs.title}</td>
                            <td>{songs.album}</td>
                            <td>{songs.artist}</td>
                            <td>{songs.genre}</td>
                            <td>{songs.releaseDate}</td>
                        </tr>
                    </table>
                )
            })}
        </div>
      );
}
 
export default MusicTable;