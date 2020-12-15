import React from 'react';
import Score_board from '../../components/Layout/Score_board';


const Score_board_Layout = (props) => {
    const { status } = props;
    return (
        <>
            <Score_board status={status}></Score_board><Score_board status={status}></Score_board>
        </>
    );
}

export default Score_board_Layout;
