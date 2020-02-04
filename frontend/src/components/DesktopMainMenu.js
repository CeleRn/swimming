import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import mainMenuItems from 'data/mainMenuItems';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  button: {
    color: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  linkAll: {
    fontWeight: 700,
  }
}),{
  name: 'DesktopMainMenu'
});


const DesktopMainMenu = () => {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = React.useState();
  
  const handleClick = (event) => {
    console.log('event.currentTarget.dataset',event.currentTarget.dataset);
    setOpenMenu(event.currentTarget.value);
  };

  const handleClose = (event) => {
    setOpenMenu();
  };

  function a11yProps(index) {
    return {
      id: `desktop-menu-button-${index}`,
      'aria-controls': `desktop-menu-dropdown-${index}`,
      'aria-haspopup': 'true'
    };
  }
  return (
    <nav className={classes.root}>
      {mainMenuItems.map((itemMenu, index) => {
        if (itemMenu.desktopVisible) {
          if (itemMenu.childs) {
            const refButton = React.useRef();
            return (
              <React.Fragment key={`itemDesktopMenu${index}`}>
                <Button 
                  ref={refButton}
                  className={classes.button } 
                  value={index} 
                  onClick={handleClick}
                  {...a11yProps(index)}
                  >
                    {itemMenu.name}
                </Button>
                <Menu
                  MenuListProps={{
                    component:'nav'
                  }}
                  id={`desktop-menu-dropdown-${index}`}
                  anchorEl={refButton.current}
                  keepMounted
                  open={Number(openMenu) === index}
                  onClose={handleClose}
                >
                  {(itemMenu.linkName) && (
                    <MenuItem 
                      className={classes.linkAll}
                      component={Link} 
                      to={itemMenu.href}
                      key={`child-item-menu-${index}-main`}
                      onClick={handleClose}>
                        {itemMenu.linkName}
                    </MenuItem>
                  )}
                  {itemMenu.childs.map( (child, indexChild) => (
                    <MenuItem 
                      component={Link} 
                      to={child.href}
                      key={`child-item-menu-${index}-${indexChild}`}
                      onClick={handleClose}>
                        {child.name}
                    </MenuItem>
                  ))}
                </Menu>
              </React.Fragment>
            )
          } else {
            return (
              <Button className={classes.button} href={itemMenu.href} key={`itemDesktopMenu${index}`}>{itemMenu.name}</Button>
            )
          }
        } else {null}
      })}
    </nav>
  )
}

export default DesktopMainMenu;