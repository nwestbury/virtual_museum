import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Home from './Home';
import ImportancePage from './ImportancePage';
import PhysicalCharsPage from './PhysicalChars';
import FossilPage from './FossilPage';
import ExtinctionPage from './ExtinctionPage';
import ReferencePage from './ReferencePage';

import WaterVideo from './img/water.mp4';
import WaterPreview from './img/water.jpg';
import WaterHomeVideo from './img/waterhome.mp4';
import WaterHomePreview from './img/waterhome.mp4';
import PoolBck from './img/pool_bck.png';
import SandBck from './img/sand_bck.jpg';

import {history} from './history';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  buttons: {
      width: '90%',
      marginRight: 'auto',
      marginLeft: 'auto',
      height: '50px',
  },
  floatRight: {
      float: 'right',
  },
  floatLeft: {
      float: 'left',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  extinctionBck: {
    backgroundImage: `url(${SandBck})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  videoBck: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: -100,
  },
  physicalBck: {
    backgroundImage: 'linear-gradient(to bottom, #5558fc 0%,#feffff 100%)',
    backgroundPosition: 'center',
  },
  fossilBck: {
    backgroundImage: `url(${PoolBck})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  referencesBck: {
    backgroundImage: 'linear-gradient(to bottom, grey 0%,#feffff 100%)',
    backgroundPosition: 'center',
  },
  fullHeight: {
    minHeight: '100%',
  }
});

const backgroundClasses = ['homeBck', 'physicalBck', 'importanceBck', 'fossilBck', 'extinctionBck', 'referencesBck']
const names = ['Introduction', 'Physical Characteristics', 'Fossil', 'Importance', 'Extinction', 'References'];
const urls = ['/', '/physical-characteristics', '/fossil', '/paleological-importance', '/extinction', '/references'];
const components = [Home, PhysicalCharsPage, FossilPage, ImportancePage, ExtinctionPage, ReferencePage];

class NavTabs extends React.Component {
  constructor(props) {
    super(props);

    const value = this.getValue();
    this.state = {
        value,
    }
  }

  getValue = () => {
    const {hash} = history.location;
    let value = urls.indexOf(hash.replace('#', ''));

    if (value === -1) {
        value = 0;
    }
    return value;
  }

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const curClass = backgroundClasses[value];

    return (
      <NoSsr>
        <div className={classes.root}>
          <HashRouter>
            <div className={classes[curClass] + ' ' + classes.fullHeight}>
                <AppBar position="static" color="default">
                  <Tabs
                      value={value}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={this.handleChange}
                      centered
                  >
                      {names.map((name, index) => (
                          <Tab
                            key={name}
                            label={name}
                            component={Link}
                            to={urls[index]}
                          />
                      ))}
                  </Tabs>
                </AppBar>
                <Route path={urls[1]} component={components[1]} />
                <Route path={urls[2]} component={components[2]} />
                <Route path={urls[3]} component={components[3]} />
                <Route path={urls[4]} component={components[4]} />
                <Route path={urls[5]} component={components[5]} />
                <Route exact path="/" component={components[0]}/>
                <div className={classes.buttons}>
                    {value > 0 ?
                        <Button
                            variant="contained"
                            onClick={(e) => this.handleChange(e, value-1)}
                            className={classes.floatLeft}
                            component={Link}
                            to={urls[value-1]}
                        >
                            <KeyboardArrowLeft />
                            Back
                        </Button> : null}
                    { value < urls.length - 1 ?
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => this.handleChange(e, value+1)}
                            className={classes.floatRight}
                            component={Link}
                            to={urls[value+1]}
                        >
                            Next
                            <KeyboardArrowRight />
                        </Button> : null }
                  </div>
            </div>
          </HashRouter>
        </div>
        { curClass === 'importanceBck' ?
        <video loop muted autoPlay poster={WaterPreview} className={classes.videoBck}>
          <source src={WaterVideo} type="video/mp4"></source>
        </video> : null }
        { curClass === 'homeBck' ?
        <video loop muted autoPlay poster={WaterHomePreview} className={classes.videoBck}>
          <source src={WaterHomeVideo} type="video/mp4"></source>
        </video> : null }
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
