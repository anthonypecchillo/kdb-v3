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
  query getJurisdictionLand($nationName: String!, $jurisdictionName: String!, $languageCode: String!) {
    jurisdictionByName(nationName: $nationName, jurisdictionName: $jurisdictionName) {
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
      vegetationComponents {
        amount
        percent
        vegetationCategory {
          vegetationCategoryTranslate(code: $languageCode) {
            name
          }
        }
      }
    }
  }
`;

const VegetationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 1fr 1fr;
  ${'' /* justify-items: center; */}

  width: 100%;

`;

const VegetationTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const NJVegetation = ({ jurisdiction, language, nation }) => {
  const { data, loading, error } = useQuery(GET_JURISDICTION_LAND, {
    variables: { nationName: nation, jurisdictionName: jurisdiction, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { forestArea, forestManagement, landArea, vegetationComponents } = data.jurisdictionByName;

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

  const vegetationData = vegetationComponents.map(component => {
    return { label: component.vegetationCategory.vegetationCategoryTranslate.name, value: component.amount };
  });

  const vegetationDataSourceConfig = {
    caption: 'Major Vegetation Types',
    numberSuffix: ' km²',
    xAxisName: 'Vegetation Type',
    yAxisName: 'Land Area (km²)',
  };

  return (
    <VegetationGrid>
      <VegetationTitle>Land (Alternate)</VegetationTitle>
      <DoughnutChart data={landDistributionData} dataSourceConfig={landDistributionDataSourceConfig} justify="center" percentOfTotalColumns={1} />
      <PieChart data={vegetationData} dataSourceConfig={vegetationDataSourceConfig} justify="center" percentOfTotalColumns={1} />
      <DoughnutChart data={forestManagementData} dataSourceConfig={forestManagementDataSourceConfig} justify="center" percentOfTotalColumns={1} />
    </VegetationGrid>
  )
};

export default NJVegetation;
