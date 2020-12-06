import React from 'react';

const Cells = (props) => {
    var rows = [19];
    const { idRow } = props;
    for (var i = 0; i < 19; i++) {
        rows[i] = <td id={`${idRow * i}-${i}`} ></td>
    }
    return (
        <tr>
            {rows}
        </tr>
    );
}

export default Cells;
