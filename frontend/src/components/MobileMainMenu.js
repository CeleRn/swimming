import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import IconButton from '@material-ui/core/IconButton';
import IconMenu from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemWithCollapse from 'ListItemWithCollapse';

import mainMenuItems from 'data/mainMenuItems';


const useStyles = makeStyles(theme => ({
  triger: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  list: {
    width: 230,
  },
  item: {
    fontSize: '1rem',
  },
  link: {
    color: '#000',
    textDecoration: 'none'
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
}));


const MobileMainMenu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton className={classes.triger} onClick={handleDrawerOpen}>
        <IconMenu color="primary" />
      </IconButton>
      <SwipeableDrawer
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon color="primary"/>
          </IconButton>
        </div>
        <Divider />
        <List component="div" className={classes.list}>
          {mainMenuItems.map((itemMenu, index) => {
            if (itemMenu.childs) {
              return (
                <ListItemWithCollapse itemMenu={itemMenu} key={`itemMobileMenu${index}`}/>
              )
            } else {
              return (
                <ListItem button key={`itemMobileMenu${index}`}>
                  <ListItemText>
                    <Link className={classes.link} to={itemMenu.href}>{itemMenu.name}</Link>
                  </ListItemText>
                </ListItem>
              )
            }
          })}
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default MobileMainMenu;