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
                <Grid item sm={12} md={6}>
                    <ExpandableCard 
                    header="Head"
                    subheader=""
                    preview="There are two openings through the head of Bothriolepis: a keyhole opening along the midline on the upper side for the eyes and nostrils and an opening for the mouth on the lower side near the anterior end of the head."
                    image={HeadImage}
                    content={
                        <React.Fragment>
                            <Typography paragraph>
                            A discovery regarding preserved structures that appear to be nasal capsules confirms the belief that the external nasal openings lay on the dorsal side of the head near the eyes.[7] Additionally, the position of the mouth on the ventral side of the skull is consistent with the typical horizontal resting orientation of Bothriolepis. It had a special feature on its skull, a separate partition of bone below the opening for the eyes and nostrils enclosing the nasal capsules called a preorbital recess.
                            </Typography>
                        </React.Fragment>
                    }
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                  <ExpandableCard
                  header="Jaw"
                  subheader=""
                  preview="A new sample from the Gogo Formation in the Canning Basin of Western Australia has provided evidence regarding the morphological features of the visceral jaw elements of Bothriolepis."
                  image={JawImage}
                  content={
                    <React.Fragment>
                        <Typography paragraph>
                        Using the sample, it is evident that the mental plate (a dermal bone that forms the upper part of the jaw) of antiarchs is homologous with the suborbital plate found in other placoderms. The lower jawbone consists of differentiated blade and biting portions. Next to the mandibular joint are the prelateral and infraprelateral plates, which both are canal-bearing bones. The palatoquadrate lacks a high orbital process and was attached only to the ventral part of the mental plate, proving that the ethmoidal region of the braincase (the region of the skull that separates the brain and nasal cavity) was in fact deeper than originally believed.[8] In addition to the above listed sample from the Gogo Formation, several other specimens have been found with mouthparts held in the natural position by a membrane that covers the oral region and attaches to the lateral and anterior margins of the head.[9] Bothriolepis has a jaw in which the two halves are separate and in the adult are functionally independent.[9]
                        </Typography>
                    </React.Fragment>
                  }
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                    <ExpandableCard
                    header="Trunk"
                    subheader=""
                    preview="Bothriolepis had a slender trunk that was likely covered in soft skin with no scales or markings."
                    image={TrunkImage}
                    content={
                        <React.Fragment>
                            <Typography paragraph>
                            The orientation that appears to have been most stable for resting was dorsal surface up, evidenced by the flat surface on the ventral side.[1] The trunk's outline suggests that there may have been a notochord present surrounded by a membranous sheath,[9] however there is no direct evidence of this since the notochord is made up of soft tissue, which is not typically preserved in the fossil record. Similar to other antiarchs, the thoracic shield of Bothriolepis was attached to its heavily armored head. Its box-like body was enclosed in armor plates, providing protection from predators. Attached to the ventral surface of the trunk is a large, thin, circular plate marked by deep-lying lines and superficial ridges. This plate lies just below the opening to the cloaca.[9]
                            </Typography>
                        </React.Fragment>
                    }
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <ExpandableCard
                    header="Fins and tail"
                    subheader=""
                    preview="Bothriolepis had a long pair of spine-like pectoral fins, jointed at the base, and again a little more than halfway along."
                    image={FinsImage}
                    content={
                        <React.Fragment>
                            <Typography paragraph>
                            These spike-like fins were probably used to lift the body clear off the bottom; its heavy armor would have made it sink quickly as soon as it lost forward momentum.[2][12] It may also have used its pectoral fins to throw sediment (mud, sand or otherwise) over itself. In addition to the pectoral fins, it also had two dorsal fins: a low, elongated anterior dorsal fin and a high rounded posterior dorsal fin [9]—though the hypothesized structure of the dorsal fins varies based on the specific species of Bothriolepis and has been modified several times in the reconstructions released by researchers as new information has become available. The caudal tail was elongated, ending in a narrow band, but is unfortunately rarely preserved in fossils.[9] Although there is no agreed upon explanation of their function, Bothriolepis also had two membranous, ventral frills located on the posterior end of the trunk carapace on either side of the tail that each have two distinct regions.[7] There is no evidence that the frills were involved in support of the skeleton but it is possible that they either functioned as fins or were involved in reproduction, and may have even been present in one sex but not the other.[7]
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