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
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                        History Page
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
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                        Physical Characteristics Page
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
                    </List>
                    <Typography component="h1" variant="h6" align="left">
                        Stuff Page
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