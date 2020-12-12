import React from 'react';

const PlayRoom = (props) => {
    return (
        <>
            <div className='body'>
                <div className='gameRoom'>
                    <table>
                        <tbody>
                            {props.table}
                        </tbody>
                    </table>
                </div>
                {props.footer_table}
            </div>
        </>
    );
}

export default PlayRoom;
