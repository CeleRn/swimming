import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';


import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TopBlock from 'TopBlock';
import DownloadsList from 'DownloadsList';

import newsList from 'data/news.js';

import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(theme => ({
  infoBar: {
    borderTop: '1px solid rgba(0,0,0,0.1)',
    padding: theme.spacing(1)
  },
  body: {
    marginBottom: 50
  }
}),{
  name: 'PageHome'
});

const PageNewsItem = (props) => {
  const classes = useStyles();
  const [news, setNews] = React.useState({});

  useEffect(() => {
    setNews(newsList.filter(item => item.id === Number(props.match.params.id))[0]);
  })
  console.log('news',news);

  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>{news.title}</title>
      </Helmet>
      <TopBlock title={news.title}textAlignTitle='left'>
          <div className={classes.infoBar}>
            <Button startIcon={<EventIcon/>} disabled>{news.date}</Button>
          </div>
      </TopBlock>
      <Container className={classes.body}>
        <Typography variant="body1" color="textSecondary" component="p">{news.body}</Typography>
        {(news.downloads) && (
          <DownloadsList downloadsList={news.downloads} />
        )}
      </Container>
      
    </React.Fragment>
  )
}


export default PageNewsItem;