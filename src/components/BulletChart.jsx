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
      targetColor: '#8e0000',
      showHoverEffect: '1',
      colorRangeFillMix: '{light+0}',
      valuePadding: '7',
      theme: 'fusion',
      bgAlpha: '0',
      canvasBgAlpha: '0',
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
  width: 100%;
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
    const { align, data, dataSourceConfig, gridColumn, gridRow, height = '100', justify } = this.props;

    const dataSource = new BulletDataSource(data, dataSourceConfig);
    const chartConfigs = {
      type: 'hbullet',
      containerBackgroundOpacity: '0',
      dataFormat: 'json',
      dataSource,
      height,
      width: '90%',
    };

    return (
      <BulletChartStyled gridColumn={gridColumn} gridRow={gridRow} align={align} justify={justify}>
        <ReactFusioncharts {...chartConfigs} onRender={this.handleRender} />
      </BulletChartStyled>
    );
  }
};

export default BulletChart;
