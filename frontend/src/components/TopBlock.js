import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {alpha} from '@material-ui/core/styles/colorManipulator';

import Container from '@material-ui/core/Container';

import MainTitle from 'MainTitle';

const useStyles = makeStyles(theme => ({
  // root: props => ({
  //   position: 'relative',
  //   color: (props.bgImage) ? 'rgba(255,255,255,0.75)' : theme.palette.text.secondary,
  //   backgroundImage: (props.bgImage) ? `url('${props.bgImage}')` : 'none',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center center',
  //   backgroundRepeat: 'no-repeat no-repeat',
  //   padding: '65px 0',
  //   zIndex: (props.bgImage) ? 1 : 'auto',
  //   '&:before': {
  //     position: 'absolute',
  //     top: 0,
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     content: (props.bgImage) ? '""' : null,
  //     backgroundColor: 'rgba(0,0,0,0.75)',
  //     zIndex: -1
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     padding: '100px 0',
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     padding: '130px 0',
  //   }
  // }),
  root: props => ({
    position: 'relative',
    color: (props.bgImage) ? '#ffffff' : theme.palette.text.primary,
    backgroundImage: (props.bgImage && !props.bgVideo) ? `url('${props.bgImage}')` : 'none',
    zIndex: -1,
    paddingTop: (props.homePage) ? 50 : 30,
    paddingBottom: (props.homePage) ? 50 : 30,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat no-repeat',
    [theme.breakpoints.up('md')]: {
      marginTop: -96,
      // paddingTop: 160,
      // paddingBottom: 90,
      paddingTop: (props.homePage) ? 160 : 120,
      paddingBottom: (props.homePage) ? 90 : 60,
    },
    [theme.breakpoints.up('lg')]: {
      // paddingTop: 180,
      // paddingBottom: 110,
      paddingTop: (props.homePage) ? 180 : 120,
      paddingBottom: (props.homePage) ? 110 : 60,
    },
    '&:before': {
      display: 'block',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      content: (props.bgImage) ? '""' : null,
      backgroundColor: alpha(theme.palette.primary.dark, (props.bgVideo) ? 0.45 : 0.75),
      zIndex: -2,
    }
  }),
  videoWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -3,
  },
  video: {
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    
  }
}),{
  name: "TopBlock"
});


const TopBlock = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  return (
    <div className={classes.root}>
      {props.bgVideo && (
        <div className={classes.videoWrap} dangerouslySetInnerHTML={{ __html: `
        <video 
          class=${classes.video}
          // width="100%"
          // height="auto"
          autoPlay="autoplay"
          loop="loop"
          preload="auto"
          muted="muted"
        >
          <source src=${props.bgVideo} type='video/mp4'></source>
        </video>` }} />
        
      )}
      
      
      <Container className={classes.container}>
        <MainTitle 
          color={(props.bgImage) ? '#ffffff' : theme.palette.text.primary}
          homePage={props.homePage}
          prefix={props.prefixTitle}
          text={props.title}
          textAlign={props.textAlignTitle || 'left'}
        />
        {(props.description) && (
          <div className={classes.description}>
            {props.description}
          </div>
        )}
        {props.children}
      </Container>
    </div>
  );
}

export default TopBlock;