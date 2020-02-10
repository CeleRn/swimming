import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import managments from 'data/managements.js' ;

const useStyles = makeStyles(theme => ({
  root: {
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
  name: 'ManagmentsList'
});

// function createData(name, position) {
//   return { name, position };
// }

// const rows = Managments



const ManagmentsList = () => {
  const classes = useStyles();
  // console.log(rows);
  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.head}>ФИО</TableCell>
              <TableCell className={classes.head}>Должность</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {managments.map(row => (
              <TableRow key={row.fullName}>
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell>{row.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ManagmentsList;