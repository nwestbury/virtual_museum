import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import graphPie from './img/graph_pie.jpg';
import geoanimationVideo from './img/geoanimation.mov';

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
                        <i>Bothriolepis</i> Fossil
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Fossil Discovery
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    The Miguasha fossil site is a Lagerstätten in eastern Québec. It was one of the first major paleontological locations to have been discovered and excavated in North America.The the first fossils to be discovered at Miguasha was made in 1842 by Abraham Gesner, the government geologist in New Brunswick. This fossil was most likely <i>Bothriolepis canadensis</i>, one of the most common fish from the Escuminac Formation (Gesner, 1843).
                  </Typography>
                  <br />
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <CardContent>
                      <Typography component="h3" variant="h5" align="center">
                        Fun Fact: Tortise or Fish?
                      </Typography>
                      <Typography component="p">
                        Bothriolepis was the first fossil vertebrate mentioned by Abraham Gesner, a Canadian physician and a geologist in his 1842 when he first discovered the Miguasha site. He confused the species with a tortoise because it consists of robust plates that surround its head and thorax.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <CardMedia
                      component="img"
                      alt="Relative distribution of escuminac fish genuses"
                      image={graphPie}
                      title="Relative distribution of escuminac fish genuses"
                    />
                  </Card>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <video controls muted className={classes.card}>
                      <source src={geoanimationVideo + '#t=26,40'} type="video/mp4"></source>
                    </video>
                    <CardContent>
                      <Typography component="p">
                        Video simulation of plate tectonics through geologic time, Devonian starts at 0:26 (Sage animation, 2007).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Type of Fossil
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    <i>Bothriolepis</i> fossils are typically body fossils that are generally consist of the plates that surround its head and thorax, as well as the fins attached to the back of its skull.
                  </Typography>
                  <br />
                  <Typography component="h3" variant="h5" align="center">
                    Importance of the Find
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    The <i>Bothriolepis</i> was found to have a series of small circular bite marks which is most likely from an osteichthyan located on the surface of the shield bones. This is one of the earliest signs of predation. The flattened morphology and dorsal eye position implies that the <i>Bothriolepis</i> was a bottom dweller. <i>Bothriolepis</i>, is considered a benthivore, which is an organism that feeds on benthic prey (Moloshnikov 2008). Conchostracans  and their valves have been found in the bothriolepis digestive tracts (Cloutier, 1996). Social behaviour has been suggested for Bothriolepis because fossil groups are often composed of similar sized individuals or age groups (Cloutier et al., 2011).
                  </Typography>
                  <br />
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <CardContent>
                      <Typography component="h3" variant="h5" align="center">
                        Fun Fact: Fossilized Mass Grave
                      </Typography>
                      <Typography component="p">
                        At the beginning of the 20th Century, William Pattern, an American Paleontologist discovered a bed of very rich <i>Bothriolepis</i> specimens which were all facing in the same direction. It is considered to be an excellent example of a snapshot in time because a large amount of fish population was captured momentarily fighting a fatal current. This allowed paleontologists to trace the position of the animal’s main internal cavities, from the pharyngeal cavity in the head to the intestinal system.
                      </Typography>
                    </CardContent>
                  </Card>
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