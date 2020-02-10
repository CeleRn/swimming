import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Slider from "react-slick";

import partners from 'data/partners';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#ffffff',
    padding: '70px 0',
    
  },
  container: {
    // display: 'flex',
    
  },
  link: {
    display: 'flex!important',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    padding: 15,
    textDecoration: 'none',
    borderRadius: 5,
    zIndex: 100,
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  },
  image: {
    maxWidth: '100%',
    maxHeight: 50,
    marginBottom: 10,
    
  },
  name: {
    textAlign: 'center',
    fontSize: '0.8em',
    lineHeight: 1.2,
    color: theme.palette.text.secondary
  }
}));

const PartnersList = () => {
  const classes = useStyles();
  // console.log(partners);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToAlide: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Slider {...settings}>
          {partners.map( (partner,index) => (
            <a className={classes.link} href={partner.siteUrl} title={partner.name} target="_blank" key={`parnerLogo-${index}`}>
              <img className={classes.image} src={partner.logo} alt={partner.name} />
              <span className={classes.name}>{partner.name}</span>
            </a>
          ))}
        </Slider>
      </Container>
    </div>
  )
}

export default PartnersList;