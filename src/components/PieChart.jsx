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

class PieDataSource {
  constructor(data, { caption, numberSuffix, showLegend = '0', showLabels = '1' }) {
    this.chart = {
      caption,
      numberSuffix,
      showLabels,
      showLegend,
      legendPosition: 'right',
      animation: '1',
      animationDuration: '1',
      animateClockwise: '0',
      alphaAnimation: '0',
      showPercentValues: '0',
      showValues: '0',
      theme: 'fusion',
      captionAlignment: 'center',
      captionOnTop: '1',
      captionFontSize: 18,
      captionFontColor: '#000000',
      startingAngle: '210',
      enableSlicing: '1',
      slicingDistance: 5,
      bgAlpha: '0',
      canvasBgAlpha: '0',
      alignCaptionWithCanvas: '0',
      captionpadding: '0',
      decimals: '1',
      formatNumberScale: '0',
      chartRightMargin: '-6',

      enableSmartLabels: '1',
      manageLabelOverflow: '1',
      useEllipsesWhenOverflow: '1',
      // isSmartLineSlanted: '0',
    };

    this.data = data;
  }
}

const PieChartStyled = styled.div`
  align-self: ${({ align }) => align || 'center'};
  justify-self: ${({ justify }) => justify || 'center'};
  width: 100%;
`;

class PieChart extends React.Component {
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
    const { percentOfTotalColumns, width } = this.props;
    const { chart } = this.state;

    if (chart) {
      let newWidth = chart.container.parentElement.parentElement.parentElement.getBoundingClientRect().width * percentOfTotalColumns;
      if (width) {
        newWidth = Math.min(newWidth, width);
      }

      chart.resizeTo(newWidth, chart.height);
    } 
  }

  handleRender = (chart) => {
    if (!this.state.chart) {
      this.setState({ chart }, this.resize);
    }
  }

  render() {
    const { align, data, dataSourceConfig, justify, height = '250', percentOfTotalColumns, width } = this.props;

    const dataSource = new PieDataSource(data, dataSourceConfig);
    const chartConfigs = {
      type: 'pie2d',
      containerBackgroundOpacity: '0',
      dataFormat: 'json',
      dataSource,
      height,
      width: '99%',
    };

    return (
      <PieChartStyled align={align} justify={justify} width={width}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </PieChartStyled>
    );
  }
};

export default PieChart;
