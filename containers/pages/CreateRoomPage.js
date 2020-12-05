import React from 'react';
import CreateRoom from '../../components/pages/CreateRoom'
import Layout from '../../components/Layout/Layout'
import Layout_Menu from '../../components/Layout/Layout_Menu'

const CreateRoomPage = () => {
    return (
        <>
            <Layout title="Tạo Phòng!"></Layout>
            <Layout_Menu></Layout_Menu>
            <CreateRoom></CreateRoom>
        </>
    );
}

export default CreateRoomPage;
