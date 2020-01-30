import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Button } from '@material-ui/core';

import api from '../../services/api';
import * as storeJob from '../../store/modules/jobs/actions';
import * as detailJob from '../../store/modules/detail/actions';

import vaga from '../../assets/vaga.jpg';
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
    height: '15vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  card: {
    margin: 5,
    flexDirection: 'column',
    height: '300px',
    width: 250,
    borderRadius: 10,
    backgroundColor: '#404040',
    padding: 3,
  },
  mapa: {
    maxWidth: '40%',
    minWidth: '250px',
    minHeight: '120px',
    borderRadius: 10,
  },
  titulo: {
    lineHeight: 1.2,
    color: 'white',
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  empresa: {
    fontSize: '16px',
    lineHeight: 1.2,
    color: 'white',
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  salario: {
    lineHeight: 1.2,
    color: '#BBBBBB',
    fontFamily: 'Roboto',
    marginLeft: 10,
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
  },
  agendar: {
    background: '#00c662 !important',
    color: 'white',
    flex: 1,
    margin: '5px',
  },
});

export default function Jobs() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const jobsList = useSelector(state => state.jobs);

  function handleSchedule(j) {
    dispatch(detailJob.detail(j));
  }

  useEffect(() => {
    async function loadJobs() {
      const response = await api.get('jobs');

      const data = response.data.map(job => ({
        ...job,
      }));

      dispatch(storeJob.storeJobs(data));
    }

    loadJobs();
  }, [dispatch]);

  return (
    <>
      <Box>
        <Header />

        <Grid container className={classes.content}>
          {jobsList.map(j => (
            <Grid>
              <Box className={classes.card} xs={8} spacing={3}>
                <img
                  className={classes.mapa}
                  src={vaga}
                  title="Mapa da vaga"
                  alt=" "
                />
                <p className={classes.titulo}>{j.title}</p>
                <p className={classes.empresa}>{j.company_name}</p>
                <p className={classes.salario}>ID vaga {j.salary.id}</p>

                <Box className={classes.btn}>
                  <Button
                    className={classes.agendar}
                    variant="contained"
                    href=""
                    onClick={handleSchedule(j)}
                  >
                    Agendar entrevista
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid className={classes.footer}>
          <Footer />
        </Grid>
      </Box>
    </>
  );
}
