import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
// import { Container } from '@material-ui/core';
// import logoImage from 'static/images/logo-only.svg';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

// Импорт контактов
import contacts from 'data/contacts';

const useStyles = makeStyles(theme => ({
  rootDesctop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  rootMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  button: {
    marginRight: 10,
    paddingRight: 20,
    paddingLeft: 20,
    '&:last-child': {
      marginRight: 0
    }
    
  },
  buttonText: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  icon: {
    color: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(1),
    }
  }

}),{
  name: "HeaderContacts"
});

export default function HeaderContacts() {
  const classes = useStyles();

  return (
   <React.Fragment>
    <div className={classes.rootMobile}>
      <IconButton href={`mailto:${contacts.email}`} aria-label="Email">
        <EmailIcon className={classes.icon}/>
      </IconButton>
      <IconButton href={`tel:${contacts.phone}`} aria-label="Номер телефона">
        <PhoneIcon className={classes.icon}/>
      </IconButton>
    </div>
    <div className={classes.rootDesctop}>
      <Button className={classes.button} href={`mailto:${contacts.email}`} size="small">
        <EmailIcon className={classes.icon} fontSize="small"/>
        <span className={classes.buttonText}>{contacts.email}</span>
      </Button>
      <Button className={classes.button} href={`tel:${contacts.phone}`}>
        <PhoneIcon className={classes.icon} fontSize="small"/>
        <span className={classes.buttonText}>{contacts.phone}</span>
      </Button>
    </div>
   </React.Fragment>
  );
}