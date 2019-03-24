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

import Chart from './Chart';

import Geotimescale from './img/geo-timescale.gif';

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

class HistoryPage extends React.Component {
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
                      Paleological Importance
                    </Typography>
                    <br></br>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Why it is important in understanding of early life forms and/ or past environments?
                  </Typography>
                  <br></br>
                  <Typography variant="subtitle1" align="left">
                    Bothriolepis is one of the earliest known genuses in the Placodermi, a class of armoured fish and is an important piece in their evolutionary history. Like other Placeodermi, it thrived during the Devonian known as the “Age of the Fish”. It is an important index fossil and also opens questions about the origin of terrestrial life.
                    <br/><br/>
                    Three characteristics, its wide species diversity, wide distribution, and short existence, make it an important biostratigraphic and index fossil. Its relatively short geological existence, roughly 50 millions years between 400 Ma and 350 Ma, help narrow down its fossils to the Middle and Upper Devonian epochs. Even better, Bothriolepis has more than 60 known species (Young 2010) with certain species allowing for further specificity into the Frasnian (372.2 Ma-382.7 Ma) and Famennian (358.9 Ma-372.2 Ma) stages (Lukševič 2001). For example, the Bothriolepis cierere was primarily present during the Famennian stage (Lukševič 2001).
                    <br/><br/>
                    It was geographically widespread meaning it can be used by paleontologists worldwide. In certain geographical areas, such as the Baltic region or north-western Russia, the species can be used to correlate stages within the Upper Devonian epoch based on deposits. The majority of Bothriolepis are found in freshwater river and lakes but some species are in marine conditions allowing a wide distribution.
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <CardMedia
                      component="img"
                      alt="Placoderm Timescale"
                      image={Geotimescale}
                      title="Placoderm Timescale"
                    />
                    <CardContent>
                      <Typography component="p">
                        Placoderms appeared in the middle-late Sulfurian but were most widespread during the Devonian
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={12}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <Chart width={'100%'} height={400} />
                    <CardContent>
                      <Typography component="p">
                        Explore Geologic Time! Click on previous names to put into context the Devonian Period (Peters 2015)
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={12}>
                  <Typography component="h3" variant="h5" align="center">
                    How it shapes our understanding of the history of the Earth?
                  </Typography>
                  <br></br>
                  <Typography variant="subtitle1" align="left">
                    Wells and Door (1985) suggested that Bothriolepis could have been partly terrestrial. They point to three key pieces of evidence: armor could support their body on land, jointed pectorals allow the fish to move on land, and their sac-like structures would be able to breath air. Studying Bothriolepis allows to better understand the conditions that led to terrestrial life starting in the early Carboniferous period, one of the key events in Earth’s history.
                  </Typography>
                </Grid>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

HistoryPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HistoryPage);