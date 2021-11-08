import React from 'react';
import './DeleteSong.css'

const DeleteSong = (props) => {
    return ( 
        <form onSubmit={props.deleteSong}>
            <button type="submit">Delete Song</button>
        </form>
     );
}
 
export default DeleteSong;
