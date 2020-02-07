/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import DoughnutChart from './DoughnutChart';
import Loading from './Loading';
import PieChart from './PieChart';

const GET_JURISDICTION_LAND = gql`
  query getJurisdictionLand($name: String!) {
    jurisdictionByName(name: $name) {
      id
      name
      landArea {
        amount
        year
        citation_id
      }
      forestArea {
        amount
        units
        year
        citation_id
      }
    }
  }
`;

const data2 = [
  {
    label: 'Protected',
    value: 206856,
    // color: '#ff69b4',
  },
  {
    label: 'Unprotected',
    value: 163456,
  },
];

const dataTotal2 = data2.reduce((acc, { value }) => acc + value, 0).toLocaleString();

const dataSourceConfig2 = {
  caption: 'Forest Management',
  centerLabel: '$label:<br/><br/>$value',
  defaultCenterLabel: `Total:<br/><br/>${dataTotal2} km²`,
  numberSuffix: ' km²',
};

const data3 = [
  {
    label: 'Forest',
    value: 246856,
    // color: '#ff69b4',
  },
  {
    label: 'Pasture',
    value: 100000,
  },
  {
    label: 'Agriculture',
    value: 20000,
  },
  {
    label: 'Secondary',
    value: 3000,
  },
  {
    label: 'Other',
    value: 456,
  },
];

const dataSourceConfig3 = {
  caption: 'Major Vegetation Types',
  xAxisName: 'Vegetation Type',
  yAxisName: 'Land Area (km²)',
  numberSuffix: ' km²',
};

const VegetationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* justify-items: center; */
`;

const NJVegetation = ({ jurisdiction }) => {
  const { data, loading, error } = useQuery(GET_JURISDICTION_LAND, {
    variables: { name: jurisdiction },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { forestArea, landArea } = data.jurisdictionByName;

  const landDistributionData = [
    {
      label: 'Forest',
      value: Math.round(forestArea.amount),
      // color: '#ff69b4',
    },
    {
      label: 'Non-Forest',
      value: Math.round(landArea.amount - forestArea.amount),
    },
  ];

  const landDistributionDataSourceConfig = {
    caption: 'Land Distribution',
    centerLabel: '$label:<br/><br/>$value',
    defaultCenterLabel: `Total:<br/><br/>${Math.round(landArea.amount).toLocaleString()} km²`,
    numberSuffix: ' km²',
  };

  return (
    <VegetationGrid>
      <DoughnutChart data={landDistributionData} dataSourceConfig={landDistributionDataSourceConfig} justify="center" percentOfTotalColumns={1} />
      <PieChart data={data3} dataSourceConfig={dataSourceConfig3} justify="center" percentOfTotalColumns={1} />
      <DoughnutChart data={data2} dataSourceConfig={dataSourceConfig2} justify="center" percentOfTotalColumns={1} />
    </VegetationGrid>
  )
};

export default NJVegetation;
