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
  constructor(data, { caption, centerLabel, defaultCenterLabel, numberSuffix, showLegend = '0', showLabels = '1', }) {
    this.chart = {
      caption,
      centerLabel,
      defaultCenterLabel,
      numberSuffix,
      showLabels,
      showLegend,
      pieRadius: '80',
      doughnutRadius: '81%',
      animation: '1',
      animationDuration: '1',
      animateClockwise: '0',
      alphaAnimation: '0',
      showPercentValues: '0',
      showValues: '0',
      theme: 'fusion',
      baseFont: 'Montserrat',
      // baseFontSize: '12',
      captionAlignment: 'center',
      captionOnTop: '1',
      captionFontSize: 18,
      captionFontColor: '#000000',
      // captionFont: 'Montserrat',
      captionFontBold: '0',
      legendItemFont: 'Montserrat',
      legendItemFontSize: '14',
      legendItemHoverFontColor: '#abc123',
      // legendNumColumns: '2',
      minimiseWrappingInLegend: '1',
      // startingAngle: '210',
      enableSlicing: '1',
      slicingDistance: 5,
      bgAlpha: '0',
      canvasBgAlpha: '0',
      alignCaptionWithCanvas: '0',
      captionpadding: '0',
      decimals: '1',
      formatNumberScale: '0',

      enableSmartLabels: '1',
      manageLabelOverflow: '1',
      useEllipsesWhenOverflow: '1',
      showToolTip: '1',
      // toolTipColor: ,
      toolTipBorderColor: '#e5e5e5',
      toolTipSepChar: ': ',
      showToolTipShadow: '1',
      tooltipbgalpha: '100',
      // tooltipborderradius: '50',
      toolTipPadding: '9',
      // plottooltext: '<center>$label in Brazil<br/>make up $value of the total vegetation.</center>',
      labelFont: 'Montserrat',
      labelFontSize: '10',
      centerLabelFontSize: '12',
      // labelFontSize: '12',
    };

    this.data = data;
  }
}

const DoughnutChartStyled = styled.div`
  grid-area: ${({ gridArea }) => gridArea || null};
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  align-self: ${({ align }) => align || 'center'};
  justify-self: ${({ justify }) => justify || 'center'};
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px` || null};
  float: ${({ float }) => float || null };
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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => { 
    const { maxWidth, percentOfTotalColumns } = this.props;
    const { chart } = this.state;

    if (chart) {
      const width = Math.min(chart.container.parentElement.parentElement.parentElement.getBoundingClientRect().width * percentOfTotalColumns, maxWidth);
      chart.resizeTo(width, chart.height);
    } 
  }

  handleRender = (chart) => {
    if (!this.state.chart) {
      this.setState({ chart }, this.resize);
    }
  }

  render() {
    const { align, data, dataSourceConfig, float, gridArea, gridColumn, gridRow, height = '250', justify, maxWidth } = this.props;
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
      <DoughnutChartStyled gridArea={gridArea} gridColumn={gridColumn} gridRow={gridRow} align={align} justify={justify} maxWidth={maxWidth} float={float}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </DoughnutChartStyled>
    );
  }
};

export default DoughnutChart;
