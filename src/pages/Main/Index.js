import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Box, Grid } from '@material-ui/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100vh',
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    height: '70vh',
    display: 'inline-grid',
    justifyContent: 'center',
    alignContent: 'center',
  },
  vagas: {
    background: '#C3E93F',
    boxShadow: '0 3px 5px 2px rgba(0,0,0, 0.3)',
    border: 0,
    borderRadius: 3,
    height: '8vh',
    minHeight: '30px',
    width: '200px',
    margin: 30,
    '&:hover': {
      backgroundColor: '#9FB25B',
      borderColor: '#9FB25B',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#9FB25B',
      borderColor: '#9FB25B',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(159,178,91,.5)',
    },
  },
});

export default function Main(props) {
  const classes = useStyles(props);

  return (
    <Box className={classes.container}>
      <Header />

      <Grid className={classes.content}>
        <Button className={classes.vagas} variant="contained" href="/jobs">
          Vagas disponíveis
        </Button>
      </Grid>
      <Footer />
    </Box>
  );
}
