import React from 'react';
import Layout from '../../components/Layout/Layout'
import Layout_Menu from '../../components/Layout/Layout_Menu'
import PlayRoom from '../../components/pages/PlayRoom';
import Cells from '../Layout/Cells';

const PlayRoomPage = () => {
    var rows = [19];
    for (var i = 0; i < 19; i++) {
        rows[i] = <Cells idCol={i}></Cells>
    }
    return (
        <>
            <Layout title="Playing..."></Layout>
            <Layout_Menu></Layout_Menu>
            <PlayRoom>
                {rows}
            </PlayRoom>
        </>
    );
}

export default PlayRoomPage;
