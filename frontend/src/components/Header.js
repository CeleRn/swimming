import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Logo from 'Logo';
import MobileMainMenu from 'MobileMainMenu';
import DesktopMainMenu from 'DesktopMainMenu';
import HeaderContacts from 'HeaderContacts';

const useStyles = makeStyles(theme => ({
  root: {

  },
  top: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[200],
    padding: '5px 0'

  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  middle: {
    display: 'none',
    paddingTop: 25,
    paddingBottom: 25,
    backgroundColor: 'rgba(0,0,0,.4)',
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    }
  },
  middleContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-between',
    }
  },
  bottom: {

  },
  bottomContainer: {

  },
  grow: {
    flexGrow: 1
  },
  button: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  link: {
    color: theme.palette.text.secondary,
    textDecoration: 'none'
  }
}),{
  name: "Header"
});

export default function Header() {
  const classes = useStyles();
  
  return (
   <header className={classes.root}>
     <div className={classes.top}>
       <Container className={classes.topContainer} maxWidth="xl">
        <MobileMainMenu/>
        <Button component={Link} to="/contacts" className={classes.button}>Контакты</Button>
        <div className={classes.grow} />
        <HeaderContacts />
       </Container>
     </div>
     <div className={classes.middle}>
      <Container className={classes.middleContainer}>
        <Logo/>
        <DesktopMainMenu />
      </Container>
     </div>
     
     {/* <div className={classes.bottom}>
       <Container className={classes.bottomContainer} maxWidth="lg">
          MainMenu
       </Container>
     </div> */}
   </header>
  );
}