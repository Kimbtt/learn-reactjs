import React, {useState} from 'react';
import PropTypes from 'prop-types';
//
// ChangeColor.propTypes = {
//
// };

function ColorBox(props) {
    const [color, setColor] = useState("")

    return (
        <div>
            {color}

            <button onClick={() => (setColor(("Black")))}>Change to Black</button>
            <button onClick={() => (setColor(("While")))}>Change to While</button>
        </div>
    );
}

export default ColorBox;