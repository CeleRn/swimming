import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logoImage from 'static/images/logo-only-white.svg';


const useStyles = makeStyles(theme => ({
  root: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    // display: 'block',
    // color: theme.palette.text.primary,
    color: 'rgba(255,255,255,0.70)',
    fontSize: '1em',
    fontWeight: 400,
    lineHeight: 1.3,
    textTransform: 'uppercase',
    width: 190,
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(1),
      fontSize: '1.3em',
      width: 250
    }
  },
  image: {
    width: 65,
    opacity: 0.85,
    height: 'auto',
    marginRight: 10,
    [theme.breakpoints.up('md')]: {
      width: 80
    }
  }

}),{
  name: "Logo"
});

export default function Logo() {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  

  return (
   <Link to="/" className={classes.root}>
     <img className={classes.image} src={logoImage} alt="ФПМО"/>
     <span className={classes.name}>Федерация плавания Московской области</span>
   </Link>
  );
}