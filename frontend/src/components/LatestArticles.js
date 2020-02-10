import React from 'react';
import PropTypes, { resetWarningCache } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CompetitionItem from 'CompetitionItem';
import NewsItem from 'NewsItem';

import competitionsList from 'data/competitionsList.js';
import newsList from 'data/news.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (<React.Fragment>{children}</React.Fragment>)}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: '50px 0',
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
  tabpanel: {
    padding: theme.spacing(2),
  },
  tabpanelTitle: {
    fontWeight: 700,
    marginBottom: 25
  }
}));

const LatestArticles = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Paper elevation={0}>
          <Tabs 
            value={value} 
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="on"
            onChange={handleChange} 
            aria-label="simple tabs example"
          >
            <Tab label="Соревнования" {...a11yProps(0)} />
            <Tab label="Последние новости" {...a11yProps(1)} />
            {/* <Tab label="Документация" {...a11yProps(2)} /> */}
          </Tabs>
        </Paper>
        <SwipeableViews axis='x' index={value} onChangeIndex={handleChange}>
          <TabPanel className={classes.tabpanel} value={value} index={0}>
            <Typography className={classes.tabpanelTitle} variant="h4" component="h2">Ближайшие соревнования</Typography>
            <Grid container spacing={2}>
              {competitionsList.length > 0 ?
                competitionsList.map((competition, index) => {
                  return (
                  <Grid item md={4} sm={6} xs={12} key={`competition-${index}`}>
                    <CompetitionItem competition={competition}/>
                  </Grid>
                )}) : 
                null
              }
              <Grid item xs={12}>
                <Button component={Link} to="/competitions" variant="contained" color="primary">Все соревнования</Button>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel className={classes.tabpanel} value={value} index={1}>
            <Typography className={classes.tabpanelTitle} variant="h4" component="h2">Последние новости</Typography>
            {newsList.length > 0 ?
              newsList.map((news, index) => {
                return (
                  <NewsItem news={news}  key={`news-${index}`}/>
              )}) : 
              null
            }
          </TabPanel>
          {/* <TabPanel className={classes.tabpanel} value={value} index={2}>
            Документация
          </TabPanel> */}
        </SwipeableViews>
        
      </Container>
    </div>
  );
}


export default LatestArticles;