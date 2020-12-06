import React from 'react';
import Cells from '../Layout/Cells';

const PlayRoom = (props) => {
    var cols = [19];
    for (var i = 0; i < 19; i++) {
        cols[i] = <Cells idRow={i}></Cells>
    }
    return (
        <>
            <div className='body'>
                <div className='gameRoom'>
                    <table>
                        <tbody>
                            {cols}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PlayRoom;
