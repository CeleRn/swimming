import React from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

import Container from '@material-ui/core/Container';

import competitionsList from 'data/competitionsList.js';


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

const PageCompetitions = () => {
  const classes = useStyles();

    const docUrl = "https://mo-swimming.ru/static/news/2023/01/2.Положен Мос. обл. сор-ях по плаванию 2023.pdf"
  
  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>Соревнования по плаванию | Федерация плавания Московской области</title>
      </Helmet>
      <div className={classes.topBlock}>
        <Container>
          <h1 className={classes.mainTitle}>Положение о проведении соревнований по плаванию на 2023 год</h1>
          <DocViewer pluginRenderers={DocViewerRenderers} documents={[{uri: docUrl}]} style={{height: "100%"}} />
        </Container>
      </div>
    </React.Fragment>
  )
}


export default PageCompetitions;