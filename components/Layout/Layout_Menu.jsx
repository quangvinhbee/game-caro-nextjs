import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Link from 'next/link'

export default function Layout_Menu() {

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className='appbar'>
        <Toolbar>
          <img src='images/logo.png' className='img img-logo' />
          <Typography variant="h3" noWrap className='logo'>
            CARO <span>GAME</span>
          </Typography>
          <Button className='btn btn-create-room'><Link href='/CreateRoom' className='btn btn-create-room'>Create Room</Link></Button>
          <Button className='btn btn-join-room'><Link href='/JoinRoom' className='btn btn-create-room'>Join Room</Link></Button>
        </Toolbar>
      </AppBar>
    </ >
  );
}