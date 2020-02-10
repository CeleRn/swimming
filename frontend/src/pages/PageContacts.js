import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import TopBlock from 'TopBlock';
import PartnersList from 'PartnersList';


import contacts from 'data/contactsPageData';

const useStyles = makeStyles(theme => ({
  item: {
    display: 'flex',
    flexDirection: "column",
    alignItems: 'flex-start',
    marginBottom: 40
  },
  position: {
    marginTop: 0,
    marginBottom: 15,
    fontSize: '1.3em',
    // color: theme.palette.text.secondary
  },
  name: {
    marginBottom: 10,
    fontSize: '1.5em'
  },
  button: {
    marginBottom: 15  
  }
}),{
  name: "PageContacts"
});

const PageContacts = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>Контактная информация федерации плавания Московской области</title>
      </Helmet>
      <TopBlock 
        title='Контактная информация'
        textAlignTitle='left'
      />
      <Container>
        {contacts.map( (contact, index) => (
          <div className={classes.item} key={`contact-${index}`}>
            <h4 className={classes.position}>{contact.position}</h4>
            <span className={classes.name}>{contact.fullName}</span>
            {(contact.phone) && (
              <Button className={classes.button} href={`tel:${contact.phone}`} startIcon={<PhoneIcon />}>
                {contact.phone}
              </Button>
            )}
            {(contact.email) && (
              <Button className={classes.button} href={`mailto:${contact.email}`} startIcon={<MailOutlineIcon />}>
                {contact.email}
              </Button>
            )}
          </div>
        ))}
      </Container>
      <PartnersList />
      
    </React.Fragment>
  )
}

export default PageContacts;