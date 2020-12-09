import React, { useState } from 'react';

const Rows = (props) => {
    var cols = [19];
    const { idCol, table } = props;
    const handleClick = (e) => {
        if (table[e.target.id] === -1) {
            var audio2 = new Audio('/sound/chess.wav');
            audio2.load();
            audio2.play();
            props.idCell(e.target.id)
        }
    }
    for (var i = 0; i < 19; i++) {
        cols[i] = <td key={i} id={`${idCol * 19 + i}`} onClick={handleClick}>{table[`${idCol * 19 + i}`] !== -1 ? 'x' : ''}</td>
    }
    return (
        <tr>
            {cols}
        </tr>
    );
}

export default Rows;
