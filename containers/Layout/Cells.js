import React from 'react';

const Cells = (props) => {
    var cols = [19];
    const { idCol } = props;
    for (var i = 0; i < 19; i++) {
        cols[i] = <td id={`${idCol}-${i}`} ></td>
    }
    return (
        <tr>
            {cols}
        </tr>
    );
}

export default Cells;
