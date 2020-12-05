import React from 'react';
import JoinRoom from '../../components/pages/JoinRoom'
import Layout from '../../components/Layout/Layout'
import Layout_Menu from '../../components/Layout/Layout_Menu'

const JoinRoomPage = () => {
    return (
        <>
            <Layout title="Tham Gia Phòng!"></Layout>
            <Layout_Menu></Layout_Menu>
            <JoinRoom></JoinRoom>
        </>
    );
}

export default JoinRoomPage;
