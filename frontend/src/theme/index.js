import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

// import './fonts/GothamPro/stylesheet.css';
// import GothamPro from './fonts/GothamPro';
import 'typeface-roboto';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


let theme = createMuiTheme({
  palette: {
    primary: {main: blue[600]},
    secondary: {main: orange[500]},
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