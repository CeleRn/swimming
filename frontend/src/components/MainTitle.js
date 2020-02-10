import React from 'react';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  // root: {
  //   textTransform: "uppercase",
  //   color: props => (props.color),
  //   fontWeight: 300,
  //   textAlign: props => (props.textAlign)
  // }
  root: {
    display: 'block',
    fontSize: '1.6em',
    textTransform: 'uppercase',
    color: 'inherite',
    lineHeight: 1.2,
    textAlign: props => (props.textAlign),
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3em',
    },

    '& > small': {
      fontSize: '.495em',
      display: 'block',
      fontWeight: 300,
      marginBottom: 15,
      [theme.breakpoints.up('md')]: {
        marginBottom: 30
      }
    }
    
  }
}),{
  name: "MainTitle"
});


const MainTitle = (props) => {
  const classes = useStyles(props);

  return (
    // <Typography className={classes.root} variant="h3" component='h1'>{props.text}</Typography>
    <h1 className={classes.root}>
      {(props.prefix) && (
        <small>{props.prefix}</small>
      )}
      {props.text}
    </h1>
  );
}

export default MainTitle;