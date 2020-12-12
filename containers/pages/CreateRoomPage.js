import React from 'react';
import CreateRoom from '../../components/pages/CreateRoom'
import Layout from '../../components/Layout/Layout'
import Layout_Menu from '../../components/Layout/Layout_Menu'
import { randomROOMID } from '../../helpers/handleObject';
import { setStatus_Firebase } from '../../utils/firebase';

const CreateRoomPage = () => {
    const codeRoom = randomROOMID();
    var Room = {}
    const handleCreateRoom = () => {
        Room.Player1 = true;
        Room.Player2 = false;
        Room.PlayerNext = 1;
        Room.Avt_Player1 = Math.floor(Math.random() * 6) + 1;
        Room.Avt_Player2 = Math.floor(Math.random() * 6) + 1;
        Room.CellJustChecked = -1;
        Room.Status = 'waiting';
        Room.IPv4_Player1 = '10.6.4.5';
        Room.IPv4_Player2 = '';
        Room.Point = '0-0';
        window.localStorage.setItem('player', 1)
        setStatus_Firebase(Room, codeRoom);
    }
    return (
        <>
            <Layout title="Tạo Phòng!"></Layout>
            <Layout_Menu ></Layout_Menu>
            <CreateRoom codeRoom={codeRoom} handleCreateRoom={handleCreateRoom}></CreateRoom>
        </>
    );
}

export default CreateRoomPage;
