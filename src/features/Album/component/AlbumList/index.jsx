import React from 'react';
import PropTypes from 'prop-types';
import Album from "../Album";
import "./style.css"

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function AlbumList({albumListtt}) {
    return (
        <div>
            <ul className="album-list">
                {albumListtt.map(album => (
                    <li key={album.id}>
                        <Album album={album}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;