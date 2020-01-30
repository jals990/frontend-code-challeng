import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Box, Grid } from '@material-ui/core';
import { storeJobs } from '../../store/modules/jobs/actions';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100vh',
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    height: '20vh',
  },
  footer: {
    height: '10vh',
    display: 'inline-grid',
    alignContent: 'end',
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
  agenda: {
    background: '#C51061',
    boxShadow: '0 3px 5px 2px rgba(0,0,0, 0.3)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: '8vh',
    minHeight: '30px',
    width: '200px',
    margin: 30,
    '&:hover': {
      backgroundColor: '#E0508A',
      borderColor: '#E0508A',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#E0508A',
      borderColor: '#E0508A',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgb(197, 28, 96,.5)',
    },
  },
});

export default function Main(props) {
  const dispatch = useDispatch();

  function handleJobs() {
    dispatch(storeJobs());
  }

  const classes = useStyles(props);

  return (
    <Box className={classes.container}>
      <Header className={classes.header} item xs={12} />

      <Grid className={classes.content}>
        <p>Página de agendamentos</p>
        <Button
          className={classes.vagas}
          variant="contained"
          href=""
          onClick={handleJobs}
        >
          Vagas disponíveis
        </Button>
      </Grid>
      <Grid className={classes.footer}>
        <Footer />
      </Grid>
    </Box>
  );
}
