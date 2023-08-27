import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from "../component/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Nhạc Này Dính Phết",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/0/9/4/409486786aa363241686f314b754e61a.jpg"
        },
        {
            id: 2,
            name: "Gác Lại Âu Lo",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/d/d/3/3dd3e03b677de151b1f5090c912bf05b.jpg"
        },
        {
            id: 3,
            name: "Hạnh phúc trong tình yêu là",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/1/6/e/916eb520954a806af48e53d4744afb9a.jpg"
        },
        {
            id: 4,
            name: "Nhạc Chữa Buồn",
            thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/2/5/e/c25edb9c85b3d773cb5bf62bb02f9c43.jpg"
        },
    ]
    return (
        <div>
            <h2>Có thể bạn thích đấy</h2>
            <AlbumList albumListtt={albumList}/>
        </div>
    );
}

export default AlbumFeature;