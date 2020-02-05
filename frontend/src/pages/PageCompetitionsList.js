import React from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import {fade} from '@material-ui/core/styles/colorManipulator';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';


import competitionsList from 'data/competitionsList.js';

import PlaceIcon from '@material-ui/icons/Place';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
const useStyles = makeStyles(theme => ({
  topBlock: {
    
  },
  mainTitle: {
    display: 'block',
    fontSize: '1.6em',
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
    lineHeight: 1.2,
    marginTop: theme.spacing(4),
    // textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '2.1em',
      marginTop: theme.spacing(6)
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3em',
      marginTop: theme.spacing(8)
    },
  },
  item: {
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: 7
  },
  date: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: 16
  },
  itemTitle: {
    fontSize: 26,
    fontWeight: 700,
    color: theme.palette.text.primary,
    marginBottom: 15,
  },
  pos: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10
  },
  description: {
    display: 'flex',
    alignItems: 'center',
  }
}),{
  name: 'PageHome'
});

const PageCompetitionsList = () => {
  const classes = useStyles();

  
  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>Соревнования по плаванию | Федерация плавания Московской области</title>
      </Helmet>
      <div className={classes.topBlock}>
        <Container>
          <h1 className={classes.mainTitle}>Спортивные мероприятия по плаванию</h1>
          {competitionsList.length > 0 ?
            competitionsList.map((competition, index) => {
              return (
                <Card className={classes.item}>
                  <CardActionArea component={Link} to={`/competitions/${competition.id}`} >
                    <Box className={classes.date} bgcolor="primary.light" color="primary.contrastText" p={2}>
                      <EventIcon className={classes.icon}/> {competition.date}
                    </Box>
                    <Box p={2}>
                      <Typography className={classes.itemTitle} variant="h5" component="h3">{competition.title}</Typography>
                      <Box className={classes.pos} color="text.secondary">
                        <PlaceIcon className={classes.icon}/> {competition.cities}
                      </Box>
                      <Box className={classes.description} color="text.secondary">
                        <PeopleIcon className={classes.icon}/> {competition.description}
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              )
          }) : 
            null
          }
        </Container>
      </div>
    </React.Fragment>
  )
}


export default PageCompetitionsList;