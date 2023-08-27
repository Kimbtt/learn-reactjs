import React from 'react';
import PropTypes from 'prop-types';
import albumList from "../AlbumList";
import "./style.css"

Album.propTypes = {
    album: PropTypes.array.isRequired,
};

function Album({album}) {
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.thumbnailUrl} alt={album.thumbnailUrl}/>
            </div>
            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default Album;