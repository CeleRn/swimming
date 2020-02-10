import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  date: {
    color: theme.palette.text.secondary
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 15,
    lineHeight: 1.2
  }
}));

const useCardActionsStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'flex-end'
  }
}));

const NewsItem = ({news}) => {
  const classes = useStyles();
  const classesCardActions = useCardActionsStyles();
  
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/news/${news.id}`}>
        <CardContent>
          <Typography className={classes.date} variant='subtitle1' component="span">{news.date}</Typography>
          <Typography gutterBottom variant="h5" component="h3">{news.title}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">{news.body}</Typography>
        </CardContent>
        
      </CardActionArea>
      
    </Card>
    // <Card className={classes.root}>
    //   <CardContent>
    //     <Box className={classes.date} bgcolor="primary.light" color="primary.contrastText" p={1}>
    //       {news.date}
    //     </Box>
    //     <Typography className={classes.title} variant="h5" component="h3">{news.title}</Typography>
    //     <Typography className={classes.pos} color="textSecondary">{news.cities}</Typography>
    //     <Typography className={classes.description} color="textSecondary" gutterBottom>{news.description}</Typography>
    //   </CardContent>
    //   <CardActions classes={classesCardActions}>
    //     <Button component={Link} to={`/news/${news.id}`} size="small">Подробнее</Button>
    //   </CardActions>
    // </Card>
  );
}

export default NewsItem;