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

class CombinationStackedColumnAndLineDataSource {
  constructor(categories, data, { caption, maxColWidth, numberSuffix, xAxisName, yAxisName }) {
    this.chart = {
      caption,
      numberSuffix,
      xAxisName,
      yAxisName,
      maxColWidth,
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
      captionAlignment: 'center',
      captionOnTop: '1',
      captionFontSize: 18,
      captionFontColor: '#000000',
      showXAxisLine: '1',
      showYAxisLine: '1',
      showYAxisValues: '1',
      yAxisValuesStep: '5',
      rotateYAxisName: '1',
      yAxisMinValue: 0,
      yAxisMaxValue: 60,
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

    this.categories = categories;
    this.dataset = data;
  }
}

const CombinationStackedColumnAndLineChartStyled = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  justify-self: ${({ justify }) => justify || 'center'};
  width: 100%;
`;

class CombinationStackedColumnAndLineChart extends React.Component {
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
      chart.resizeTo(chart.container.parentElement.parentElement.parentElement.getBoundingClientRect().width * percentOfTotalColumns, chart.height);
    } 
  }

  handleRender = (chart) => {
    if (!this.state.chart) {
      this.setState({ chart }, this.resize);
    }
  }

  render() {
    const { categories, data, dataSourceConfig, gridColumn, gridRow, justify, height = '400' } = this.props;

    const dataSource = new CombinationStackedColumnAndLineDataSource(categories, data, dataSourceConfig);
    const chartConfigs = {
      type: 'stackedcolumn2dline',
      height,
      width: '90%',
      containerBackgroundOpacity: '0',
      dataFormat: 'json',
      dataSource,
    };

    return (
      <CombinationStackedColumnAndLineChartStyled gridColumn={gridColumn} gridRow={gridRow} justify={justify}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </CombinationStackedColumnAndLineChartStyled>
    );
  }
};

export default CombinationStackedColumnAndLineChart;
