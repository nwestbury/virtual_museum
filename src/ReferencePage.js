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
                            primary="Proceedings of the Academy of Natural Sciences of Philadelphia"
                            secondary='Downs, J.P.; Criswell, K.E.; Daeschler, E.B. (October 2011). "Mass mortality of juvenile antiarchs (Bothriolepis sp.) from the Catskill Formation (Upper Devonian, Famennian Stage), Tioga County, Pennsylvania". Proceedings of the Academy of Natural Sciences of Philadelphia (161): 191–203.'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Fossilized ontogenies: the contribution of placoderm ontogeny to our understanding of the evolution of early gnathostomes"
                            secondary='Johanson, Zerina; Trinajstic, Kate (2014). "Fossilized ontogenies: the contribution of placoderm ontogeny to our understanding of the evolution of early gnathostomes". Palaeontology. 57 (3): 505–516. doi:10.1111/pala.12093'
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary="Proceedings of the Academy of Natural Sciences of Philadelphia"
                            secondary='Downs, J.P.; Criswell, K.E.; Daeschler, E.B. (October 2011). "Mass mortality of juvenile antiarchs (Bothriolepis sp.) from the Catskill Formation (Upper Devonian, Famennian Stage), Tioga County, Pennsylvania". Proceedings of the Academy of Natural Sciences of Philadelphia (161): 191–203.'
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
                            secondary='Denison, R.H. (1941). The soft anatomy of Bothriolepis. Journal of Paleontology. 15 (5): 553–561.'
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