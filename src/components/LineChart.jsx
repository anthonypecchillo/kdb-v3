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

class LineDataSource {
  constructor(categories, data, { caption, numberSuffix, xAxisName, yAxisName }) {
    this.chart = {
      caption,
      // numberSuffix,
      xAxisName,
      yAxisName,
      lineThickness: '2',
      showLegend: '1',
      animation: '1',
      animationDuration: '1',
      animateClockwise: '0',
      alphaAnimation: '0',
      rotateLabels: '1',
      slantLabels: '1',
      showLabels: '1',
      showValues: '0',
      placeValuesInside: '0',
      showShadow: '0',
      useDataPlotColorForLabels: '0',
      theme: 'fusion',
      captionOnTop: '1',
      captionFontSize: 18,
      captionFontColor: '#000000',
      showXAxisLine: '1',
      showYAxisLine: '1',
      showYAxisValues: '1',
      yAxisValuesStep: '5',
      rotateYAxisName: '1',
      yAxisMinValue: 0,
      // yAxisMaxValue: 1200,
      bgAlpha: '0',
      canvasBgAlpha: '0',
      alignCaptionWithCanvas: '1',
      numDivLines: 30,
      showAlternateHGridColor: '1',
      formatNumber: '1',
      formatNumberScale: '1',
      decimals: '1',
      // canvasLeftMargin: 10,
      // maxColWidth: '40',
    };

    this.data = data;
  }
}

const LineChartStyled = styled.div`
  grid-area:  ${({ gridArea }) => gridArea || null};
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  justify-self: ${({ justify }) => justify || 'center'};
  width: 100%;
`;

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: null,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => { 
    const { percentOfTotalColumns } = this.props;
    const { chart } = this.state;

    if (chart) {
      const newWidth = Math.min(window.innerWidth * 0.92, chart.container.parentElement.parentElement.getBoundingClientRect().width);
      chart.resizeTo(newWidth, chart.height);
    } 
  }

  handleRender = (chart) => {
    if (!this.state.chart) {
      this.setState({ chart }, this.resize);
    }
  }

  render() {
    const { categories, data, dataSourceConfig, gridArea, gridColumn, gridRow, justify, height = '380' } = this.props;

    const dataSource = new LineDataSource(categories, data, dataSourceConfig);
    const chartConfigs = {
      type: 'line',
      height,
      width: '90%',
      containerBackgroundOpacity: '0',
      dataFormat: 'json',
      dataSource,
    };

    return (
      <LineChartStyled gridArea={gridArea} gridColumn={gridColumn} gridRow={gridRow} justify={justify}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </LineChartStyled>
    );
  }
};

export default LineChart;
