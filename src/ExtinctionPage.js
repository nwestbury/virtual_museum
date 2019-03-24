import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: '20px',
    },
  },
  paper: {
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
  card: {
    height: 'auto',
    width: '100%',
  },
  flex: {
    alignItems: 'center',
    display: 'flex',
  },
  flexVCenter: {
    textAlign: 'center',
    verticalAlign: 'middle',
  },
});

class FossilPage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h4" align="center">
                        <i>Bothriolepis</i> Extinction
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Did climate change have an effect on it?
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    !!!! DUNNNO !!!!
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <div height={200}>
                  </div>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <div height={200}>
                  </div>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Part of a specific extinction? Pattern and timing of the mass extinction
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    !!! FILL THIS !!!
                  </Typography>
                </Grid>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

FossilPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FossilPage);