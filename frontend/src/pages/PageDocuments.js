import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import TopBlock from 'TopBlock';
import DownloadsList from 'DownloadsList';

import documentsList from 'data/documents.js';

const useStyles = makeStyles(theme => ({
  body: {
    marginBottom: 50
  }
}),{
  name: 'PageDocuments'
});

const PageDocuments = (props) => {
  const classes = useStyles();

  // useEffect(() => {
    
  // })
  // console.log('news',news);

  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>Документы Федерации плавания Московской области</title>
      </Helmet>
      <TopBlock 
        title="Документы Федерации плавания Московской области"
        textAlignTitle='left'
      />
      <Container className={classes.body}>
        {documentsList.map( (section,index) => (
          <React.Fragment key={`section-${index}`}>
            <Typography variant="h4" component="h2">{section.title}</Typography>
            <DownloadsList downloadsList={section.downloads} />
          </React.Fragment>
        ))}
      </Container>
      
    </React.Fragment>
  )
}


export default PageDocuments;