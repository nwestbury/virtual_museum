import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
  paddingLeft: {
      paddingLeft: '16px',
  }
});

class ReferencePage extends React.Component {
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
                        References
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography paragraph align="left" className={classes.paddingLeft}>
                    Authors: Anthony Muro, Hufza Shekh, Nicholas Westbury, Priyanka Mary Sanjeev, and Titus More.
                    </Typography>
                    <Typography paragraph align="left" className={classes.paddingLeft}>
                    Created for BIOL 360 Winter 2019 run by Dr. Barry Warner.
                    </Typography>
                    <Typography component="h1" variant="h6" align="left">
                        Home Page
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary={
                                <React.Fragment>
                                <i>Bothriolepis Canadensis</i> 3D Model
                                </React.Fragment>
                            }
                            secondary={
                                <React.Fragment>
                                Anthodon (2018). <i>Bothriolepis Canadensis</i> 3D Model [3D model file]. Retrieved from https://sketchfab.com/3d-models/bothriolepis-canadensis-fd7bda03c2684c72b3016dae134a8150
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={
                                <React.Fragment>
                                <i>The Devonian placoderm fish Bothriolepis canadensis revisited with three-dimensional digital imagery</i>
                                </React.Fragment>
                            }
                            secondary={
                                <React.Fragment>
                                Bechard, I., Arsenault, F., Cloutier, R., & Kerr, J. (2014). <i>The Devonian placoderm fish Bothriolepis canadensis revisited with three-dimensional digital imagery. Palaeontologia Electronica, 17(1)</i>.'
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={
                                <i>Devonian Fishes and Plants of Miguasha, Quebec, Canada</i>
                            }
                            secondary={
                                <React.Fragment>
                                Cloutier, R. (1996). <i>Devonian Fishes and Plants of Miguasha, Quebec, Canada</i>. Retrieved from https://journals.lib.unb.ca/index.php/GC/article/view/geocanj.2013.40.008/24239
                                </React.Fragment>
                            }
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<i>The soft anatomy of Bothriolepis</i>}
                            secondary={<React.Fragment>Denison, R. H. (1941). <i>The soft anatomy of Bothriolepis. Journal of Paleontology</i>, 553-561.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<i>A new large-bodied species of Bothriolepis (Antiarchi) from the Upper Devonian of Ellesmere Island, Nunavut, Canada</i>}
                            secondary={<React.Fragment>Downs, J., Daeschler, E., Garcia, V., & Shubin, N. (2016). <i>A new large-bodied species of Bothriolepis (Antiarchi) from the Upper Devonian of Ellesmere Island, Nunavut, Canada.</i>, 36(6), 1937-2809. http://dx.doi.org/10.1080/02724634.2016.1221833</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<i>The Upper Devonian Fish Bothriolepis (Placodermi: Antiarchi) from near Canowindra</i>}
                            secondary={<React.Fragment>Johanson, Z. (1998). <i>The Upper Devonian Fish Bothriolepis (Placodermi: Antiarchi) from near Canowindra, New South Wales, Australia. AUSTRALIAN MUSEUM SCIENTIFIC PUBLICATIONS</i>, 50(3), 315-348. https://doi.org/10.3853/j.0067-1975.50.1998.1289</React.Fragment>}
                            />
                        </ListItem>
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                        Fossil Page
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary={<i>Devonian Fishes and Plants of Miguasha</i>}
                            secondary={<React.Fragment>Cloutier, R. (1996). <i>Devonian Fishes and Plants of Miguasha, Quebec, Canada: Verlag Dr. Friedrich</i> Pfeil, München</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>The Miguasha Fossil-Fish-Lagerstätte: A consequence of the Devonian land–sea interactions</i></React.Fragment>}
                            secondary={<React.Fragment>Cloutier, R., Proust, J.-N., and Tessier, B. (2011). <i>The Miguasha Fossil-Fish-Lagerstätte: A consequence of the Devonian land–sea interactions: Palaeobiodiversity and Palaeoenvironments</i>, v. 91, p. 293–323, http://dx.doi.org/10.1007/s12549-011-0058-0.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>Report on the geological survey of the province of New-Brunswick</i></React.Fragment>}
                            secondary={<React.Fragment>Gesner, A. (1843). <i>Report on the geological survey of the province of New-Brunswick, with topographical account on the public lands, and the districts explored in 1842, Part 2: Saint John, New Brunswick</i>, 85p</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>The placoderm Plourdosteus livonicus (Eastman) in the Early Frasnian of the Central Devon-ian Field and the trophic structure of the Mikhailovskii fish assemblage</i></React.Fragment>}
                            secondary={<React.Fragment>Moloshnikov, S.V. (2008). <i>The placoderm Plourdosteus livonicus (Eastman) in the Early Frasnian of the Central Devon-ian Field and the trophic structure of the Mikhailovskii fish assemblage: Paleontological Journal</i>, v. 42, p. 607–614.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment>Tectonic context</React.Fragment>}
                            secondary={<React.Fragment>Sage-animation.ca. (2007). Tectonic context [Video file]. Retrieved from http://www.miguasha.ca/mig-en/tectonic_context.php</React.Fragment>}
                            />
                        </ListItem>
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                        Physical Characteristics Page
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>The Devonian placoderm fish Bothriolepis canadensis revisited with three-dimensional digital imagery</i></React.Fragment>}
                            secondary={<React.Fragment>Béchard, I., Arsenault, F., Cloutier, R., & Kerr, J. (2014). <i>The Devonian placoderm fish Bothriolepis canadensis revisited with three-dimensional digital imagery. Palaeontologia Electronica, 17(1)</i>, 1-19.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>The soft anatomy of Bothriolepis</i></React.Fragment>}
                            secondary={<React.Fragment>Denison, R. H. (1941). <i>The soft anatomy of Bothriolepis. Journal of Paleontology</i>, 553-561.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment>Cast of a <i>B. canadensis</i> fossil Image</React.Fragment>}
                            secondary={<React.Fragment>H. (2012). <i>Bothriolepis canadensis</i> - Cast [Digital image]. Retrieved from https://upload.wikimedia.org/wikipedia/commons/6/62/Bothriolepis_canadensis-001.JPG</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>New facts concerning Bothriolepis</i></React.Fragment>}
                            secondary={<React.Fragment>Patten, W. (1904). <i>New facts concerning Bothriolepis. The Biological Bulletin, 7(2)</i>, 113-124.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>An introduction to Grand Canyon fossils</i></React.Fragment>}
                            secondary={<React.Fragment>Thayer, D. (2009). <i>An introduction to Grand Canyon fossils. Arizona: Grand Canyon Association</i>.</React.Fragment>}
                            />
                        </ListItem>
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                      Paleological Importance Page
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>The soft anatomy of Bothriolepis. Journal of Paleontology</i></React.Fragment>}
                            secondary={<React.Fragment>Denison, R. H. (1941). <i>The soft anatomy of Bothriolepis. Journal of Paleontology</i>, 553-561.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>Bothriolepid antiarchs (Vertebrata, Placodermi) from the Devonian of the north-western part of the East European Platform</i></React.Fragment>}
                            secondary={<React.Fragment>Lukševič E. (2001). <i>Bothriolepid antiarchs (Vertebrata, Placodermi) from the Devonian of the north-western part of the East European Platform. Geodiversitas 23 (4)</i>: 489-609.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>More About Placederms from the Devonian Times</i> Chart</React.Fragment>}
                            secondary={<React.Fragment>Murphy, D. (2002). <i>More About Placederms from the Devonian Times</i> Chart [Digital image]. Retrieved from http://www.devoniantimes.org/who/images/p-placoderm.gif</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>Geo-timescale</i> GitHub</React.Fragment>}
                            secondary={<React.Fragment>Peters, S. (2015). <i>Geo-timescale</i> Github [Digital codebase]. Retrieved from https://github.com/UW-Macrostrat/geo-timescale</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>Form and Function of the Fish Bothriolepis (Devonian; Placodermi, Antiarchi): The First Terrestrial Vertebrate?</i></React.Fragment>}
                            secondary={<React.Fragment>Wells, N.A. and J.A.Door, Jr. (1985). <i>Form and Function of the Fish Bothriolepis (Devonian; Placodermi, Antiarchi): The First Terrestrial Vertebrate?. Michigan Academician 17(2)</i>: 157-173.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>Placoderms (Armored Fish): Dominant Vertebrates of the Devonian Period</i></React.Fragment>}
                            secondary={<React.Fragment>Young, G. (2010). <i>Placoderms (Armored Fish): Dominant Vertebrates of the Devonian Period. Annual Review of Earth and Planetary Sciences. 38</i>: 523–550.</React.Fragment>}
                            />
                        </ListItem>
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                      Climate Page
                    </Typography>
                    <List>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>Devonian Period: Climate, Animals & Plants</i></React.Fragment>}
                          secondary={<React.Fragment>Bagley, M. (2014). <i>Devonian Period: Climate, Animals & Plants. Live Science.</i> Retrieved March 23rd, 2019, from https://www.livescience.com/43596-devonian-period.html.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>Introduction to Paleobiology and the Fossil Record</i></React.Fragment>}
                          secondary={<React.Fragment>Benton, M., J., & Harper, D., A., T. (2009). <i>Introduction to Paleobiology and the Fossil Record.</i> Wiley-Blackwell.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>Rock Salt</i></React.Fragment>}
                          secondary={<React.Fragment>Geoglogy.com. (2019). <i>Rock Salt</i>. Retrieved March 23rd, 2019, from https://geology.com/rocks/rock-salt.shtml.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>Tillites</i></React.Fragment>}
                          secondary={<React.Fragment>Illinois State Geological Survey. (2019). <i>Tillites</i>. Retrieved March 23rd, 2019, from https://www.isgs.illinois.edu/outreach/geology-resources/tillites.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>A Devonian day</i></React.Fragment>}
                          secondary={<React.Fragment>Miguasha National Park. (2007). <i>A Devonian day</i>. Retrieved March 23rd, 2019, from http://www.miguasha.ca/mig-en/a_devonian_day.php.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>Climate</i></React.Fragment>}
                          secondary={<React.Fragment>Miguasha National Park. (2007). <i>Climate</i>. Retrieved March 23rd, 2019, from http://www.miguasha.ca/mig-en/climate.php.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>The Devonian: Age of Fishes</i></React.Fragment>}
                          secondary={<React.Fragment>Miguasha National Park. (2007). <i>The Devonian: Age of Fishes</i>. Retrieved March 23rd, 2019, from http://www.miguasha.ca/mig-en/the_devonian_age_of_fishes.php.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>Limestone</i></React.Fragment>}
                          secondary={<React.Fragment>Minerals Education Coalition. (2019). <i>Limestone</i>. Retrieved March 23rd, 2019, from https://mineralseducationcoalition.org/minerals-database/limestone/.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>What Is Climate Change?</i></React.Fragment>}
                          secondary={<React.Fragment>NASA. (2017). <i>What Is Climate Change?</i>. Retrieved March 23rd, 2019, from https://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/what-is-climate-change-k4.html.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>National Geographic: Climate</i></React.Fragment>}
                          secondary={<React.Fragment>National Geographic. (2019). <i>Climate</i>. Retrieved March 23rd, 2019, from https://www.nationalgeographic.org/encyclopedia/climate/.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>Devonian Period: Climate, Animals & Plants</i></React.Fragment>}
                          secondary={<React.Fragment>Paleontology World. (2017). <i>Devonian Period: Climate, Animals & Plants</i>. Retrieved March 23rd, 2019, from https://paleontologyworld.com/exploring-prehistoric-life-prehistoric-flora-fauna/devonian-period-climate-animals-plants.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>From the Cambrian Explosion to the Great Dying</i></React.Fragment>}
                          secondary={<React.Fragment>PBS Eons. (2018). <i>From the Cambrian Explosion to the Great Dying</i>. [YouTube] Retrieved March 23rd, 2019, from https://www.youtube.com/watch?v=RDQa0okkpf0.</React.Fragment>}
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary={<React.Fragment><i>Dropstones</i></React.Fragment>}
                          secondary={<React.Fragment>SERC- Carleton College. (2016). <i>Dropstones</i>. Retrieved March 23rd, 2019, from https://serc.carleton.edu/NAGTWorkshops/sedimentary/images/dropstones.html.</React.Fragment>}
                          />
                      </ListItem>
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                        Extinction Page
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>The 6 Craziest Extinctions Ever</i></React.Fragment>}
                            secondary={<React.Fragment>AsapSCIENCE. (2015). <i>The 6 Craziest Extinctions Ever</i>. [Youtube]. Retrieved March 24th, 2019, from https://www.youtube.com/watch?v=wissIOikrqc.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>Devonian Period: Climate, Animals & Plants</i></React.Fragment>}
                            secondary={<React.Fragment>Bagley, M. (2014). <i>Devonian Period: Climate, Animals & Plants. Live Science.</i> Retrieved March 23rd, 2019, from https://www.livescience.com/43596-devonian-period.html.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>The Devonian extinction saw the oceans choke to death</i></React.Fragment>}
                            secondary={<React.Fragment>Baraniuk, C. (2015). <i>The Devonian extinction saw the oceans choke to death. BBC.</i> Retrieved March 24th, 2019, from http://www.bbc.com/earth/story/20150624-the-day-the-oceans-died.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>Introduction to Paleobiology and the Fossil Record</i></React.Fragment>}
                            secondary={<React.Fragment>Benton, M., J., & Harper, D., A., T. (2009). <i>Introduction to Paleobiology and the Fossil Record.</i> Wiley-Blackwell.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>Extinction</i></React.Fragment>}
                            secondary={<React.Fragment>BrainPOP. (2019). <i>Extinction</i>. Retrieved March 24th, 2019, from https://www.brainpop.com/science/ourfragileenvironment/extinction/.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>Devonian climate change, breathing, and the origin of the tetrapod stem group</i></React.Fragment>}
                            secondary={<React.Fragment>Clack, J. A. (2007). <i>Devonian climate change, breathing, and the origin of the tetrapod stem group. Integrative and Comparative Biology, 47(4)</i>, 510-523.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>Bothriolepis</i></React.Fragment>}
                            secondary={<React.Fragment>Miguasha National Park. (2007). <i>Bothriolepis</i>. Retrieved March 24th, 2019, from http://www.miguasha.ca/mig-en/bothriolepis.php.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>The Late Devonian extinction event</i></React.Fragment>}
                            secondary={<React.Fragment>Miguasha National Park. (2007). <i>The Late Devonian extinction event</i>. Retrieved March 24th, 2019, from http://www.miguasha.ca/mig-en/the_late_devonian_extinction_event.php.</React.Fragment>}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary={<React.Fragment><i>When Fish Wore Armor</i></React.Fragment>}
                            secondary={<React.Fragment>PBS Eons. (2018). <i>When Fish Wore Armor</i>. [YouTube]. Retrieved March 24th, 2019, from https://www.youtube.com/watch?v=5pVTZH1LyTw.</React.Fragment>}
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

ReferencePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReferencePage);