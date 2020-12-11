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
                {props.footer_table}
                {props.footer_table}
            </div>
        </>
    );
}

export default PlayRoom;
