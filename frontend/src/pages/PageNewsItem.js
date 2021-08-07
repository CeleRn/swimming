import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';

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
  },
  linksList: {

  },
  link: {
    fontSize: '1.3em',
    lineHeight: '2em',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover,&:focus': {
      textDecoration: 'underline'
    }
  },
  image: {
    maxWidth: '100%',
	float: 'left',
	marginRight: 24,
	marginBottom: 16
  },
  clearfix: {
	clear: 'both'
  }
}),{
  name: 'PageNewsItem'
});

const PageNewsItem = (props) => {
  const classes = useStyles();
  const [news, setNews] = React.useState({});

  useEffect(() => {
    setNews(newsList.filter(item => item.id === Number(props.match.params.id))[0]);
  })

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
        {(news.image) && (
          <img className={classes.image} src={news.image} alt={news.title} />
        )}
		{(news.bodyMarkdown) && (
          <ReactMarkdown>{news.bodyMarkdown}</ReactMarkdown>
        )}
		{(!news.bodyMarkdown) && (
          <Typography variant="body1" color="textSecondary" component="p">{news.body}</Typography>
        )}
		{(news.video) && (
			<video width="480" height="270" controls="controls">
			   <source src={news.video.url} type={news.video.type} />
			</video>
        )}
        {(news.links) && (
          <ul className={classes.linksList}>
            {news.links.map((item,index) => (
              <li key={`link-${index}`}>
                <a className={classes.link} href={item.link} target="_blank">{item.title}</a>
              </li>
            ))}
          </ul>
        )}
        {(news.downloads) && (
          <DownloadsList downloadsList={news.downloads} />
        )}
		<div className={classes.clearfix}/>
      </Container>
      
    </React.Fragment>
  )
}


export default PageNewsItem;