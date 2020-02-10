import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {fade} from '@material-ui/core/styles/colorManipulator';

import Container from '@material-ui/core/Container';

import footerBackgroung from 'static/images/footer-bg.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    backgroundImage: `url('${footerBackgroung}')`,
    backgroundSize: '320px 240px',
    backgroundRepeat: 'repeat repeat',
    backgroundColor: fade(theme.palette.primary.dark, 0.85),
    padding: '40px 0',
    zIndex: 0,
    '&:before': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      content: `""`,
      backgroundColor: fade(theme.palette.primary.dark, 0.85),
      zIndex: -1
      // backgroundColor: 'rgba(0,0,0,0.8)'
    }
  },
  copyright: {
    color: 'rgba(255,255,255,0.75)'
  }
}),
{
  name: 'Footer'
});

const Footer = () => {
  const classes = useStyles();
  // console.log(partners);
  return (
    <footer className={classes.root}>
      <Container>
        <div className={classes.copyright}>
          Copyright © 2020 <br/>Региональная общественная организация Федерация плавания Московской области
        </div>
      </Container>
    </footer>
  )
}

export default Footer;