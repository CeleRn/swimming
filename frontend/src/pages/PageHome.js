import React from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';


import { Container } from '@material-ui/core';

import TopBlock from 'TopBlock';
import LatestArticles from 'LatestArticles';
import PartnersList from 'PartnersList';



import bgHome from 'static/images/home-bg.webp';
import bgHomeVideo from 'static/video/bghome_withoutAudio.mp4';

const useStyles = makeStyles(theme => ({
  // topBlock: {
  //   position: 'relative',
  //   paddingTop: 50,
  //   paddingBottom: 50,
  //   backgroundPosition: 'center center',
  //   backgroundRepeat: 'no-repeat no-repeat',
  //   backgroundImage: `url(${bgHome})`,
  //   zIndex: -1,
  //   [theme.breakpoints.up('md')]: {
  //     marginTop: -96,
  //     paddingTop: 160,
  //     paddingBottom: 90,
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     paddingTop: 180,
  //     paddingBottom: 110,
  //   },
  //   '&:before': {
  //     display: 'block',
  //     position: 'absolute',
  //     top: 0,
  //     bottom: 0,
  //     left: 0,
  //     right: 0,
  //     content: "''",
  //     backgroundColor: fade(theme.palette.primary.dark, 0.85),
  //     zIndex: -1,
  //   }
  // },.

  
}),{
  name: 'PageHome'
});

const PageHome = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>Федерация плавания Московской области | Официальный сайт</title>
      </Helmet>
      <TopBlock 
        homePage={true}
        prefixTitle='Региональная общественная организация'
        title='Федерация плавания Московской области'
        textAlignTitle='center'
        bgImage={bgHome}
        bgVideo={bgHomeVideo}
      />
      <LatestArticles />
      <PartnersList />
    </React.Fragment>
  )
}

export default PageHome;