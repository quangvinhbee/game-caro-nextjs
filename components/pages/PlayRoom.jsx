import React from 'react';

const PlayRoom = () => {
    var table = [];
    for (var i = 0; i < 19; i++) {
    }
    return (
        <>
            <div className='body'>
                <div className='gameRoom'>
                    <table>
                        <tbody>
                            {table}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PlayRoom;
