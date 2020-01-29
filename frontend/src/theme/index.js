import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
// import red from '@material-ui/core/colors/red';

// import './fonts/GothamPro/stylesheet.css';
// import GothamPro from './fonts/GothamPro';


let theme = createMuiTheme({
  palette: {
    primary: {main: blue[500]},
    secondary: {main: blue[300]},
  },
  typography: {

  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        div: {
          boxSizing: 'border-box',
          outline: 0
        },
        main: {
          boxSizing: 'border-box'
        }
      },
    },
  }
});

theme = responsiveFontSizes(theme);

export default theme;