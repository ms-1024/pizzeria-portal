import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      width: '200',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField style={{marginRight: '10px'}} id="filled-basic" label="Username" variant="filled" />
      <TextField id="filled-basic" label="Password" variant="filled" />
    </form>
  );
}