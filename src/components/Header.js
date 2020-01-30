import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

import logo from '../assets/el.svg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '20vh',
  },
  imagem: {
    margin: 'auto',
    display: 'block',
    backgroundImage: `url(${logo})`,
    maxWidth: '20%',
    minWidth: '300px',
    minHeight: '120px',
    repeat: 'no-repeat',
    backgroundSize: '100%',
  },
});

export default function Template() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardMedia className={classes.imagem} title="Emprego Ligado" src={logo} />
    </div>
  );
}
