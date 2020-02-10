import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 15,
    lineHeight: 1.2
  },
  date: {
    margin: '-16px -16px 10px -16px',
    paddingLeft: 16,

  },
  pos: {
    marginBottom: 12,
  },
  description: {
    display: 'block',
    fontSize: 14
  }
}));

const useCardActionsStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex-end'
  }
}));

const CompetitionItem = ({competition}) => {
  const classes = useStyles();
  const classesCardActions = useCardActionsStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box className={classes.date} bgcolor="primary.light" color="primary.contrastText" p={1}>
          {competition.date}
        </Box>
        <Typography className={classes.title} variant="h5" component="h3">{competition.title}</Typography>
        <Typography className={classes.pos} color="textSecondary">{competition.cities}</Typography>
        <Typography className={classes.description} color="textSecondary" gutterBottom>{competition.description}</Typography>
      </CardContent>
      <CardActions classes={classesCardActions}>
        <Button component={Link} to={`/competitions/${competition.id}`} size="small">Подробнее</Button>
      </CardActions>
    </Card>
  );
}

export default CompetitionItem;