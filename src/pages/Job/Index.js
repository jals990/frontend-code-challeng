import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Grid } from '@material-ui/core/';
import vaga from '../../assets/id.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
  },
  header: {
    height: '20vh',
  },
  footer: {
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  card: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  dados: {
    marginRight: '300px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  dadosContent: {
    flexDirection: 'column',
    background: 'black',
  },
  mapa: {
    maxWidth: '100%',
    minWidth: '250px',
    minHeight: '120px',
    borderRadius: 10,
  },
  titulo: {
    lineHeight: 1.2,
    color: '#445565',
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  empresa: {
    fontSize: '16px',
    lineHeight: 1.2,
    color: '#445565',
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  salario: {
    lineHeight: 1.2,
    color: '#445565',
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  form: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: '15px',
    display: 'flex',
  },
  agendar: {
    background: '#00c662 !important',
    color: 'white',
    margin: '15px',
  },
});

export default function Job() {
  const job = useSelector(state => state.detail);

  const classes = useStyles();
  return (
    <Box container className={classes.container}>
      <Header className={classes.header} xs={12} />
      <Grid container className={classes.content}>
        <img
          className={classes.mapa}
          src={vaga}
          title="Mapa da vaga"
          alt="teste"
        />
        <Grid container xl={12} sm={6} className={classes.card}>
          <p className={classes.titulo}>Cargo: {job.title}</p>
          <p className={classes.empresa}>Empresa: {job.company_name}</p>
          <p className={classes.salario}>{job.description}</p>
        </Grid>
      </Grid>
      <Box className={classes.form}>
        <Button className={classes.agendar} variant="contained">
          Agendar entrevista
        </Button>
      </Box>
      <Grid className={classes.footer}>
        <Footer />
      </Grid>
    </Box>
  );
}
