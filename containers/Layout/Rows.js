import React, { useState } from 'react';

const Rows = (props) => {
    var cols = [19];

    const { idCol, table, status } = props;
    const handleClick = (e) => {
        if (table[e.target.id] === -1) {
            props.idCell(e.target.id)
        }
    }
    for (var i = 0; i < 19; i++) {
        if (table[`${idCol * 19 + i}`] === 1) {
            cols[i] = <td key={i} id={`${idCol * 19 + i}`} onClick={handleClick}>
                <svg height="22" viewBox="0 0 365.696 365.696" width="22" xmlns="http://www.w3.org/2000/svg">
                    <path className="path_x" d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0" />
                </svg>
            </td>
        } else if (table[`${idCol * 19 + i}`] === 2) {
            cols[i] = <td key={i} id={`${idCol * 19 + i}`} onClick={handleClick}>
                <svg height="25" width="25">
                    <circle cx="13" cy="13" r="8" stroke="#2C3E50" stroke-width="4" fill="white" />
                </svg>
            </td>
        } else {
            cols[i] = <td key={i} id={`${idCol * 19 + i}`} onClick={handleClick}>

            </td>
        }
    }
    return (
        <tr>
            {cols}
        </tr>
    );
}

export default Rows;
