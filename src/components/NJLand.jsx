/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import BarChart from './BarChart';
import Loading from './Loading';
import DoughnutChart from './DoughnutChart';

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
      forestManagement {
        protected
        unprotected
      }
    }
  }
`;

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
  numberSuffix: ' km²',
  xAxisName: 'Vegetation Type',
  yAxisName: 'Land Area (km²)',
};

const LandGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr 2fr;

  width: 100%;
`;

const LandTitle = styled.h3`
  grid-column: 1/3;
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const NJLand = ({ jurisdiction }) => {
  const { data, loading, error } = useQuery(GET_JURISDICTION_LAND, {
    variables: { name: jurisdiction },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { forestArea, forestManagement, landArea } = data.jurisdictionByName;

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

  const forestManagementData = [
    {
      label: 'Protected',
      value: Math.round(forestManagement.protected),
      // color: '#ff69b4',
    },
    {
      label: 'Unprotected',
      value: Math.round(forestManagement.unprotected),
    },
  ];
  const forestManagementTotal = forestManagementData.reduce((acc, { value }) => acc + value, 0);
  const forestManagementDataSourceConfig = {
    caption: 'Forest Management',
    centerLabel: '$label:<br/><br/>$value',
    numberSuffix: ' km²',
    defaultCenterLabel: `Total:<br/><br/>${Math.round(forestManagementTotal).toLocaleString()} km²`,
  };

  return (
    <LandGrid>
      <LandTitle>Land</LandTitle>
      <DoughnutChart data={landDistributionData} dataSourceConfig={landDistributionDataSourceConfig} justify="left" percentOfTotalColumns={0.5} />
      <DoughnutChart data={forestManagementData} dataSourceConfig={forestManagementDataSourceConfig} justify="right" percentOfTotalColumns={0.5} />
      <BarChart data={data3} dataSourceConfig={dataSourceConfig3} justify="left" />
    </LandGrid>
  )
};

export default NJLand;
