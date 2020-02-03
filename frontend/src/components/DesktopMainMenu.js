import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import IconMenu from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

// import ListItemWithCollapse from 'ListItemWithCollapse';

import mainMenuItems from 'data/mainMenuItems';


const useStyles = makeStyles(theme => ({
  root: {
    
  },
  button: {
    color: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  }
}));


const DesktopMainMenu = () => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  console.log('mainMenuItems',mainMenuItems);
  return (
    <React.Fragment>
      {mainMenuItems.map((itemMenu, index) => {
        if (itemMenu.desktopVisible) {
          if (itemMenu.childs) {
            return (
            <Button className={classes.button} key={`itemDesktopMenu${index}`}>{itemMenu.name}</Button>
            )
          } else {
            return (
              <Button className={classes.button} href={itemMenu.href} key={`itemDesktopMenu${index}`}>{itemMenu.name}</Button>
            )
          }
        } else {null}
      })}
    </React.Fragment>
  )
}

export default DesktopMainMenu;