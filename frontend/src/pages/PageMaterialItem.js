import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import TopBlock from 'TopBlock';

import materialsList from 'data/materialsList.js';

const useStyles = makeStyles(theme => ({
  infoBar: {
    borderTop: '1px solid rgba(0,0,0,0.1)',
    padding: theme.spacing(1)
  },
  body: {
    marginBottom: 50
  },
  link: {
    marginBottom: theme.spacing(3),
    
  },
  clearfix: {
	clear: 'both'
  }
}),{
  name: 'PageMaterialItem'
});

const PageMaterialItem = (props) => {
  const classes = useStyles();
  const [material, setMaterial] = React.useState(materialsList.filter(item => item.id === Number(props.match.params.id))[0]);

  useEffect(() => {
    setMaterial(materialsList.filter(item => item.id === Number(props.match.params.id))[0]);
  })

  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>{material.title}</title>
      </Helmet>
      <TopBlock title={material.title} textAlignTitle='left'/>

      <Container className={classes.body}>
        <Button 
          className={classes.link}
          component={Link}
          to="/professionals/materials"
          startIcon={<ChevronLeftIcon />}
        >
            К списку материалов
        </Button>
        {(material) && (
          <YouTube videoId={material.media.videoId} />
        )}
		    <div className={classes.clearfix}/>
      </Container>
      
    </React.Fragment>
  )
}


export default PageMaterialItem;