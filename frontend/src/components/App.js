"use strick";
import React from "react";
import BaseLayout from './BaseLayout';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { useLocation } from "react-router-dom";

const App = ({route}) => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <BaseLayout>
      {renderRoutes(route.routes)} 
    </BaseLayout>
  )
}

export default connect(
  (state, ownProps) => ({
    state: state,
    ownProps
  }),
  null
)(App);
