import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
export default function CreateRoom(props) {
    return (
        <div className='body'>
            <Container maxWidth='xs' className='handleRoom'>
                <span className='title'>Create Room</span>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="ID ROOM"
                    defaultValue="1234"
                    variant="outlined"
                    className='IDRoom'
                />
                <small>
                    Send this code to your opponent</small>
                <Link href='/Room/1234'>
                    <Button
                        variant="contained"
                        color="default"
                        className='btn btn-play'
                    >

                        <i class="fa fa-pencil" aria-hidden="true"></i> PLAY
                    </Button>
                </Link>
            </Container>
        </div>
    );
}