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
                        Bothriolepis History
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    <i>Bothriolepis virginiensis</i>
                  </Typography>
                  <Typography variant="subtitle1">
                    Originally described by Weems et al. in 1981, this species, Bothriolepis virginiensis, is from the "Chemung", near Winchester, Virginia. Several traits found in B. virginiensis can also be found in other species of Bothriolepis, (especially B. nitida), including posterior oblique cephalic sensory line grooves that meet relatively far anteriorly on the nuchal plate, relatively elongated orbital fenestra and a low anterior-median-dorsal crest.[14] Characteristics that distinguish B. virginiensis from other species include but are not limited to fused head sutures, fused elements in adult distal pectoral fin segments and long premedian plate relative to headshield length.[14]  
                    <br/><br/>
                    Currently, there is much debate regarding whether the species B. virginiensis and B. nitida can actually be distinguished from one another. Thomson and Thomas state that five species of Bothriolepis from the United States (B. nitida, B. minor, B. virginiensis, B. darbiensis and B. coloradensis) are unable to be consistently distinguished from one another.[4] Conversely, Weems asserts that there are several traits that distinguish the species from one another, including several listed above.[14]
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