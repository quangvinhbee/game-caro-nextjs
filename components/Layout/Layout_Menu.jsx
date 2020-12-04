import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 0,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
  },
}));

export default function Layout_Menu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="ms">
            <Typography component="div" style={{ height: '100%', width: '100%' }}>
              conteonteonteoteonotenotoenotenotenotnontoenotoenotessssssssssssssssssssssdsadsadasdasdasdasdasdasdasdas
              conteonteonteoteonotenotoenotenotenotnontoenotoenotessssssssssssssssssssssdsadsadasdasdasdasdasdasdasdas
              conteonteonteoteonotenotoenotenotenotnontoenotoenotessssssssssssssssssssssdsadsadasdasdasdasdasdasdasdas
            </Typography>
          </Container>
        </main>
      </div >
    </div >
  );
}