/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

import styled from 'styled-components';

// Resolves charts dependancy
charts(FusionCharts);

class BarDataSource {
  constructor(data, { caption, xAxisName, yAxisName }) {
    this.chart = {
      caption,
      xAxisName,
      yAxisName,
      animation: '1',
      animationDuration: '1',
      animateClockwise: '0',
      alphaAnimation: '0',
      rotateLabels: '1',
      slantLabels: '1',
      showLabels: '1',
      showValues: '1',
      placeValuesInside: '0',
      showShadow: '0',
      useDataPlotColorForLabels: '0',
      theme: 'fusion',
      captionAlignment: 'center',
      captionOnTop: '1',
      captionFontSize: 18,
      captionFontColor: '#000000',
      showXAxisLine: '1',
      showYAxisLine: '1',
      showYAxisValues: '1',
      yAxisValuesStep: '3',
      rotateYAxisName: '1',
      bgAlpha: '0',
      canvasBgAlpha: '0',
      alignCaptionWithCanvas: '1',
      numDivLines: 30,
      showAlternateHGridColor: '1',
      formatNumber: '1',
      formatNumberScale: '1',
      decimals: '1',
      canvasLeftMargin: 10,
      // maxColWidth: '40',
    };

    this.data = data;
  }
}

const BarChartStyled = styled.div`
  grid-column: 1/3;
  justify-self: ${({ justify }) => justify || 'center'};
  width: 100%;
`;

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: null,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    window.dispatchEvent(new Event('resize'));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => { 
    if (this.state.chart) {
      this.state.chart.resizeTo(this.state.chart.container.parentElement.parentElement.parentElement.getBoundingClientRect().width, this.state.chart.height);
    } 
  }

  handleRender = (chart) => {
    if (!this.state.chart) {
      this.setState({ chart }, this.resize);

    }
  }

  render() {
    const { data, dataSourceConfig, justify } = this.props;

    const dataSource = new BarDataSource(data, dataSourceConfig);
    const chartConfigs = {
      dataSource,
      containerBackgroundOpacity: '0',
      dataFormat: 'json',
      height: '490',
      width: '99%',
      type: 'column2d',
      // width: '700',
    };

    return (
      <BarChartStyled justify={justify}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </BarChartStyled>
    );
  }
};

export default BarChart;
