import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
export default function JoinRoom(props) {
    const [idRoom, setidRoom] = useState('');
    const handleChange = (e) => {
        if (e.target.value.length <= 4) {
            setidRoom(e.target.value.toUpperCase())
        }
    }
    const handleJoinRoom = () => {
        props.handleJoinRoom(idRoom)
    }
    return (
        <div className='body'>
            <Container maxWidth='xs' className='handleRoom'>
                <span className='title'>Join Room</span>
                <TextField
                    id="outlined-disabled"
                    label="Type ID ROOM"
                    value={idRoom}
                    variant="outlined"
                    className='IDRoom'
                    onChange={handleChange}
                />
                <small>
                    Enter the code</small>

                <Button
                    variant="contained"
                    color="default"
                    className='btn btn-play'
                    onClick={handleJoinRoom}
                >
                    <i className="fa fa-pencil" aria-hidden="true"></i> PLAY
                    </Button>
            </Container>
        </div>
    );
}