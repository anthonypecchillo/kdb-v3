/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import Loading from './Loading';
import DoughnutChart from './DoughnutChart';

// TODO: percentForested should be derived - store forest area instead!
const GET_NATION_LAND = gql`
  query getNationLand($name: String!) {
    nationByName(name: $name) {
      id
      name
      landArea {
        amount
        year
        units
        citation_id
      }
      percentForested {
        amount
        units
        year
        citation_id
      }
    }
  }
`;

const LandGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  height: 100%;
  width: 100%;
`;

const LandTitle = styled.h3`
  height: 100%;
  margin: 0;
  padding-top: 15px;
  text-align: center;
  width: 100%;
`;

const NationalLand = ({ language, nationName }) => {
  const { data, loading, error } = useQuery(GET_NATION_LAND, {
    variables: { name: nationName },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { landArea, percentForested } = data.nationByName;

  let landDistributionData;
  if (landArea && percentForested) {
    landDistributionData = [
      {
        label: 'Forest',
        value: Math.round(landArea.amount * (percentForested.amount / 100)),
      },
      {
        label: 'Non-Forest',
        value: Math.round(landArea.amount - landArea.amount * (percentForested.amount / 100)),
      },
    ];
  } else {
    landDistributionData = [
      {
        label: 'Forest',
        value: null,
      },
      {
        label: 'Non-Forest',
        value: null,
      },
    ];
  }

  const landAreaAmount = landArea ? landArea.amount : null;
  const landDistributionDataSourceConfig = {
    caption: 'Land Distribution',
    centerLabel: '$label:<br/><br/>$value',
    defaultCenterLabel: `Total:<br/><br/>${Math.round(landAreaAmount).toLocaleString()} km²`,
    numberSuffix: ' km²',
  };

  return (
    <LandGrid>
      <LandTitle>Land</LandTitle>
      <DoughnutChart
        data={landDistributionData}
        dataSourceConfig={landDistributionDataSourceConfig}
        justify="center"
        percentOfTotalColumns={1}
        maxWidth={350}
      />
    </LandGrid>
  );
};

export default NationalLand;
