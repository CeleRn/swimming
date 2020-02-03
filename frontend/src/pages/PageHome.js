import React from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import {fade} from '@material-ui/core/styles/colorManipulator';


import { Container } from '@material-ui/core';

import bgHome from 'static/images/home-bg.webp';

const useStyles = makeStyles(theme => ({
  topBlock: {
    top: -96,
    position: 'relative',
    paddingTop: 130,
    paddingBottom: 50,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat no-repeat',
    backgroundImage: `url(${bgHome})`,
    zIndex: -1,
    [theme.breakpoints.up('md')]: {
      paddingTop: 160,
      paddingBottom: 80,
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 180,
      paddingBottom: 100,
    },
    '&:before': {
      display: 'block',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      content: "''",
      backgroundColor: fade(theme.palette.primary.dark, 0.85),
      zIndex: -1,
    }
  },
  mainTitle: {
    display: 'block',
    fontSize: '1.6em',
    textTransform: 'uppercase',
    color: '#fff',
    lineHeight: 1.2,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.5em',
    },

    '& > small': {
      fontSize: '.495em',
      display: 'block',
      fontWeight: 300,
      marginBottom: 30,
    }
    
  }
}),{
  name: 'PageHome'
});

const PageHome = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>Федерация плавания Московской области | Официальный сайт</title>
      </Helmet>
      <div className={classes.topBlock}>
        <Container>
          <h1 className={classes.mainTitle}>
            <small>Региональная общественная организация</small> Федерация плавания <br/>Московской области
          </h1>
        </Container>
        
      </div>
    </React.Fragment>
  )
}


export default PageHome;