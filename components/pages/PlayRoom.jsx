import React from 'react';

const PlayRoom = (props) => {
    return (
        <>
            <div className='body'>
                <div className='gameRoom'>
                    <table>
                        <tbody>
                            {props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PlayRoom;
