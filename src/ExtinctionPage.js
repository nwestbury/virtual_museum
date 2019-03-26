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
import YouTube from 'react-youtube';

import Dialog from './Dialog';

import rip from './img/rip.png';
import figure2 from './img/figure2.png';
import park_both from './img/park_both.png';
import tetrapod from './img/tetrapod.png';

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
  heightCard: {
    height: '100%',
    width: 'auto',
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
                    Extinction
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    <Dialog title="Fossils" def="A fossil is any remain of an animal or plant that lived in the past (Benton & Harper, 2009)." /> provide the key evidence that no species will last forever (Benton & Harper, 2009). Fossils are proof that <Dialog title="extinction" def="Extinction is the disappearance of a species, genus or family from the Earth (Benton & Harper, 2009)." /> is a normal phenomenon and without the fossil record we might be led to believe that extinctions have been caused mostly by human interactions (Benton & Harper, 2009). However, there is strong evidence that climate and environmental changes and extraterrestrial impacts have caused extinction events in the past (Benton & Harper, 2009).
                    <br /><br />
                    The first person to mention the idea of extinction is Robert Hooke during the 18th century, but it was George Cuvier who demonstrated the phenomenon (Benton & Harper, 2009). Extinction occurs all the time with species having a normal length of time of a few thousand years to a few million before they disappear (Benton & Harper, 2009). This means there is a background extinction rate that is occurring without any large-scale causes (Benton & Harper, 2009). Possibly five to ten percent of species may go extinct every million years (Benton & Harper, 2009). However, it is mass extinctions that capture the fascinations of scientists and the public because they are times that represent powerful catastrophes (Benton & Harper, 2009). 
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                   <Card className={classes.flexVCenter}>
                    <CardMedia
                      component="img"
                      alt="Extinction graveyard"
                      image={rip}
                      title="Extinction graveyard"
                    />
                    <CardContent>
                      <Typography component="p">
                        Figure 1. Grave stones of animals that went extinct (BrainPOP, 2019).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.flexVCenter}>
                    <CardMedia
                      component="img"
                      alt="Extinction events throughout geologic time"
                      image={figure2}
                      title="Extinction events throughout geologic time"
                    />
                    <CardContent>
                      <Typography component="p">
                        Figure 2. A chart displaying the extinction events throughout geologic time (Benton & Harper, 2009).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    The “Big Five” Phanerozoic Extinction Events
                  </Typography>
                  <br />
                  <Typography variant="subtitle1" align="left">
                    In the phanerozoic eon there has been five big mass extinction events that have occurred in the end- Ordovician, late Devonian, end of the Permian, end of the Triassic, and the end of the Cretaceous (Benton & Harper, 2009). The two best known mass extinctions are the end-Permian mass extinction which was the largest of all time and the end-Cretaceous mass extinction which was the second largest and was most likely caused by a major impact from an extraterrestrial object (Benton & Harper, 2009). However, the notion of the “Big Five” mass extinction events has been questioned by a statistical survey that has shown that maybe there was only three real mass extinctions (Benton & Harper, 2009). Such as, the end-Ordovician, end-Permian, and the end-Cretaceous mass extinctions (Benton & Harper, 2009). The statistical survey showed that the late Devonian and end-Triassic events did not stand out above <Dialog title="background extinction" def="Background extinction is the normal duration of species that exist from thousands to millions of years (Benton & Harper, 2009)." /> rates as clearly at those times (Benton & Harper, 2009). This study has an interesting suggestion that there were only three real mass extinctions, but the thought of the “Big Five” mass extinctions is still commonly taught and accepted. 
                    <br /> <br />
                    The end-Ordovican mass extinction is associated with evidence for <Dialog title="climate change" def="Climate change is when the Earth’s climate changes such as a change in the Earth’s usual temperature (NASA, 2017)."/> (Benton & Harper, 2009). About 445 million years ago in the end of the Ordovician period southern continents had drifted over the south pole which started a vast glaciation (Benton & Harper, 2009). As the ice spread north in all directions it locked the water from the oceans into the glaciers causing the sea levels to lower causing many warm water faunas to die out as the tropical belt disappeared (Benton & Harper, 2009). 
                    <br /> <br />
                    The late Devonian mass extinction occurred about 380 to 360 million years ago and the cause of this mass extinction is not quite clear (Benton & Harper, 2009). This mass extinction could have been possibly a sequence of smaller extinction events (Benton & Harper, 2009). What may have caused the mass extinction is a cooling phase with anoxic oceans, or impacts of extraterrestrial objects (Benton & Harper, 2009). For more on this mass extinction and how it affected <i>Bothriolepis canadensis</i> continue reading down to The Late Devonian Extinction.
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <YouTube videoId="wissIOikrqc" opts={{
                        width: '100%',
                        playerVars: {
                            loop: 1,
                        }
                    }}/>
                    <CardContent>
                      <Typography component="p">
                        Here is a short educational video on mass extinctions that have occurred throughout time on Earth (AsapSCIENCE, 2015).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography variant="subtitle1" align="left">
                    The end-Permian mass extinction is the largest of all time (Benton & Harper, 2009). It is thought that about approximately 251 million years ago right at the PT boundary was the peak of eruptions of the <Dialog title="Siberian Traps" def="The Siberian Traps are in eastern Russia and are roughly 2 million km3 of basalt lava that has an area of 1.6 million km2 and a depth of 400 to 3000 m (Benton & Harper, 2009)." /> that triggered global warming, releasing massive volumes of methane causing further warming (Benton & Harper, 2009). The volcanic gases combined with water creating acid rain that killed the land plants which were washed away, and this caused the soils to be eroded off the land (Benton & Harper, 2009). Without plants to eat from the land animals died (Benton & Harper, 2009). Also, the enormous Siberian eruptions caused global warming which is associated with the loss of oxygen making the sea beds anoxic thus, life in the sea died (Benton & Harper, 2009). The main killing agents were global warming, sea level change, anoxia, and volcanic eruptions (Benton & Harper, 2009). 
                    <br /> <br />
                    The end-Triassic mass extinction occurred roughly 200 million years ago and there is some evidence that impact from extraterrestrial objects is a likely cause to this event (Benton & Harper, 2009). However, majority of the evidence points towards global warming and <Dialog title="anoxia" def="Anoxic means to have no oxygen or to have low oxygen (Benton & Harper, 2009)." /> from massive flood basalt eruptions that occurred in the middle of <Dialog title="Pangea" def="The word Pangea means “all world” and a supercontinent was named after it that was formed of all the modern continents (Benton & Harper, 2009)." /> (Benton & Harper, 2009). 
                    <br /> <br />
                    Lastly, the end-Cretaceous mass extinction occurred 65 million years ago and there is evidence to suggest that this event was caused by a 10 km extraterrestrial object that impacted the Earth causing a cloud of dust that encircled the planet which blacked out the sun (Benton & Harper, 2009). This resulted in photosynthesis in plants and phytoplankton to stop and the loss of plants causing the death of animals (Benton & Harper, 2009).
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Late Devonian Mass Extinction
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    The late Devonian mass extinction event was the second mass extinction out of the “Big Five” events in the Earth’s history (Bagley, 2014). There have been many proposals of what may have caused this mass extinction but, perhaps there may have been several causes that triggered this event (Miguasha National Park, 2009). In the late Devonian there is known to have been two events that saw the extinction of species (Bagley, 2014). Such as, the Kellwasser event that took place at the boundary of the Givetian and Frasnian stages which was responsible for the disappearance of coral reefs, trilobites and the jawless fish (Bagley, 2014). Then there was the Hangenberg event that took place in the late Devonian at the end of the Famennian stage causing the extinction of the famous <Dialog title="placoderms" def="A class of fish that appeared in the mid-Silurian period and went extinct in the late Devonian period having armor, simple jaws, and a hinged head shield (Benton & Harper, 2009)." /> such as <i>Bothriolepis canadensis</i> (Bagley, 2014; Miguasha National Park, 2007). Overall, 70% of the species that lived in the Devonian period disappeared and did not exist in the carboniferous period (Miguasha National Park, 2007).
                    <br /> <br />
                    There were multiple causes that triggered the late Devonian mass extinction such as marine anoxia causing suffocation of marine life, global cooling, a decrease in sea level, toxic ocean waters, and meteorite impacts (Bagley, 2014; Baraniuk, 2015; Miguasha National Park, 2007). The rise in vascular plants on land during the Devonian caused the release of nutrients and minerals that would wash into the rivers and travel out to sea due to their deep roots breaking up the rocks (Baraniuk, 2015). Resulting in large algal blooms that would have then been decomposed by bacteria using up oxygen causing the water column to become anoxic (Baraniuk, 2015). With these anoxic waters fish either died or were forced to other areas and were concentrated to avoid suffocation (Baraniuk, 2015). This could have potentially led to intense predation in certain areas. However, lack of oxygen does not explain the full story since there were many sharks that survived in spite of needing oxygen and there would be oxygen in the upper layers from the mixing of air (Baranuik, 2015). A study done on a fossil of a crab-like creature provides evidence of sulphur chemicals being present causing the oceans to be toxic (Baranuik, 2015). The toxic hydrogen sulphide was produced as waste from other microorganisms that fed on the algal blooms that were created from the run-off of nutrients from land (Baranuik, 2015). Also, as the photosynthetic plants grew on land, the more carbon dioxide (CO2) was taken out of the atmosphere resulting in global cooling since CO2 is a <Dialog title="greenhouse gas" def="A gas that promotes the heating of the atmosphere by the greenhouse effect such as carbon dioxide (Benton & Harper, 2009)." /> (Baraniuk, 2015). As the planet cooled, glaciers would form trapping water on land causing a decrease in sea level causing even more disturbance to marine life (Baranuik, 2015).  Thus, fish like <i>Bothriolepis canadensis</i> in the ocean would have died out due to the success of plants on land (Baraniuk, 2015). However, there is evidence of an extraterrestrial impact crater in Western Australia that dates 359 million years ago but, it is small spanning 120 km compared to the impact crater at Chicxulub that is 180 km that caused the end-cretaceous mass extinction (Baranuik, 2015; Benton & Harper, 2009). Therefore, it does not seem likely to be the sole cause of the late Devonian extinction event but contributed to it (Baranuik, 2015). Thus, the late Devonian mass extinction occurred as a result of multiple causes resulting in the extinction of the placoderm <i>Bothriolepis canadensis</i> (Bagley, 2014; Baranuik, 2015; Miguasha National Park, 2007).
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Grid container spacing={24}>
                    <Grid item sm={12}>
                      <Card className={classes.card + ' ' + classes.flexVCenter}>
                        <CardContent>
                          <Typography component="h3" variant="h5" align="center">
                            Fun Fact: Did you Know?
                          </Typography>
                          <Typography component="p" variant="subtitle1">
                            It is still being debated that we could be experiencing a sixth mass extinction (Benton & Harper, 2009). With the increasing human population and increasing pressure on the environment plants and animals are dying at faster rates than times in the past (Benton & Harper, 2009). Suggesting humans are causing a modern-day mass extinction event (Benton & Harper, 2009).
                          </Typography>
                        </CardContent>
                      </Card>
                      </Grid>
                    <Grid item sm={12}>
                    <Card className={classes.flexVCenter}>
                      <CardMedia
                        component="img"
                        alt="Fossil image of the extinct Bothriolepis canadensis"
                        image={park_both}
                        title="Fossil image of the extinct Bothriolepis canadensis"
                      />
                      <CardContent>
                        <Typography component="p">
                          Figure 3. A complete fossil image of the extinct <i>Bothriolepis canadensis</i> (Miguasha National Park, 2007).
                        </Typography>
                      </CardContent>
                    </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <YouTube videoId="5pVTZH1LyTw" opts={{
                        width: '100%',
                        playerVars: {
                            start: 282,
                            loop: 1,
                        }
                    }}/>
                    <CardContent>
                      <Typography component="p">
                        A short educational video on mass extinctions that have occurred throughout time on Earth (AsapSCIENCE, 2015).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <CardContent>
                      <Typography component="h3" variant="h5" align="center">
                        Fun Fact: Did you know?
                      </Typography>
                      <br />
                      <Typography component="p" variant="subtitle1">
                        During the “Age of Fishes” the placoderms may have gone extinct in the late Devonian period but the tetrapods first appeared sometime in the Givetian to Famennian stages possibly due to trying to escape the competitive aquatic environment (Benton & Harper, 2009; Clack, 2007). As fish transitioned from water to land, surely the main issue would be breathing air (Benton & Harper, 2009). However, this was not the case as early fishes had both lungs and gills and could already breath air (Benton & Harper, 2009). The key issue was support, since in the water fish “weigh” like nothing but on land the animal requires something to support its body to be held up from the ground (Benton & Harper, 2009). Thus, this truly was a race for arms with the first tetrapods having seven or eight fingers (Benton & Harper, 2009).
                      </Typography>
                      <br />
                      <CardMedia
                        component="img"
                        alt="Early tetrapod"
                        image={tetrapod}
                        title="Early tetrapod"
                      />
                      <Typography component="p">
                        Figure 4. An image of an early tetrapod that appeared in the Devonian period (Benton & Harper, 2009).
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