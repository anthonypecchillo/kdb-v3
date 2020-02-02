/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import DoughnutChart from './DoughnutChart';
import PieChart from './PieChart';

const GET_NATION_DEMOGRAPHICS = gql`
  query getNationDemographics($name: String!) {
    nationByName(name: $name) {
      id
      name
      population {
        amount
        year
        citation_id
      }
      # globe {
      #   population {
      #     amount
      #     year
      #     citation_id
      #   }
      # }
      region {
        urbanVsRural {
          urbanPopulation
          ruralPopulation
          citation_id
        }
      }
    }
  }
`;

const data3 = [
  {
    label: 'Multi-ethnic',
    value: 550037,
    // color: '#ff69b4',
  },
  {
    label: 'White',
    value: 198279,
  },
  {
    label: 'Black',
    value: 48118,
  },
  {
    label: 'Indigenous',
    value: 18252,
  },
  {
    label: 'Indigenous',
    value: 18252,
  },
  {
    label: 'Other',
    value: 15762,
  },
];

const dataSourceConfig3 = {
  caption: 'Ethnic Distribution',
  // xAxisName: 'Vegetation Type',
  // yAxisName: 'Land Area (km²)',
  numberSuffix: ' people',
  showLabels: '0',
  showLegend: '1',
};

const DemographicsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr 1fr 0.6fr 5fr 6.25fr 0.75fr;
  justify-items: center;

  height: 100%;
  width: 100%;
`;

const DemographicsTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const DemographicsTotalTitle = styled.div`
  align-self: end;

  font-weight: 600;
  text-align: center;
`;

const DemographicsTotalValue = styled.h1`
  align-self: end;
  margin: 0;
`;

const DemographicsTotalNationalPercent = styled.div`
  align-self: start;
  font-size: 12px;
`;

const DemographicsCitation = styled.div`
  align-self: center;
  justify-self: end;

  font-size: 14px;
  padding: 0 1.25%;
`;

const NationalDemographics = ({ nation }) => {
  const { data, loading, error } = useQuery(GET_NATION_DEMOGRAPHICS, {
    variables: { name: nation },
  });
  // if (loading) return <Loading />;
  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;

  const { population, region } = data.nationByName;
  const { urbanPopulation, ruralPopulation } = region.urbanVsRural;

  const percentageOfGlobalPopulation = (population.amount / 7577130400) * 100;

  const urbanVsRuralData = [
    { label: 'Urban', value: Math.round((urbanPopulation * 0.01) * population.amount) },
    { label: 'Rural', value: Math.round((ruralPopulation * 0.01) * population.amount) },
  ];
  const urbanVsRuralDataTotal = urbanVsRuralData.reduce((acc, { value }) => acc + value, 0).toLocaleString();
  const urbanVsRuralDataSourceConfig = {
    caption: 'Population Distribution',
    centerLabel: '$label:<br/><br/>$value',
    defaultCenterLabel: `Total:<br/><br/>${urbanVsRuralDataTotal}`,
    numberSuffix: ' people',
  };

  return (
    <DemographicsGrid>
      <DemographicsTitle>Demographics</DemographicsTitle>
      <DemographicsTotalTitle>Total Population:</DemographicsTotalTitle>
      <DemographicsTotalValue>{population.amount.toLocaleString()}</DemographicsTotalValue>
      <DemographicsTotalNationalPercent>{`${percentageOfGlobalPopulation.toLocaleString()}% of Global Population`}</DemographicsTotalNationalPercent>
      <DoughnutChart data={urbanVsRuralData} dataSourceConfig={urbanVsRuralDataSourceConfig} justify="center" percentOfTotalColumns={1} />
      <PieChart data={data3} dataSourceConfig={dataSourceConfig3} justify="center" height={'310'} width="370" percentOfTotalColumns={0.9} />
      <DemographicsCitation>IBGE. 2012. Censo Demográfico 2010</DemographicsCitation>
    </DemographicsGrid>
  );
};

export default NationalDemographics;
