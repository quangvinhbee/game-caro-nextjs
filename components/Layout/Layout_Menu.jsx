import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export default function Layout_Menu() {

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className='appbar'>
        <Toolbar>
          <img src='images/logo.png' className='img img-logo' />
          <Typography variant="h3" noWrap className='logo'>
            CARO <span>GAME</span>
          </Typography>
          <Button className='btn btn-create-room'>Create Room</Button>
          <Button className='btn btn-join-room'>Join Room</Button>
        </Toolbar>
      </AppBar>
      <div className='body'>
        <Container maxWidth="lg">
          <Typography component="div" style={{ height: '100%', width: '100%' }}>
            conteonteonteoteonotenotoenotenotenotnontoenotoenotessssssssssssssssssssssdsadsadasdasdasdasdasdasdasdas
            conteonteonteoteonotenotoenotenotsenotnontoenotoenotessssssssssssssssssssssdsadsadasdasdasdasdasdasdasdas
            conteonteonteoteonotenotoenotenotenotnontoenotoenotessssssssssssssssssssssdsadsadasdasdasdasdasdasdasdas
            </Typography>
        </Container>
      </div >
    </div >
  );
}