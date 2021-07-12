import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import Container from '@material-ui/core/Container';

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityIcon from '@material-ui/icons/Visibility';


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    marginBottom: 80
  },
  head: {
    backgroundColor: theme.palette.primary.light,
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '1.2em'
  },
  modalBody: {
    marginTop: 80,
    height: "100%"
  }
}),
{
  name: 'DownloadsList'
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DownloadsList = ({downloadsList}) => {
  const classes = useStyles();
  // console.log(rows);

  const [openModal, setOpenModal] = useState(false);
  const [doc, setDoc] = useState({uri:""});


  const handleViewClick = doc => () => {
    setOpenModal(true)
    setDoc({title:doc.title,link:doc.link})
  }
  
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
    <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>Документ</TableCell>
              <TableCell className={classes.head} align="center">Открыть</TableCell>
              <TableCell className={classes.head} align="right">Скачать</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {downloadsList.map(row => (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={handleViewClick(row)}>
                    <VisibilityIcon/>
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton href={row.link} target="_blank">
                    <GetAppIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog fullScreen open={openModal} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {doc.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.modalBody}>
          <DocViewer pluginRenderers={DocViewerRenderers} documents={[{uri: doc.link}]} style={{height: "100%"}} />
        </div>
        
      </Dialog>
    </>
      
  )
}

export default DownloadsList;