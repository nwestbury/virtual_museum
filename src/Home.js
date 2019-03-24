import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';
import Iframe from 'react-iframe';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h4" align="center" color="textPrimary">
                        Bothriolepis: Introduction
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    What it is?
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    <i>Bothriolepis</i> is a genus of extinct fishes that are characteristic of the middle and late Devonian period (387 million- 360 million years ago). They belong to the order Antiarcha, and the class <i>Placodermi</i>, with about hundreds of different fossil species found all around the world.
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <Iframe url="https://sketchfab.com/models/fd7bda03c2684c72b3016dae134a8150/embed?autostart=1&internal=1&ui_infos=0&ui_snapshots=0&ui_stop=0&ui_watermark=0"
                    width="100%"
                    height="450px"
                    display="initial"
                    position="relative"
                    allowFullScreen/>
                    <CardContent>
                      <Typography component="p">
                        Interactive 3D model of <i>Bothriolepis canadensis</i>. Scroll to zoom, click and drag to rotate.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <YouTube videoId="YqSUASdU0Cg" opts={{
                        width: '100%',
                        playerVars: {
                            loop: 1,
                        }
                    }}/>
                    <CardContent>
                      <Typography component="p">
                        Video simulation of <i>Bothriolepis</i> swimming in their deep water environment
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Environment (of origin and throughout time)
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    !!!!!!! WRITE SOMETHING HERE !!!!!!!
                  </Typography>
                  <br />
                  <Typography component="h3" variant="h5" align="center">
                    Paleogeography
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    The paleogeography is thought to be lacustrine, which is associated with lakes, estuarine, which is a partially enclosed coastal body with streams and lakes flowing through it, coastal marine and marine.The Miguasha biote has a large assembly of fish during that time. (Cloutier et al. 1996)
                  </Typography>
                </Grid>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);