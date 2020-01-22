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
      numberSuffix,
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
      canvasLeftMargin: 10,
      // maxColWidth: '40',
      // captionFont: 'Font Name Here',
      // alignCaptionWithCanvas: '1',
      // xAxisLineColor: 'HEX CODE HERE',
      // xAxisLineThickness: '2',
      // yAxisLineColor: 'HEX CODE HERE',
      // yAxisLineThickness: '2',
      // yAxisNameWidth: ,
      // forceYAxisValueDecimals: ,
      // yAxisValueDecimals: ,
      // xAxisNameFont: 'Font Name Here',
      // xAxisNameFontColor: 'Hex Code Here',
      // xAxisNameFontSize: 'Number Here',
      // xAxisNameFontBold: ,
      // xAxisNameFontItalic: ,
      // xAxisNameAlpha: ,
      // xAxisNameFontAlpha: ,
      // xAxisNameBorderPadding: ,
      // xAxisNameBorderDashGap: ,

      // yAxisNameFont: 'Font Name Here',
      // yAxisNameFontColor: 'Hex Code Here',
      // yAxisNameFontSize: 'Number Here',
      // yAxisNameFontBold: ,
      // yAxisNameFontItalic: ,
      // yAxisNameAlpha: ,
      // yAxisNameFontAlpha: ,
      // yAxisNameBorderPadding: ,
      // yAxisNameBorderDashGap: ,

      // plotFillAngle: '90',
      // plotFillRatio: '67',
      // plotGradientColor: '#abc123',
      // usePlotGradientColor: '#123abc',

      // valueFont: ,
      // valueFontColor: ,
      // valueFontSize: ,
      // valueFontBold: ,
      // valueFontItalic: ,
      // valueBgColor: ,
      // valueBorderColor: ,
      // valueAlpha: ,
      // valueFontAlpha: ,
      // valueBgAlpha: ,
      // valueBorderAlpha: ,
      // valueBorderThickness: ,
      // valueBorderPadding: ,
      // valueBorderRadius: ,
      // valueBorderDashed: ,
      // valueBorderDashLen: ,
      // valueBorderDashGap: ,
      // textOutline: ,

      // yAxisValueFont: ,
      // yAxisValueFontColor: ,
      // yAxisValueFontSize: ,
      // yAxisValueFontBold: ,
      // yAxisValueFontItalic: ,
      // yAxisValueBgColor: ,
      // yAxisValueBorderColor: ,
      // yAxisValueAlpha: ,
      // yAxisValueBgAlpha: ,
      // yAxisValueBorderAlpha: ,
      // yAxisValueBorderPadding: ,
      // yAxisValueBorderRadius: ,
      // yAxisValueBorderThickness: ,
      // yAxisValueBorderDashed: ,
      // yAxisValueBorderDashLen: ,
      // yAxisValueBorderDashGap: ,
      // yAxisValueLink: ,

      // divLineColor: 'Hex Code Here',
      // divLineThickness: Number Here,
      // divLineAlpha: ,
      // divLineDashed: ,
      // divLineDashLen: ,
      // divLineDashGap: ,
      // zeroPlaneColor: ,
      // zeroPlaneThickness: ,
      // zeroPlaneAlpha: ,
      // showZeroPlaneValue: ,
      // alternateHGridColor: ,
      // alternateHGridAlpha: ,

      // defaultNumberScale: String
      // numberScaleUnit: String
      // numberScaleValue: String
      // forceNumberScale: Boolean
      // scaleRecursively: Boolean
      // maxScaleRecursion: Number
      // scaleSeparator: String
      // numberPrefix: String
      // decimalSeparator: String
      // thousandSeparator: String
      // thousandSeparatorPosition: Number
      // inDecimalSeparator: String
      // inThousandSeparator: String
      // forceDecimals: Boolean

      // showToolTip: '1',
      // toolTipBgColor: Color
      // toolTipColor: Color
      // toolTipBorderColor: Color
      // tooltipBorderAlpha: Number
      // toolTipSepChar: String
      // showToolTipShadow: Boolean
      // plottooltext: String

      // showHoverEffect: '1',            // All elements
      // plotHoverEffect: '1',         // Data plots only
      // plotFillHoverColor: '#ffffff',
      // plotFillHoverAlpha: Number
      // columnHoverColor: '#ffffff',
      // columnHoverAlpha: Number
      // plotHoverGradientColor: '#f76eac',
      // plotHoverRatio: Number
      // plotHoverAngle: Number
      // plotBorderHoverColor: Color
      // plotBorderHoverThickness: Number
      // plotBorderHoverDashed: Boolean
      // plotBorderHoverDashLen: Number
      // plotBorderHoverDashGap: Number

      // labelFont: String,
      // labelFontColor: Color,
      // labelFontSize: Number,
      // labelFontBold: Boolean,
      // labelFontItalic: Boolean,
      // labelBgColor: Color,
      // labelBorderColor: Color,
      // labelAlpha: Number,
      // labelBgAlpha: Number,
      // labelBorderAlpha: Number,
      // labelBorderPadding: Number,
      // labelBorderRadius: Number,
      // labelBorderThickness: Number,
      // labelBorderDashed: Boolean,
      // labelBorderDashLen: Number,
      // labelBorderDashGap: Number,
      // labelLink: URL,

      // captionPadding: Number,
      // xAxisNamePadding: Number,
      // yAxisNamePadding: Number,
      // yAxisValuesPadding: Number,
      // labelPadding: Number,
      // valuePadding: Number,
      // plotSpacePercent: Number,
      // canvasPadding: Number,
      // canvasLeftPadding: Number,
      // canvasRightPadding: Number,
      // canvasTopPadding: Number,
      // canvasBottomPadding: Number,
      // chartLeftMargin: -15,
      // chartRightMargin: Number,
      // chartTopMargin: Number,
      // chartBottomMargin: Number,
      // canvasRightMargin: Number,
      // canvasTopMargin: Number,
      // canvasBottomMargin: Number,

      // trendlineColor: Color,
      // trendlineThickness: Number,
      // trendlineAlpha: Number,
      // trendLineToolText: String,
      // showTrendlinesOnTop: Boolean,

      // trendValueFont: String,
      // trendValueFontSize: Number,
      // trendValueFontBold: Boolean,
      // trendValueFontItalic: Boolean,
      // trendValueBgColor: Color,
      // trendValueBorderColor: Color,
      // trendValueAlpha: Number,
      // trendValueBgAlpha: Number,
      // trendValueBorderAlpha: Number,
      // trendValueBorderPadding: Number,
      // trendValueBorderRadius: Number,
      // trendValueBorderThickness: Number,
      // trendValueBorderDashed: Boolean,
      // trendValueBorderDashLen: Number,
      // trendValueBorderDashGap: Number,
    };

    this.data = data;
  }
}

const LineChartStyled = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  justify-self: ${({ justify }) => justify || 'center'};
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
    if (this.state.chart) {
      console.log(this.state.chart);
      this.state.chart.resizeTo(this.state.chart.container.parentElement.parentElement.parentElement.getBoundingClientRect().width * 0.6, this.state.chart.height);
    } 
  }

  handleRender = (chart) => {
    if (!this.state.chart) {
      this.setState({ chart }, this.resize);

    }
  }

  render() {
    const { categories, data, dataSourceConfig, gridColumn, gridRow, justify, nationName, stateName } = this.props;

    const dataSource = new LineDataSource(categories, data, dataSourceConfig);
    const chartConfigs = {
      type: 'line',
      // width: '700',
      height: '400',
      containerBackgroundOpacity: '0',
      dataFormat: 'json',
      dataSource,
    };

    return (
      <LineChartStyled gridColumn={gridColumn} gridRow={gridRow} justify={justify}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </LineChartStyled>
    );
  }
};

export default LineChart;
