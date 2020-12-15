import React, { useState } from 'react';
import JoinRoom from '../../components/pages/JoinRoom'
import Layout from '../../components/Layout/Layout'
import Layout_Menu from '../../components/Layout/Layout_Menu'
import { getStatus_Firebase, setStatus_Firebase } from '../../utils/firebase'
import Modal from 'react-bootstrap/Modal'
import { useRouter } from 'next/router'

const JoinRoomPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    const router = useRouter()
    const handleJoinRoom = (e) => {
        getStatus_Firebase(e).then(res => {
            if (res != undefined) {
                if (res.Status === 'waiting') {
                    res.Status = 'started';
                    res.Player2 = true;
                    window.localStorage.setItem('player', 2)
                    setStatus_Firebase(res, e);
                    router.push(`Room/${e}`)
                } else {
                    handleOpen()
                }
            } else {
                handleOpen()
            }
        })
    }

    return (
        <>
            <Layout title="Tham Gia Phòng!"></Layout>
            <Layout_Menu></Layout_Menu>
            <JoinRoom handleJoinRoom={handleJoinRoom} ></JoinRoom>
            <Modal show={show} onHide={handleClose} className='Modal Modal_JoinRoom'>
                <Modal.Header closeButton>
                    <Modal.Title>Not found ID Room</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal>
        </>
    );
}

export default JoinRoomPage;
