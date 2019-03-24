import React from 'react';
import timescale from './timescale';
import './chart.css';

class Chart extends React.Component {
  componentDidMount() {
    this.updateChart()
  }

  componentWillUnmount() {
    timescale.destroy("geoTime");
  }

  updateChart = () => {
    timescale.init("geoTime");
  }
  
  render() {
    return <div id="geoTime" width={this.props.width} height={this.props.height}></div>
  }
}

export default Chart;
