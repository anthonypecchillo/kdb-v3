/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

// import Loading from './Loading';
import StackedColumnChart from './StackedColumnChart';

const categories4 = [
  {
    category: [
      { label: '2001' },
      { label: '2002' },
      { label: '2003' },
      { label: '2004' },
      { label: '2005' },
      { label: '2006' },
      { label: '2018' },
      { label: '2008' },
      { label: '2009' },
      { label: '2010' },
      { label: '2011' },
      { label: '2012' },
      { label: '2013' },
      { label: '2014' },
      { label: '2015' },
      { label: '2016' },
      { label: '2017' },
      { label: '2018' },
    ],
  },
];

const data4 = [
  {
    seriesname: 'Below Ground Biomass',
    data: [
      { value: 6.53 },
      { value: 14.2 },
      { value: 15.15 },
      { value: 11.78 },
      { value: 10.93 },
      { value: 3.5 },
      { value: 2.45 },
      { value: 4.34 },
      { value: 2.46 },
      { value: 3.99 },
      { value: 4.44 },
      { value: 4.1 },
      { value: 3.04 },
      { value: 5.19 },
      { value: 3.37 },
      { value: 4.78 },
      { value: 3.3 },
      { value: 5.71 },
    ],
  },
  {
    seriesname: 'Above Ground Biomass',
    data: [
      { value: 24.1 },
      { value: 36.62 },
      { value: 39.08 },
      { value: 30.39 },
      { value: 28.18 },
      { value: 9.02 },
      { value: 6.31 },
      { value: 11.2 },
      { value: 6.35 },
      { value: 10.28 },
      { value: 11.45 },
      { value: 10.57 },
      { value: 7.84 },
      { value: 13.39 },
      { value: 8.68 },
      { value: 17.65 },
      { value: 12.19 },
      { value: 21.06 },
    ],
  },
  {
    seriesname: 'Litter',
    data: [
      { value: 0.72 },
      { value: 1.57 },
      { value: 1.68 },
      { value: 1.3 },
      { value: 1.21 },
      { value: 0.39 },
      { value: 0.27 },
      { value: 0.48 },
      { value: 0.27 },
      { value: 0.44 },
      { value: 0.49 },
      { value: 0.45 },
      { value: 0.34 },
      { value: 0.57 },
      { value: 0.37 },
      { value: 0.53 },
      { value: 0.37 },
      { value: 0.63 },
    ],
  },
];

const dataSourceConfig4 = {
  caption: 'CO₂ Emissions from Deforestation',
  numberSuffix: ' MtC',
  xAxisName: 'Year',
  yAxisName: 'CO₂ Mass (Million Tonnes, MtC)',
};

const CO2EmissionsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr 1.2fr 0.4fr 1fr 1.25fr 8fr 1fr 0.75fr;
  justify-items: center;

  height: 100%;
  width: 100%;
`;

const CO2EmissionsTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const CO2EmissionsTotalTitle = styled.div`
  align-self: end;

  font-weight: 600;
  text-align: center;
`;

const CO2EmissionsTotalValue = styled.h1`
  align-self: end;
  margin: 0;
`;

const CO2EmissionsTotalYear = styled.div`
  align-self: start;
  font-size: 12px;
`;

const CO2EmissionsHowIsThisCalculated = styled.h3`
  align-self: center;

  margin: 0;
`;

const CO2EmissionsText = styled.div`
  align-self: center;

  padding: 0 5%;
`;

const CO2EmissionsCitation = styled.div`
  align-self: center;
  justify-self: end;

  font-size: 14px;
  padding: 0 1.25%;
`;

const NJCO2Emissions = () => (
  <CO2EmissionsGrid>
    <CO2EmissionsTitle>CO₂ Emissions</CO2EmissionsTitle>
    <CO2EmissionsTotalTitle>Total CO₂ Emissions from Deforestation:</CO2EmissionsTotalTitle>
    <CO2EmissionsTotalValue>760.4 Million Tonnes</CO2EmissionsTotalValue>
    <CO2EmissionsTotalYear>2001 - 2018</CO2EmissionsTotalYear>
    <CO2EmissionsHowIsThisCalculated>How is this Calculated?</CO2EmissionsHowIsThisCalculated>
    <CO2EmissionsText>
      To estimate CO₂ emissions, we calculated the spatially explicit carbon losses occured over the
      PRODES deforestation polygons using the Baccini et al carbon map.
    </CO2EmissionsText>
    <StackedColumnChart
      categories={categories4}
      data={data4}
      dataSourceConfig={dataSourceConfig4}
      justify="left"
    />
    <CO2EmissionsText>
      This plot shows the estimated emissions of CO₂ (million tonnes) associated with the clearing
      of forest in this state.
    </CO2EmissionsText>
    <CO2EmissionsCitation>Source: Brazil UNFCCC Brazil FREL submission</CO2EmissionsCitation>
  </CO2EmissionsGrid>
);

export default NJCO2Emissions;
