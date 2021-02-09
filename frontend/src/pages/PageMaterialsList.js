import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import TopBlock from 'TopBlock';

import materialsList from 'data/materialsList.js';

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
    
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
}),{
  name: 'PageMaterialsList'
});

const PageMaterialsList = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        {/* Meta tags */}
        <title>Материалы для профессиональных пловцов</title>
      </Helmet>
      <TopBlock 
        title="Материалы для профессиональных пловцов"
        textAlignTitle='left'
      />
      <Container className={classes.body}>
        <ul className={classes.list}>
          {materialsList.map( (item,index) => (
            <li className={classes.item} key={`item-${index}`}>
              <Link className={classes.link} to={`/professionals/materials/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
        
      </Container>
      
    </React.Fragment>
  )
}


export default PageMaterialsList;