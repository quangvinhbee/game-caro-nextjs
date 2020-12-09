import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from 'next/link'
export default function CreateRoom(props) {
    const handleCreateRoom = () => {
        props.handleCreateRoom()
    }
    const { codeRoom } = props;
    return (
        <div className='body'>
            <Container maxWidth='xs' className='handleRoom'>
                <span className='title'>Create Room</span>
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="ID ROOM"
                    defaultValue={codeRoom}
                    variant="outlined"
                    className='IDRoom'
                />
                <small>
                    Send this code to your opponent</small>
                <Link href={`/Room/${codeRoom}`}>
                    <Button
                        variant="contained"
                        color="default"
                        className='btn btn-play'
                        onClick={handleCreateRoom}
                    >
                        <i className="fa fa-pencil" aria-hidden="true"></i> PLAY
                    </Button>
                </Link>
            </Container>
        </div>
    );
}