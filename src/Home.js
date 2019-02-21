import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import BothriolepisImage from './img/Bothriolepis.jpg';
import BothriolepisCanadensisImage from './img/Bothriolepis_canadensis.jpg';

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
                    <Typography component="h1" variant="h4" align="center">
                        Bothriolepis
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                        Intro
                    </Typography>
                  <Typography variant="subtitle1">
                    Bothriolepis (Greek: "pitted scale" or "trench scale") is a widespread, abundant and diverse genus of antiarch placoderms that lived during the Middle to Late Devonian period of the Paleozoic Era. Historically, Bothriolepis resided in an array of paleo-environments spread across every paleocontinent, including near shore marine and freshwater settings.[1] Most species of Bothriolepis were characterized as relatively small, benthic, freshwater detritivores (organisms that obtain nutrients by consuming decomposing plant/animal material), averaging around 30 centimetres (12 in) in length.[2] However, the largest species, B. maxima, had a carapace about 100 centimetres (39 in) in length. Although expansive with over 60 species found worldwide,[3] comparatively Bothriolepis is not unusually more diverse than most modern bottom dwelling species around today.[4]
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <CardMedia
                      component="img"
                      alt="Bothriolepis"
                      image={BothriolepisImage}
                      title="Bothriolepis"
                    />
                    <CardContent>
                      <Typography component="p">
                        Model of B. canadensis
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <CardMedia
                      component="img"
                      alt="Bothriolepis"
                      image={BothriolepisCanadensisImage}
                      title="Bothriolepis"
                    />
                    <CardContent>
                      <Typography component="p">
                      Cast of a B. canadensis fossil
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Classification
                  </Typography>
                  <Typography variant="subtitle1">
                    Bothriolepis is a genus placed within the placoderm order Antiarchi. The earliest antiarch placoderms first appeared in the Silurian period of the Paleozoic Era and could be found distributed on every paleocontinent by the Devonian period.[5] The earliest members of Bothriolepis appear by the Middle Devonian. Antiarchs, as well as other placoderms, are morphologically diverse and are characterized by bony plates that cover their head and the anterior part of the trunk.[5] Early ontogenetic stages of placoderms had thinner bony plates within both the head and trunk-shield, which allowed for easy distinction between early placoderm ontogenetic stages within the fossil record and taxa that possessed fully developed bony plates but were small by characterization.[5] Placoderm bony plates were generally made up of three layers, including a compact basal lamellar bony layer, a middle spongy bony layer and a superficial layer;[5] Bothriolepis can be classified as a placoderm since it possesses these layers. Placoderms were extinct by the end of the Devonian.[5] Placodermi is a paraphyletic group of the clade Gnathostomata, which includes all jawed vertebrates.[5] It is unclear exactly when gnathostomes emerged, but the scant early fossil record indicates that it was sometime in the Early Palaeozoic era.[6] The last species of Bothriolepis died out, together with the rest of Placodermi, at the end of the Devonian period.
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