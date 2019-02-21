import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';

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

class StuffPage extends React.Component {
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
                        Bothriolepis History
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    <i>Bothriolepis virginiensis</i>
                  </Typography>
                  <Typography variant="subtitle1">
                  Bothriolepis (Greek: "pitted scale" or "trench scale") is a widespread, abundant and diverse genus of antiarch placoderms that lived during the Middle to Late Devonian period of the Paleozoic Era. Historically, Bothriolepis resided in an array of paleo-environments spread across every paleocontinent, including near shore marine and freshwater settings.[1] Most species of Bothriolepis were characterized as relatively small, benthic, freshwater detritivores (organisms that obtain nutrients by consuming decomposing plant/animal material), averaging around 30 centimetres (12 in) in length.[2] However, the largest species, B. maxima, had a carapace about 100 centimetres (39 in) in length. Although expansive with over 60 species found worldwide,[3] comparatively Bothriolepis is not unusually more diverse than most modern bottom dwelling species around today.[4]
                  </Typography>
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
                        Video simulation of Bothriolepis swimming
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

StuffPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StuffPage);