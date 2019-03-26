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
                    Authors: Anthony Muro, Hufza Sh, Nicholas Westbury, Priyanka Sanjeev, and Titus More.
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
                            primary="The Devonian placoderm fish Bothriolepis canadensis revisited with three-dimensional digital imagery"
                            secondary='Bechard, I., Arsenault, F., Cloutier, R., & Kerr, J. (2014). The Devonian placoderm fish Bothriolepis canadensis revisited with three-dimensional digital imagery. Palaeontologia Electronica, 17(1).'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="A new large-bodied species of Bothriolepis (Antiarchi) from the Upper Devonian of Ellesmere Island, Nunavut, Canada"
                            secondary='Downs, J., Daeschler, E., Garcia, V., & Shubin, N. (2016). A new large-bodied species of Bothriolepis (Antiarchi) from the Upper Devonian of Ellesmere Island, Nunavut, Canada. A new large-bodied species of Bothriolepis (Antiarchi) from the Upper Devonian of Ellesmere Island, Nunavut, Canada, 36(6), 1937-2809. http://dx.doi.org/10.1080/02724634.2016.1221833'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="The soft anatomy of Bothriolepis. Journal of Paleontology"
                            secondary='Denison, R. H. (1941). The soft anatomy of Bothriolepis. Journal of Paleontology, 553-561.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="The Upper Devonian Fish Bothriolepis (Placodermi: Antiarchi) from near Canowindra"
                            secondary='Johanson, Z. (1998). The Upper Devonian Fish Bothriolepis (Placodermi: Antiarchi) from near Canowindra, New South Wales, Australia. AUSTRALIAN MUSEUM SCIENTIFIC PUBLICATIONS, 50(3), 315-348. https://doi.org/10.3853/j.0067-1975.50.1998.1289'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Bothriolepis Canadensis 3D Model"
                            secondary='Anthodon (2018) Bothriolepis Canadensis 3D Model [3D model file]. Retrieved from https://sketchfab.com/3d-models/bothriolepis-canadensis-fd7bda03c2684c72b3016dae134a8150'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Bothriolepis Swimming Video"
                            secondary='Palezoo (2015) Bothriolepis [Video file]. Retrieved from https://www.youtube.com/watch?v=YqSUASdU0Cg'
                            />
                        </ListItem>
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                        Fossil Page
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary="Report on the geological survey of the province of New-Brunswick"
                            secondary='Gesner, A. (1843). Report on the geological survey of the province of New-Brunswick, with topographical account on the public lands, and the districts explored in 1842, Part 2: Saint John, New Brunswick, 85p'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="The placoderm Plourdosteus livonicus (Eastman) in the Early Frasnian of the Central Devon-ian Field and the trophic structure of the Mikhailovskii fish assemblage"
                            secondary='Moloshnikov, S.V. (2008). The placoderm Plourdosteus livonicus (Eastman) in the Early Frasnian of the Central Devon-ian Field and the trophic structure of the Mikhailovskii fish assemblage: Paleontological Journal, v. 42, p. 607–614.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Tectonic context [Video file]"
                            secondary='Sage-animation.ca. (2007). Tectonic context [Video file]. Retrieved from http://www.miguasha.ca/mig-en/tectonic_context.php'
                            />
                        </ListItem>
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                        Physical Characteristics Page
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary="An introduction to Grand Canyon fossils"
                            secondary='Thayer, D. (2009). An introduction to Grand Canyon fossils. Arizona: Grand Canyon Association.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="The soft anatomy of Bothriolepis"
                            secondary='Denison, R. H. (1941). The soft anatomy of Bothriolepis. Journal of Paleontology, 553-561.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="New facts concerning Bothriolepis"
                            secondary='Patten, W. (1904). New facts concerning Bothriolepis. The Biological Bulletin, 7(2), 113-124.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="The Devonian placoderm fish Bothriolepis canadensis revisited with three-dimensional digital imagery"
                            secondary='Béchard, I., Arsenault, F., Cloutier, R., & Kerr, J. (2014). The Devonian placoderm fish Bothriolepis canadensis revisited with three-dimensional digital imagery. Palaeontologia Electronica, 17(1), 1-19.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Cast of a B. canadensis fossil Image"
                            secondary='H. (2012). Bothriolepis canadensis - Cast [Digital image]. Retrieved from https://upload.wikimedia.org/wikipedia/commons/6/62/Bothriolepis_canadensis-001.JPG'
                            />
                        </ListItem>
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                      Paleological Importance Page
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary="The soft anatomy of Bothriolepis. Journal of Paleontology"
                            secondary='Denison, R. H. (1941). The soft anatomy of Bothriolepis. Journal of Paleontology, 553-561.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Bothriolepid antiarchs (Vertebrata, Placodermi) from the Devonian of the north-western part of the East European Platform"
                            secondary='Lukševič E. (2001). — Bothriolepid antiarchs (Vertebrata, Placodermi) from the Devonian of the north-western part of the East European Platform. Geodiversitas 23 (4): 489-609.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Form and Function of the Fish Bothriolepis (Devonian; Placodermi, Antiarchi): The First Terrestrial Vertebrate?"
                            secondary='Wells, N.A. and J.A.Door, Jr. (1985). "Form and Function of the Fish Bothriolepis (Devonian; Placodermi, Antiarchi): The First Terrestrial Vertebrate?" Michigan Academician 17(2): 157-173.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Placoderms (Armored Fish): Dominant Vertebrates of the Devonian Period"
                            secondary='Young, G. (2010). Placoderms (Armored Fish): Dominant Vertebrates of the Devonian Period. Annual Review of Earth and Planetary Sciences. 38: 523–550.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="More About Placederms from the Devonian Times Chart"
                            secondary='Murphy, D. (2002). More About Placederms from the Devonian Times [Digital image]. Retrieved from http://www.devoniantimes.org/who/images/p-placoderm.gif'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Geo-timescale GitHub"
                            secondary='Peters, S. (2015). Geo-timescale Github [Digital codebase]. Retrieved from https://github.com/UW-Macrostrat/geo-timescale'
                            />
                        </ListItem>
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                      Climate Page
                    </Typography>
                    <List>
                      <ListItem>
                          <ListItemText
                          primary="Devonian Period: Climate, Animals & Plants"
                          secondary='Bagley, M. (2014). Devonian Period: Climate, Animals & Plants. Live Science. Retrieved March 23rd, 2019, from https://www.livescience.com/43596-devonian-period.html.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="Introduction to Paleobiology and the Fossil Record"
                          secondary='Benton, M., J., & Harper, D., A., T. (2009). Introduction to Paleobiology and the Fossil Record. Wiley-Blackwell.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="Rock Salt"
                          secondary='Geoglogy.com. (2019). Rock Salt. Retrieved March 23rd, 2019, from https://geology.com/rocks/rock-salt.shtml.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="Tillites"
                          secondary='Illinois State Geological Survey. (2019). Tillites. Retrieved March 23rd, 2019, from https://www.isgs.illinois.edu/outreach/geology-resources/tillites.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="A Devonian day"
                          secondary='Miguasha National Park. (2007). A Devonian day. Retrieved March 23rd, 2019, from http://www.miguasha.ca/mig-en/a_devonian_day.php.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="Climate"
                          secondary='Miguasha National Park. (2007). Climate. Retrieved March 23rd, 2019, from http://www.miguasha.ca/mig-en/climate.php.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="The Devonian: Age of Fishes"
                          secondary='Miguasha National Park. (2007). The Devonian: Age of Fishes. Retrieved March 23rd, 2019, from http://www.miguasha.ca/mig-en/the_devonian_age_of_fishes.php.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="Limestone"
                          secondary='Minerals Education Coalition. (2019). Limestone. Retrieved March 23rd, 2019, from https://mineralseducationcoalition.org/minerals-database/limestone/.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="What Is Climate Change?"
                          secondary='NASA. (2017). What Is Climate Change?. Retrieved March 23rd, 2019, from https://www.nasa.gov/audience/forstudents/k-4/stories/nasa-knows/what-is-climate-change-k4.html.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="National Geographic: Climate"
                          secondary='National Geographic. (2019). Climate. Retrieved March 23rd, 2019, from https://www.nationalgeographic.org/encyclopedia/climate/.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="Devonian Period: Climate, Animals & Plants"
                          secondary='Paleontology World. (2017). Devonian Period: Climate, Animals & Plants. Retrieved March 23rd, 2019, from https://paleontologyworld.com/exploring-prehistoric-life-prehistoric-flora-fauna/devonian-period-climate-animals-plants.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="From the Cambrian Explosion to the Great Dying"
                          secondary='PBS Eons. (2018, February 20th). From the Cambrian Explosion to the Great Dying. [Youtube] Retrieved March 23rd, 2019, from https://www.youtube.com/watch?v=RDQa0okkpf0.'
                          />
                      </ListItem>
                      <ListItem>
                          <ListItemText
                          primary="Dropstones"
                          secondary='SERC- Carleton College. (2016). Dropstones. Retrieved March 23rd, 2019, from https://serc.carleton.edu/NAGTWorkshops/sedimentary/images/dropstones.html.'
                          />
                      </ListItem>
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                        Extinction Page
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary="The 6 Craziest Extinctions Ever"
                            secondary='AsapSCIENCE. (2015, April 22nd). The 6 Craziest Extinctions Ever. [Youtube]. Retrieved March 24th, 2019, from https://www.youtube.com/watch?v=wissIOikrqc.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Devonian Period: Climate, Animals & Plants"
                            secondary='Bagley, M. (2014). Devonian Period: Climate, Animals & Plants. Live Science. Retrieved March 23rd, 2019, from https://www.livescience.com/43596-devonian-period.html.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="The Devonian extinction saw the oceans choke to death"
                            secondary='Baraniuk, C. (2015). The Devonian extinction saw the oceans choke to death. BBC. Retrieved March 24th, 2019, from http://www.bbc.com/earth/story/20150624-the-day-the-oceans-died.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Introduction to Paleobiology and the Fossil Record"
                            secondary='Benton, M., J., & Harper, D., A., T. (2009). Introduction to Paleobiology and the Fossil Record. Wiley-Blackwell.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="BrainPOP: Extinction"
                            secondary='BrainPOP. (2019). Extinction. Retrieved March 24th, 2019, from https://www.brainpop.com/science/ourfragileenvironment/extinction/.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Devonian climate change, breathing, and the origin of the tetrapod stem group"
                            secondary='Clack, J. A. (2007). Devonian climate change, breathing, and the origin of the tetrapod stem group. Integrative and Comparative Biology, 47(4), 510-523.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Bothriolepis"
                            secondary='Miguasha National Park. (2007). Bothriolepis. Retrieved March 24th, 2019, from http://www.miguasha.ca/mig-en/bothriolepis.php.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="The Late Devonian extinction event"
                            secondary='Miguasha National Park. (2007). The Late Devonian extinction event. Retrieved March 24th, 2019, from http://www.miguasha.ca/mig-en/the_late_devonian_extinction_event.php.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="When Fish Wore Armor"
                            secondary='PBS Eons. (2018, July 24). When Fish Wore Armor. [Youtube]. Retrieved March 24th, 2019, from https://www.youtube.com/watch?v=5pVTZH1LyTw.'
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