import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
export default function JoinRoom(props) {
    return (
        <div className='body'>
            <Container maxWidth='xs' className='createRoom'>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="ID ROOM"
                    defaultValue="1234"
                    variant="outlined"
                    className='IDRoom'
                />
                <Button
                    variant="contained"
                    color="default"
                    className='btn btn-play'
                >
                    <i class="fa fa-pencil" aria-hidden="true"></i> PLAY
                </Button>
            </Container>
        </div>
    );
}