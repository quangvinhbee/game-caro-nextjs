import React from 'react';
import Layout from '../../components/Layout/Layout'
import Layout_Menu from '../../components/Layout/Layout_Menu'
import PlayRoom from '../../components/pages/PlayRoom';

const PlayRoomPage = () => {
    return (
        <>
            <Layout title="Playing..."></Layout>
            <Layout_Menu></Layout_Menu>
            <PlayRoom></PlayRoom>
        </>
    );
}

export default PlayRoomPage;
