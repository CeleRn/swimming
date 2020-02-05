import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import ReactGA from 'react-ga';

import Header from 'Header';
// import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 2500
  }
}),{
  name: 'main'
});

const BaseLayout = (props) => {
  let classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <main className={classes.root}>
        {props.children}
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default BaseLayout;