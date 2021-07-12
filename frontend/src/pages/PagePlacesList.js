import React from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import PlaceIcon from '@material-ui/icons/Place';
import PublicIcon from '@material-ui/icons/Public';

import TopBlock from 'TopBlock';
import DownloadsList from 'DownloadsList';
import places from 'data/places.js';

const useStyles = makeStyles(theme => ({
  body: {
    marginBottom: 50
  },
  list: {
    fontSize: '1.5em',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2em',
    }
  },
  item: {
    marginBottom: theme.spacing(2),
  },
  itemTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    
  },
  infoBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
    
  },
  icon: {
    marginRight: theme.spacing(1),
    
  },
  site: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'underline',
    }
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'underline',
    }
  },
  downloadsBlock: {

  },
  downloadsTitle: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    
  },
  downloadsList: {
    marginTop: 0,
    marginBottom: theme.spacing(1),
  },
  downloadsItem: {

  },
  downloadsLink: {
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.text.primary,
      textDecoration: 'underline',
    }
  }
}),{
  name: 'PagePlacesList'
});

const PagePlacesList = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>Места для тренировок и спортивных сборов</title>
      </Helmet>
      <TopBlock 
        title="Места для тренировок и спортивных сборов"
        textAlignTitle='left'
      />
      <Container className={classes.body}>
        <div className={classes.list}>
          {places.map( (item,index) => (
             <Card className={classes.item} key={`place${index}`}>
               <Box p={2}>
                  <Typography className={classes.itemTitle} variant="h5" component="h3">{item.name}</Typography>
                  <Box className={classes.infoBlock} color="text.secondary">
                    <PlaceIcon className={classes.icon}/> {item.place}
                  </Box>
                  <Box className={classes.infoBlock} color="text.secondary">
                    <PublicIcon className={classes.icon}/> <a className={classes.site} href={item.site} target="_blank">{item.site}</a>
                  </Box>
                  <Box className={classes.downloadsBlock} color="text.secondary">
                    <h5 className={classes.downloadsTitle}>Скачать:</h5>
                    <ul className={classes.downloadsList}>
                      {item.downloads.map( (download, index) => (
                        <li className={classes.downloadsItem} key={`downloadItem${index}`}>
                          <a className={classes.downloadsLink} href={download.link} target="_blank">{download.title}</a>
                        </li>
                      ))}
                    </ul>
                  </Box>
               </Box>
           </Card>
          ))}
        </div>
        
      </Container>
      
    </React.Fragment>
  )
}


export default PagePlacesList;