"use strick";
import React from "react";
import BaseLayout from './BaseLayout';
import { connect } from 'react-redux';
import { renderRoutes } from 'react-router-config';

const Varible = '111';

const App = ({route}) => {
  
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
