import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Iframe from 'react-iframe';

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import figure1 from './img/figure1.png';

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

    /*
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
    */

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography component="h1" variant="h4" align="center" color="textPrimary">
                        <i>Bothriolepis</i>: Introduction
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    What it is?
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    <i>Bothriolepis</i> is a genus of extinct fishes that are characteristic of the middle and late Devonian period (387 million- 360 million years ago). They belong to the order Antiarcha, and the class <i>Placodermi</i>, with about hundreds of different fossil species found all around the world.
                  </Typography>
                  <br />
                  <Typography component="h3" variant="h5" align="center">
                    Diet
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    <i>Bothriolepis</i> were detritivores meaning they feed on decomposing organic matter. They fed on a diet of mud, microorganisms, and algae as evidenced by “carbonaceous material” and “fine muddy or silty stone usually present in the posterior alimentary tract” (Denison 1941). Based on the ventral position of the mouth, Robert Dension determined that  <i>Bothriolepis</i> was likely a bottom feeder.
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
                    <CardMedia
                      component="img"
                      alt="Relative distribution of escuminac fish genuses"
                      image={figure1}
                      title="Relative distribution of escuminac fish genuses"
                    />
                    <CardContent>
                      <Typography component="p">
                        Figure 1: Map of a single field site designated NV2K11, near Okse Bay on southern Ellesmere Island, Nunavut, Canada.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Environment (of origin and throughout time)
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    In 1840, Karl Eichwald, a German geologist, physician and a naturalist introduced the name <i>Bothriolepis</i> from the Novgorod region of present-day Russia. Since its discovery, <i>Bothriolepis</i> specimens have been discovered from the lower Devonian of China, Middle Devonian of Australia and Antarctica, and Upper Devonian localities on every continent. Some of the large-bodied species of <i>Bothriolepis</i> from the Upper Devonian period are found on the Ellesmere Island in Nunavut, Canada (see figure 1). Some recent work has suggested that <i>Bothriolepis</i> lived in Devonian environments that are traditionally thought to be marine and freshwater environments including lagoons, rivers, deltas and coastal environments, which made it easier for them to feed on invertebrates such as crustaceans and molluscs.
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