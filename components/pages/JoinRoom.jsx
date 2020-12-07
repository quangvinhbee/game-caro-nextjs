import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
export default function JoinRoom(props) {
    return (
        <div className='body'>
            <Container maxWidth='xs' className='handleRoom'>
                <span className='title'>Join Room</span>
                <TextField
                    id="outlined-disabled"
                    label="Type ID ROOM"
                    defaultValue=""
                    variant="outlined"
                    className='IDRoom'
                />
                <small>
                    Enter the code</small>
                <Button
                    variant="contained"
                    color="default"
                    className='btn btn-play'
                >
                    <i className="fa fa-pencil" aria-hidden="true"></i> PLAY
                </Button>
            </Container>
        </div>
    );
}