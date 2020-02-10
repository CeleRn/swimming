import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import TopBlock from 'TopBlock';
import DownloadsList from 'DownloadsList';

import ordersList from 'data/orders.js';

const useStyles = makeStyles(theme => ({
  body: {
    marginBottom: 50
  }
}),{
  name: 'PageHome'
});

const PageOrders = (props) => {
  const classes = useStyles();

  // useEffect(() => {
    
  // })
  // console.log('news',news);

  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>Приказы Федерации плавания Московской области</title>
      </Helmet>
      <TopBlock 
        title="Приказы Федерации плавания Московской области"
        textAlignTitle='left'
      />
      <Container className={classes.body}>
        <DownloadsList downloadsList={ordersList} />
      </Container>
      
    </React.Fragment>
  )
}


export default PageOrders;