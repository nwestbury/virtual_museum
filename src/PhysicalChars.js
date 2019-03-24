import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ExpandableCard from './ExpandableCard';

import FinsImage from './img/fins.png';
import HeadImage from './img/head.png';
import JawImage from './img/jaw.png';
import TrunkImage from './img/trunk.png';

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
            <Grid container spacing={24} alignContent="center"> 
                <Grid item xs={12} >
                    <Typography component="h1" variant="h4">
                        Bothriolepis Physical Characteristics
                    </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Typography variant="subtitle1" align="left">
                    The Bothriolepis was not a very large fish of the Devonian period (Thayer, 2009). This placoderm had very interesting features given that it could reside in both aquatic and terrestrial environments (Thayer, 2009). Certain scientists believed that this ability was largely owing to organs that resembled lungs in these fishes (Denison, 1941). These organs, given that they were soft tissue and usually unlikely to preserve, were impacted by sediment which aided the preservation of the internal organs by a process that Robert Denison outlines in The soft Anatomy of Bothriolepis as differential filling; where in, because the internal organs have some connection to the external environment could be layered with sediment and therefore better preserved.  What was also very important about these creatures was that they had armor or a casing around them, which likely protected them from predators (Thayer, 2009). 
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Typography component="h6" variant="h6">
                    Click on the arrows to learn more about different Bothriolepis body characteristics!
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                    <ExpandableCard 
                    header="Head"
                    subheader=""
                    preview="Bothriolepis had a uniquely shaped head with closely placed ventral eyes"
                    image={HeadImage}
                    content={
                        <React.Fragment>
                            <Typography paragraph align="left">
                              The head itself was encased in armor along with the body (Denison, 1941). Located on the dorsal portion of the head are also the openings for the nares (Denison, 1941). The head casing is so well fitting that it restricts movements including up, down and side to side movements. The opening for the gill slits, however is not compromised by the encasement but does have its own protective cover, known as the operculum (Béchard et al., 2014).
                            </Typography>
                        </React.Fragment>
                    }
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                  <ExpandableCard
                  header="Jaw"
                  subheader=""
                  preview="Bothriolepis had a jaw with two functionally independent halves"
                  image={JawImage}
                  content={
                    <React.Fragment>
                        <Typography paragraph align="left">
                          Even though Bothriolepis was one of the earlier species to possess a jaw, it fed mostly in a fashion that did not require immense engagement of the jaw for chewing (Thayer, 2009). The upper and lower portions of the jaw are paired and the mandible and maxilla have their own separate halves. It is proposed that the maxillae and the mandible of the Bothriolepis would work synergistically in manipulating the food that was eaten (Patten, 1904).
                        </Typography>
                    </React.Fragment>
                  }
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                    <ExpandableCard
                    header="Trunk"
                    subheader=""
                    preview="Bothriolepis used its small armor trunk as protection against predators"
                    image={TrunkImage}
                    content={
                        <React.Fragment>
                            <Typography paragraph align="left">
                              Bothriolepis did not have a very large body; it did have armor over the head and central portions of its body (Béchard et al., 2014). Though Bothriolepis might not have had traditional scales like other fish, the skin of its body was actually quite strong and its armor is what provides it with protection from predation (Patten, 1904). The underside of Bothriolepis has an interestingly circular plate that covers the aperture to its cloaca (Patten, 1904). Having the cloaca farther up was not an issue for this fish since the excretion was removed in the posterior end and was aided by the water current (Patten, 1904).
                            </Typography>
                        </React.Fragment>
                    }
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <ExpandableCard
                    header="Tail/ Fins/ Motility"
                    subheader=""
                    preview="Bothriolepis' tail and fins allowed it to navigate with ease"
                    image={FinsImage}
                    content={
                        <React.Fragment>
                            <Typography paragraph align="left">
                              Bothrioleps possessed two protected pectoral fins, which allowed a fair array of motion; as well as a dorsal and caudal fin which were part of the softer portions of the fish and where the armor did not extend to, as this may have further restricted its movements (Béchard et al., 2014). The caudal fin was slender and longer likely to aid in swimming; it was the major fin involved in swimming while the dorsal and pectoral fins were more for stabilization and driving  (Béchard et al., 2014; Patten, 1904). In terms of motility, the caudal fin would propel the fish forward through side-to-side movements and the motion has been compared to that of a boxfish, which has ostraciiform locomotion (Béchard et al., 2014). Scientists also had reason to believe that these fishes may have used their pectoral fins, which had some level of articulation, to allow them to wriggle onto land, as well as burrow into wet mud (Thayer, 2009).  
                            </Typography>
                        </React.Fragment>
                    }
                    />
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