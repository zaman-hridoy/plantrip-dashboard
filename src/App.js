import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Scrollbars } from 'react-custom-scrollbars';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Sidebar from './components/menu/Sidebar';
import Header from './components/ui/Header';

const useStyles = makeStyles( theme => ({
  container: {
    background: theme.palette.secondary.dark
  },
  menuSection: {
      minWidth: '18em'
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXsToMd = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  console.log(matchesXsToMd)
  return (
    <div className={classes.container}>
      <Grid container direction="row">
          {!matchesXsToMd && (
            <Grid item className={classes.menuSection}>
                <Sidebar />
            </Grid>
          )}
          <Grid item sm>
                <Header />
          </Grid>
      </Grid>
    </div>
  )
}

export default App;


