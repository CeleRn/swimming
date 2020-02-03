import React from "react";
import { render, hydrate } from "react-dom";

import { Router } from "react-router";
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';

import Routes from './routes';

import { Provider } from 'react-redux';
import store from 'store'
import { syncHistoryWithStore } from 'react-router-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';


import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'o',
    disableGlobal: true
  });

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

const Index = () => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
              {renderRoutes(Routes)}
            </Router>
          </StylesProvider>
        </ThemeProvider>
      </Provider>
    );
  };
  
  
  
  const rootElement = document.getElementById("root");
  if (rootElement.hasChildNodes()) {
    hydrate(<Index />, rootElement);
  } else {
    render(<Index />, rootElement);
  }
  