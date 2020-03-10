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
  constructor(data, { caption, pieRadius, numberSuffix, showLegend = '0', showLabels = '1', legendPosition = 'right' }) {
    this.chart = {
      caption,
      numberSuffix,
      showLabels,
      showLegend,
      legendPosition,
      pieRadius,
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
      // legendCaptionFont: 'Montserrat',
      legendItemFont: 'Montserrat',
      legendItemFontSize: '14',
      legendItemHoverFontColor: '#abc123',
      // legendNumColumns: '2',
      minimiseWrappingInLegend: '1',
      startingAngle: '210',
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
    };

    this.data = data;
  }
}

const PieChartStyled = styled.div`
  grid-area: ${({ gridArea }) => gridArea || null};
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  align-self: ${({ align }) => align || 'center'};
  justify-self: ${({ justify }) => justify || 'center'};
  width: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}px` || null};
  float: ${({ float }) => float || null };
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
    const { align, data, dataSourceConfig, float, gridArea, gridColumn, gridRow, justify, height = '250', percentOfTotalColumns, maxWidth, width } = this.props;

    const dataSource = new PieDataSource(data, dataSourceConfig);
    const chartConfigs = {
      type: 'pie2d',
      containerBackgroundOpacity: '0',
      dataFormat: 'json',
      dataSource,
      height,
      width: '90%',
    };

    return (
      <PieChartStyled align={align} float={float} gridArea={gridArea} gridColumn={gridColumn} gridRow={gridRow} justify={justify} maxWidth={maxWidth}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </PieChartStyled>
    );
  }
};

export default PieChart;
