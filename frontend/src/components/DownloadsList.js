import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import GetAppIcon from '@material-ui/icons/GetApp';

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
}),
{
  name: 'DownloadsList'
});


const DownloadsList = ({downloadsList}) => {
  const classes = useStyles();
  // console.log(rows);
  return (
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>Документ</TableCell>
              <TableCell className={classes.head} align="right">Скачать</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {downloadsList.map(row => (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row">
                  {row.title}
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
  )
}

export default DownloadsList;