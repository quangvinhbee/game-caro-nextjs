import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Modal_game = (props) => {
    const [show, setShow] = useState(false);
    const { openModal, button, open } = props
    console.log(openModal);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);
    useEffect(() => {
        if (openModal.open === true) {
            handleOpen()
        }
    }, [openModal]);
    return (
        <>
            <Modal show={show} onHide={handleClose} className='Modal Modal_JoinRoom'>
                <Modal.Header closeButton>
                    <Modal.Title>{openModal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{openModal.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modal_game;
