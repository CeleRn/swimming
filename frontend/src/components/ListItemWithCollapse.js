import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  button: {
    textTransform: "uppercase",
  },
  linkAll: {
    fontWeight: 700,
    color: theme.palette.text.secondary
  },
  child: {
    color: theme.palette.text.secondary
  }
}));


const ListItemWithCollapse = ({itemMenu, handleDrawerClose}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <ListItem button onClick={handleClick} className={classes.button}>
        <ListItemText primary={itemMenu.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {(itemMenu.linkName) && (
            <ListItem 
              button 
              className={classes.linkAll}
              component={Link}
              to={itemMenu.href}
              key={`itemMobileMenu-main`}
              onClick={handleDrawerClose}
            >
              {itemMenu.linkName}
            </ListItem>
          )}
          {itemMenu.childs.map((child,index) => (
            <ListItem 
              button 
              className={classes.child}
              component={Link} 
              to={child.href} 
              key={`itemMobileMenu-${itemMenu.name}-${index}`}
              onClick={handleDrawerClose}
            >
              {child.name}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  )
}

export default ListItemWithCollapse;