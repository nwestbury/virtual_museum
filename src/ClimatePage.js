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

import rock1 from './img/rock1.png';
import rock2 from './img/rock2.png';
import rock3 from './img/rock3.png';
import rock4 from './img/rock4.png';
import temptable from './img/temptable.png';
import devonian_climate from './img/devonian_climate.png';
import geomap from './img/geomap.png';
import temp_graph from './img/temp_graph.png';
import rip from './img/rip.png';


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
                        Climate
                    </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Climate
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    People all around the world are concerned
                    about <Dialog title="climate change" def="Climate change is when the Earth’s climate changes such as a change in the Earth’s usual temperature (NASA, 2017)." /> and
                    the future of plant, animal, and human life on Earth (Benton & Harper, 2009). There is a lot that we can learn about from the modern-day world, but studies of what has happened in the past
                    from <Dialog title="paleoclimates" def="Paleoclimates are climates in the past at a point in geological time (Benton & Harper, 2009)." /> can
                    provide key evidence of what future changes we can expect to see (Benton & Harper, 2009). Scientists can determine paleoclimates based on stable isotopes, sediments and climate sensitive biota (Benton & Harper, 2009). By looking at specific types of sedimentary rocks
                    like <Dialog title="calcretes" def="Calcretes are soils that are rich in calcium carbonate (Benton & Harper, 2009). An example of a calcrete rock is limestone (Minerals Education Coalition, 2019)." /> and <Dialog title="evaporites" def="Evaporites are chemical sedimentary rocks that form from the evaporation of the ocean or lakes (Geology.com, 2019). An example is rock salt (Geology.com, 2019)." /> it
                    can help indicate where dry, and arid climates would have been (Benton & Harper, 2009). Likewise, by
                    identifying <Dialog title="dropstones" def="Dropstones are stones that were deposited from the bottom of melting glaciers into seabed sediments (Benton & Harper, 2009)." /> and <Dialog title="tillites" def="Tillites are sands and rocks that were left behind by an advancing glacier (Benton & Harper, 2009)." /> it can provide evidence of polar conditions at one point in time on Earth (Benton & Harper, 2009).
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Grid container spacing={24}>
                    <Grid item sm={12} md={6}>
                      <Card className={classes.card}>
                        <CardMedia
                          component="img"
                          alt="Image of a sedimentary rock that is an evaporite which is known as rock salt"
                          image={rock1}
                          title="Image of a sedimentary rock that is an evaporite which is known as rock salt"
                        />
                        <CardContent>
                          <Typography component="p">
                            Figure 1: sedimentary rock that is an evaporite which is known as rock salt (Geology.com, 2019)
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item sm={12} md={6}>
                      <Card className={classes.card}>
                        <CardMedia
                          component="img"
                          alt="Sedimentary rock that is a calcrete specifically called limestone"
                          image={rock2}
                          title="Sedimentary rock that is a calcrete specifically called limestone"
                        />
                        <CardContent>
                          <Typography component="p">
                            Figure 2: sedimentary rock that is a calcrete called limestone (Minerals Education Coalition, 2019).
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item sm={12} md={6} className={classes.flex}>
                      <Card>
                        <CardMedia
                          component="img"
                          alt="Image of a sedimentary rock that is an evaporite which is known as rock salt"
                          image={rock3}
                          title="Image of a sedimentary rock that is an evaporite which is known as rock salt"
                        />
                        <CardContent>
                          <Typography component="p">
                            Figure 3: tillite (Illinois State Geological Survey, 2019)
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item sm={12} md={6} className={classes.flex}>
                      <Card>
                        <CardMedia
                          component="img"
                          alt="Dropstone"
                          image={rock4}
                          title="Dropstone"
                        />
                        <CardContent>
                          <Typography component="p">
                            Figure 4: dropstone (SERC-Carleton College, 2016).
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.flexVCenter}>
                    <CardMedia
                      component="img"
                      alt="Temperature Table"
                      image={temptable}
                      title="Temperature Table"
                    />
                    <CardContent>
                      <Typography component="p">
                        Table 1. Displaying the differences of the marine environment during icehouse conditions of Earth versus greenhouse conditions of Earth (Benton & Harper, 2009).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Climate Change
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                    In the last 600 million years there has been a minimum of at least five alternations of
                    the <Dialog title="climate" def="Climate is the long-term weather in a specific area (National Geographic, 2019)." /> between
                    greenhouse and icehouse conditions on Earth (Benton & Harper, 2009). The Earth’s climate has spent most of the time in greenhouse conditions (Benton & Harper, 2009). There is more than one process that can occur solely or in combination that can lead to climate change. Such as, the moving of the tectonic plates, Milankovitch cycles, or certain biota like photosynthesizes (Benton & Harper, 2009). Generally, throughout the Earth’s history it can be divided into five different climate zones such
                    as, <Dialog title="humid tropical" def="A Humid tropical climate zone has no winters and has average temperatures above 18 °C (Benton & Harper, 2009)."/>, <Dialog title="dry subtropical" def="A Dry Subtropical climate zone is where the evaporation exceeds the precipitation (Benton & Harper, 2009)."/>, <Dialog title="warm temperate" def="A Warm temperate climate zone has mild winters (Benton & Harper, 2009)."/>, <Dialog title="cool temperate" def="A Cool temperate climate zone has severe winters (Benton & Harper, 2009)." />,
                    and <Dialog title="polar" def="A Polar climate zone has no summers and the temperatures are below 10 °C (Benton & Harper, 2009)." /> (Benton & Harper, 2009). It is important to note that climate change is a natural process that has been occurring long before the existence of humans and is not a new phenomenon in the Earth’s history. As shown in the image (Figure 5) climate change has been occurring throughout time on Earth transitioning between icehouse and greenhouse conditions (Benton & Harper, 2009).
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography component="h3" variant="h5" align="center">
                    Devonian Climate
                  </Typography>
                  <Typography variant="subtitle1" align="left">
                  During the Paleozoic era, 416 million to 358 million years ago was the Devonian period (Bagley, 2014). The Devonian period came right after the Silurian period and was before the Carboniferous period and is often known as the “Age of Fishes” (Bagley, 2014). During the “Age of Fishes” the species of fish had an evolutionary explosion where many species were quite odd looking and very few resemble the fish of modern day (Miguasha National Park, 2007). It was during this period the fish
                  class <Dialog title="Placoderms" def="A class of fish that appeared in the mid-Silurian period and went extinct in the late Devonian period having armor, simple jaws, and a hinged head shield (Benton & Harper, 2009)." /> experienced adaptive radiation taking over the aquatic environment such as the bottom-dwelling fish known as <i>Bothriolepis canadensis</i> (Miguasha National Park, 2007). The paleogeography and paleoclimate of the Devonian period is different from the modern day (Figure 5).
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.flexVCenter}>
                    <CardMedia
                      component="img"
                      alt="Devonian Climate"
                      image={devonian_climate}
                      title="Devonian Climate"
                    />
                    <CardContent>
                      <Typography component="p">
                        Figure 5. Shows prehistoric plants and animals in the Devonian period (Paleontology World, 2017).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography variant="subtitle1" align="left">
                    In the geographic map of the world during the Devonian period (Figure 6) the Earth appears as a bizarre planet looking very different from the modern-day world (Miguasha National Park, 2007). During the Devonian there were three major landmasses such as Gondwana, Euramerica, and Siberia (Bagley, 2014; Miguasha National Park, 2007). Gondwana was positioned in mostly the southern hemisphere (Figure 6) and even covered the south pole having a cool temperate climate (Bagley, 2014; Miguasha National Park, 2007). Siberia was positioned more north having an arid type of climate and lastly, in the Devonian period the landmass Euramerica was found at the equator which had arid and tropical climates (Miguasha National Park, 2007). The position of Euramerica set the stage for the spread of tropical and equatorial forests (Miguasha National Park, 2007). As well, the position of the landmass near the equator indicates that vertebrate animals were concentrated there where the warm climate helped their development and evolution (Miguasha National Park, 2007). Overall, the climate of the continental interior regions during the Devonian period was warm (Figure 7) and dry having greenhouse conditions (Bagley, 2014; Miguasha National Park, 2007).
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.flexVCenter}>
                    <CardMedia
                      component="img"
                      alt="Geographic map of the Devonian period"
                      image={geomap}
                      title="Geographic map of the Devonian period"
                    />
                    <CardContent>
                      <Typography component="p">
                        Figure 6. Shows the geographic map of the Devonian period (Miguasha National Park, 2007).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Typography variant="subtitle1" align="left">
                    The placoderm <i>Bothriolepis canadensis</i> lived in the greenhouse condition Earth but went extinct near the late Devonian when climate change occurred. Near the end of the Devonian period there is a time of global cooling and glaciation that caused the extinction of many species (Miguasha National Park, 2007). The cooler climate might be explained by the appearance of photosynthetic plants (Miguasha National Park, 2007). Plants that use photosynthesis will take carbon dioxide (CO2) out of the atmosphere which is
                    a <Dialog title="greenhouse gas" def="A gas that promotes the heating of the atmosphere by the greenhouse effect such as carbon dioxide (Benton & Harper, 2009)." /> which
                    will contribute to lower temperatures (Miguasha National Park, 2007). Also, the cooling event could be explained by the position of the landmasses themselves (Miguasha National Park, 2007). As the landmasses drift together to
                    form <Dialog title="Pangea" def="The word Pangea means “all world” and a supercontinent was named after it that was formed of all the modern continents (Benton & Harper, 2009)." /> the
                    oceans are closing modifying the ocean currents (Miguasha National Park, 2007). This is important because ocean currents can regulate the temperature by redistributing heat around the planet and an alteration in ocean current circulation will lead to a change in the climate (Miguasha National Park, 2007).
                  </Typography>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.flexVCenter}>
                    <CardMedia
                      component="img"
                      alt="Carbon & Temperature over time"
                      image={temp_graph}
                      title="Carbon & Temperature over time"
                    />
                    <CardContent>
                      <Typography component="p">
                        Figure 7. Graph displaying both the atmospheric carbon curve and the temperature curve through time (Miguasha National Park, 2007).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <YouTube videoId="RDQa0okkpf0" opts={{
                        width: '100%',
                        playerVars: {
                            loop: 1,
                            start: 360,
                            end: 467,
                        }
                    }}/>
                    <CardContent>
                      <Typography component="p">
                        Educational video on the Paleozoic era where the Devonian period begins at 6:00 minutes and goes to 7:47 minutes (PBS Eons, 2018).
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={12} md={6} className={classes.flex}>
                  <Card className={classes.card + ' ' + classes.flexVCenter}>
                    <CardContent>
                      <Typography component="h3" variant="h5" align="center">
                        Did you know?
                      </Typography>
                      <Typography component="p" variant="subtitle1">
                        During the Devonian period the <i>Bothriolepis canadensis</i> had days that were only 22 hours long and a Devonian year that had 400 days (Benton & Harper, 2009; Miguasha National Park, 2007). The rotation speed of the planet changes over time due to the gravitational pull of the Moon (Miguasha National Park, 2007). The Moon attracts great masses of water toward it while it orbits around the Earth and as the Earth turns eastward, the tides are moving westward, and this slows the rotation of the planet by 0.0016 seconds per century (Miguasha National Park, 2007). Thus, the Earth was rotating faster in the past, having longer years, but shorter days (Benton & Harper, 2009; Miguasha National Park, 2007). The evidence of this can be seen in the growth lines of the Devonian coral (Benton & Harper, 2009; Miguasha National Park, 2007). Under a microscope we can see the daily layers the corals add making it possible to count the number of days (Benton & Harper, 2009; Miguasha National Park, 2007). Therefore, a Devonian coral (Figure 9) will have 400 growth lines in a year and a modern-day coral will have 365 growth lines (Benton & Harper, 2009; Miguasha National Park, 2007).
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