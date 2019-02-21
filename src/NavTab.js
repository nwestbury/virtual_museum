import React from 'react';
import { Router, Route } from 'react-router-dom';
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
import HistoryPage from './HistoryPage';
import PhysicalCharsPage from './PhysicalChars';
import StuffPage from './StuffPage';
import ReferencePage from './ReferencePage';

import WaterVideo from './img/water.mp4';
import WaterPreview from './img/water.jpg';
import BothriolepisBck from './img/Botheriolepis_bck.jpg';
import PoolBck from './img/pool_bck.png';

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
  homeBck: {
    backgroundImage: `url(${BothriolepisBck})`,
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
  stuffBck: {
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

const backgroundClasses = ['homeBck', 'historyBck', 'physicalBck', 'stuffBck', 'referencesBck']
const names = ['Home', 'Bothriolepis History', 'Physical Characteristics', 'More Stuff', 'References'];

class NavTabs extends React.Component {
  constructor(props) {
    super(props);

    const {pathname} = history.location;

    const base_url = '/virtual_museum';
    this.urls = ['/', '/history', '/physical-characteristics', '/stuff', '/references'];
    if (pathname.startsWith(base_url)) {
      this.urls = this.urls.map(v => base_url + v);
    }

    let value = this.urls.indexOf(pathname);

    if (value === -1) {
        value = 0;
    }

    this.state = {
        value,
    }
  }

  handleChange = (e, value) => {
    history.push(this.urls[value]);
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const curClass = backgroundClasses[value];

    return (
      <NoSsr>
        <AppBar position="static" color="default">
          <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleChange}
              centered
          >
              {names.map((name) => (
                  <Tab key={name} label={name} />
              ))}
          </Tabs>
        </AppBar> 
        <div className={classes.root}>
          <Router history={history}>
            <div className={classes[curClass] + ' ' + classes.fullHeight}>
                <Route exact path={this.urls[0]} component={Home} />
                <Route path={this.urls[1]} component={HistoryPage} />
                <Route path={this.urls[2]} component={PhysicalCharsPage} />
                <Route path={this.urls[3]} component={StuffPage} />
                <Route path={this.urls[4]} component={ReferencePage} />
                <div className={classes.buttons}>
                    {value > 0 ?
                        <Button
                            variant="contained"
                            onClick={(e) => this.handleChange(e, value-1)}
                            className={classes.floatLeft}
                        >
                            <KeyboardArrowLeft />
                            Back
                        </Button> : null}
                    { value < this.urls.length - 1 ?
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => this.handleChange(e, value+1)}
                            className={classes.floatRight}
                        >
                            Next
                            <KeyboardArrowRight />
                        </Button> : null }
                  </div>
            </div>
          </Router>
        </div>
        { curClass === 'historyBck' ?
        <video loop muted autoPlay poster={WaterPreview} className={classes.videoBck}>
          <source src={WaterVideo} type="video/mp4"></source>
        </video> : null }
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);
