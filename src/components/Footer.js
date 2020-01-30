import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    display: 'inline-grid',
    alignContent: 'end',
  },
  content: {
    height: 30,
    paddingTop: 5,
    fontFamily: 'sans-serif',
    color: '#727477',
  },
});

export default function Template() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Box className={classes.content}>Frontend code challenge - 2020</Box>
      </Grid>
    </div>
  );
}
