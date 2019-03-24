import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  fullWidth: {
      width: '100%',
  }
});

class ExpandableCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, content, header, image, subheader, preview } = this.props;
    const text = this.state.expanded ? "Hide" : "Learn More"; 

    return (
      <Card className={classes.fullWidth}>
        <CardHeader
          title={header}
          subheader={subheader}
        />
        <CardMedia
          className={classes.media}
          image={image}
          title={header}
        />
        <CardContent>
          <Typography component="p">
            {preview}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Button size="small" color="primary" onClick={this.handleExpandClick}>
            {text}
          </Button>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
              {content}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ExpandableCard.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
};

export default withStyles(styles)(ExpandableCard);