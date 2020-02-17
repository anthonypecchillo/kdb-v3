/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import ReactFusioncharts from 'react-fusioncharts';

import styled from 'styled-components';

// Resolves charts dependancy
charts(FusionCharts);

ReactFusioncharts.fcRoot(FusionCharts, Widgets);

class BulletDataSource {
  constructor({ target, value }, { caption, numberSuffix }) {
    this.chart = {
      // caption,
      numberSuffix,
      lowerLimit: '0',
      upperLimit: '1.0',
      // subcaption: 'Actual vs Target<br>Bakersfield Central',
      targetColor: '#8e0000',
      showHoverEffect: '1',
      colorRangeFillMix: '{light+0}',
      valuePadding: '7',
      theme: 'fusion',
      bgAlpha: '0',
      canvasBgAlpha: '0',

      // FROM DOUGHTNUT CHART
      // animation: '1',
      // animationDuration: '1',
      // animateClockwise: '0',
      // alphaAnimation: '0',
      // showPercentValues: '0',
      // showLabels: '1',
      // showValues: '0',
      // theme: 'fusion',
      // captionAlignment: 'center',
      // captionOnTop: '1',
      // captionFontSize: 18,
      // captionFontColor: '#000000',
      // doughnutRadius: '81%',
      // startingAngle: '210',
      // enableSlicing: '1',
      // slicingDistance: 5,
      // bgAlpha: '0',
      // canvasBgAlpha: '0',
      // alignCaptionWithCanvas: '0',
      // captionpadding: '0',
      // decimals: '1',
      // showLegend: '0',
      // formatNumberScale: '0',
      // chartRightMargin: '-6',


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

    this.colorRange = {
      color: [
        {
          minValue: '0',
          maxValue: '0.5',
          code: '#e44a00',
          alpha: '70'
        },
        {
          minValue: '0.5',
          maxValue: '0.75',
          code: '#f2c500',
          alpha: '70'
        },
        {
          minValue: '0.75',
          maxValue: '100',
          code: '#1aaf5d',
          alpha: '70'
        }
      ],
    };

    this.target = target;
    this.value = value;
  }
}

const BulletChartStyled = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  align-self: ${({ align }) => align || 'center'};
  justify-self: ${({ justify }) => justify || 'center'};
`;

class BulletChart extends React.Component {
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
    const { align, data, dataSourceConfig, gridColumn, gridRow, height = '100', justify, width } = this.props;

    const dataSource = new BulletDataSource(data, dataSourceConfig);
    const chartConfigs = {
      type: 'hbullet',
      containerBackgroundOpacity: '0',
      dataFormat: 'json',
      dataSource,
      height,
      width,
    };

    return (
      <BulletChartStyled gridColumn={gridColumn} gridRow={gridRow} align={align} justify={justify}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </BulletChartStyled>
    );
  }
};

export default BulletChart;
