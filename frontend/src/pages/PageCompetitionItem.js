import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import {fade} from '@material-ui/core/styles/colorManipulator';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import DownloadsList from 'DownloadsList';

import competitionsList from 'data/competitionsList.js';

import PlaceIcon from '@material-ui/icons/Place';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(theme => ({
  body: {
    marginBottom: 50
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
  paragraph: {
    marginBottom: 15
  }
}),{
  name: 'PageHome'
});

const PageCompetitionsItem = (props) => {
  const classes = useStyles();
  const [competition, setCompetition] = React.useState({});

  useEffect(() => {
    setCompetition(competitionsList.filter(item => item.id === Number(props.match.params.id))[0]);
  })

  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>{competition.title}</title>
      </Helmet>
      <div className={classes.topBlock}>
        <Container className={classes.body}>
          <h1 className={classes.mainTitle}>{competition.title}</h1>
          <Typography className={classes.paragraph} component="p">Место проведения: {competition.cities}</Typography>
          <Typography className={classes.paragraph} component="p">{competition.description}</Typography>
          {(competition.link) && (
              <Typography className={classes.paragraph} component="p">
                <a href={competition.link} target="_blank">Подробная информация</a>
              </Typography>
          )}
          {(competition.downloads) && (
            <DownloadsList downloadsList={competition.downloads} />
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}


export default PageCompetitionsItem;