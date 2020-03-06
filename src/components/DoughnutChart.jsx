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

class DoughnutDataSource {
  constructor(data, { caption, centerLabel, defaultCenterLabel, numberSuffix }) {
    this.chart = {
      caption,
      centerLabel,
      defaultCenterLabel,
      numberSuffix,
      animation: '1',
      animationDuration: '1',
      animateClockwise: '0',
      alphaAnimation: '0',
      showPercentValues: '0',
      showLabels: '1',
      showValues: '0',
      theme: 'fusion',
      captionAlignment: 'center',
      captionOnTop: '1',
      captionFontSize: 18,
      captionFontColor: '#000000',
      doughnutRadius: '81%',
      startingAngle: '210',
      enableSlicing: '1',
      slicingDistance: 5,
      bgAlpha: '0',
      canvasBgAlpha: '0',
      alignCaptionWithCanvas: '0',
      captionpadding: '0',
      decimals: '1',
      showLegend: '0',
      formatNumberScale: '0',
      chartRightMargin: '0',
    };

    this.data = data;
  }
}

const DoughnutChartStyled = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  align-self: ${({ align }) => align || 'center'};
  justify-self: ${({ justify }) => justify || 'center'};
  ${'' /* width: 100%; */}
  width: ${({ width }) => `${width}px` || '100%'};
  ${'' /* max-width: ${({ maxWidth }) => `${maxWidth}px` || null}; */}
`;

class DoughnutChart extends React.Component {
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
    // const { maxWidth, percentOfTotalColumns } = this.props;
    const { width, percentOfTotalColumns } = this.props;
    const { chart } = this.state;

    if (chart) {
      const newWidth = Math.min(chart.container.parentElement.parentElement.parentElement.getBoundingClientRect().width * percentOfTotalColumns, width);
      chart.resizeTo(width, chart.height);
    } 
  }

  handleRender = (chart) => {
    if (!this.state.chart) {
      this.setState({ chart }, this.resize);

    }
  }

  render() {
    const { align, data, dataSourceConfig, gridColumn, gridRow, height = '250', justify, width } = this.props;

    const dataSource = new DoughnutDataSource(data, dataSourceConfig);
    const chartConfigs = {
      type: 'doughnut2d',
      width: '99%',
      height,
      containerBackgroundOpacity: '0',
      dataFormat: 'json',
      dataSource,
    };

    return (
      <DoughnutChartStyled gridColumn={gridColumn} gridRow={gridRow} align={align} justify={justify} width={width}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </DoughnutChartStyled>
    );
  }
};

export default DoughnutChart;
