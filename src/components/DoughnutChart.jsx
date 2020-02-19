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
      // palette: '1',
      // paletteColors: '#FF0000, #0372AB, #FF5904',
      // showZeroPies: '0',
      // showPercentInToolTip: '1',
      // labelSepChar: ',',
      // clickURL: '/#',
      // clickURLOverridesPlotLinks: '',
      // useDataPlotColorForLabels: '0',
      // hasRTLText: '0',
      // plotHighlightEffect: 'fadeout|color=#ff0000, alpha=60',
      // showPrintMenuItem: '0',

      // subcaption: 'No Subcaption Necessary',

      // subCaptionFontSize: 10,
      // captionFont: 'Font Name Here',
      // subCaptionFont: 'Font Name Here',
      // subCaptionFontColor: 'Hex Code Here',
      // captionFontBold: '1',
      // subCaptionFontBold: '1',
      // alignCaptionWithCanvas: '0',
      // captionHorizontalPadding: 0,
      // use3DLighting: '1',
      // showShadow: '1',

      // pieRadius: '90%',
      // enableRotation: '1',
      // enableMultiSlicing: '1',

      // captionPadding: '-50',
      // chartTopMargin: '-80',
      // paletteColors: '#FF0000, #0372AB, #FF5904',
      // plottooltext: '<b>$percentValue</b> of our Android users are on <b>$label</b>',
      // legendPosition: 'right',
    };

    this.data = data;
  }
}

const DoughnutChartStyled = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  align-self: ${({ align }) => align || 'center'};
  justify-self: ${({ justify }) => justify || 'center'};
  ${'' /* width: ${({ width }) => width}; */}
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
    const { align, data, dataSourceConfig, gridColumn, gridRow, justify, width } = this.props;

    const dataSource = new DoughnutDataSource(data, dataSourceConfig);
    const chartConfigs = {
      type: 'doughnut2d',
      width,
      height: '250',
      containerBackgroundOpacity: '0',
      dataFormat: 'json',
      dataSource,
    };

    return (
      <DoughnutChartStyled gridColumn={gridColumn} gridRow={gridRow} align={align} justify={justify}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </DoughnutChartStyled>
    );
  }
};

export default DoughnutChart;
