/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import BulletChart from './BulletChart';
import PieChart from './PieChart';

const GET_JURISDICTION_ECONOMICS = gql`
  query getJurisdictionEconomics($name: String!) {
    jurisdictionByName(name: $name) {
      id
      name
      humanDevelopmentIndex {
        amount
        year
        citation_id
      }
      perCapitaIncome {
        amount
        units
        year
        citation_id
      }
      gdp {
        amount
        units
        year
        citation_id
      }
      nation {
        gdp {
          amount
          units
          year
          citation_id
        }
      }
    }
  }
`;

const TAG_LIST = [
  'Mining',
  'Petroleum',
  'Transportation Equipment',
  'Soy',
  'Sugar',
  'Ethanol',
  'Meat',
  'Coffee',
];

const data3 = [
  {
    label: 'Services',
    value: 70.80,
    // color: '#ff69b4',
  },
  {
    label: 'Industry',
    value: 20.20,
  },
  {
    label: 'Agriculture',
    value: 5.20,
  },
  {
    label: 'Mining',
    value: 3.80,
  },
];

const dataSourceConfig3 = {
  caption: 'GDP Breakdown',
  // xAxisName: 'Vegetation Type',
  // yAxisName: 'Land Area (km²)',
  numberSuffix: ' %',
  showLabels: '0',
  showLegend: '1',
};

const dataBullet = {
  target: null,
  value: 0.82,
};

const dataSourceConfigBullet = {
  caption: 'Human Development Index',
};

const EconomicsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr 2fr 0.5fr 1fr 0.6fr 0.5fr 1fr 0.6fr 6.25fr 2fr 0.75fr;
  justify-items: center;

  height: 100%;
  width: 100%;
`;

const EconomicsTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const EconomicsTotalTitle = styled.div`
  align-self: end;

  font-weight: 600;
  text-align: center;
`;

const EconomicsTotalValue = styled.h1`
  align-self: end;
  margin: 0;
`;

const EconomicsTotalNationalPercent = styled.div`
  align-self: start;
  font-size: 12px;
`;

const EconomicsCitation = styled.div`
  align-self: center;
  justify-self: end;

  font-size: 14px;
  padding: 0 1.25%;
`;

const EconomicsTagListContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const DeforestationTagList = styled.ul`
  list-style-type: none;
  overflow: hidden;
  overflow-y: scroll;
  height: 100px;
  width: 100%;
`;

const DeforestationTagListItem = styled.li`
  border: 1px solid black;
  background-color: tomato;
  height: 50px;
  margin: 15px 0;
  width: 90%;
`;

const NJEconomics = ({ jurisdiction }) => {
  const { data, loading, error } = useQuery(GET_JURISDICTION_ECONOMICS, {
    variables: { name: jurisdiction },
  });
  // if (loading) return <Loading />;
  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;

  const { gdp, humanDevelopmentIndex, nation, perCapitaIncome, population } = data.jurisdictionByName;

  const percentageOfNationalGDP = (gdp.amount / nation.gdp.amount) * 100;

  const humnDevelopmentIndexData = { target: null, value: humanDevelopmentIndex.amount };
  const humanDevelopmentIndexDataSourceConfig = { caption: 'Human Development Index' };

  return (
    <EconomicsGrid>
      <EconomicsTitle>Economics</EconomicsTitle>
      <EconomicsTotalTitle>Human Development Index</EconomicsTotalTitle>
      <BulletChart data={humnDevelopmentIndexData} dataSourceConfig={humanDevelopmentIndexDataSourceConfig} justify="center" percentOfTotalColumns={1} />
      <EconomicsTotalTitle>Per Capita Income</EconomicsTotalTitle>
      <EconomicsTotalValue>{`${Math.round(perCapitaIncome.amount).toLocaleString()} ${perCapitaIncome.units}`}</EconomicsTotalValue>
      <EconomicsTotalNationalPercent>Annual</EconomicsTotalNationalPercent>
      <EconomicsTotalTitle>State GDP</EconomicsTotalTitle>
      <EconomicsTotalValue>{`${gdp.amount.toLocaleString()} ${gdp.units}`}</EconomicsTotalValue>
      <EconomicsTotalNationalPercent>{`${percentageOfNationalGDP.toLocaleString()}% of National GDP`}</EconomicsTotalNationalPercent>
      <PieChart data={data3} dataSourceConfig={dataSourceConfig3} justify="center" height={'310'} width="370" percentOfTotalColumns={1} />
      <EconomicsTagListContainer>
        <EconomicsTotalTitle>Major Exports</EconomicsTotalTitle>
        <DeforestationTagList>
          {TAG_LIST.map((tag, index) => (
            <DeforestationTagListItem key={index}>{tag}</DeforestationTagListItem>
          ))}
        </DeforestationTagList>
      </EconomicsTagListContainer>
      <EconomicsCitation>IBGE. 2012. Censo Demográfico 2010</EconomicsCitation>
    </EconomicsGrid>
  );
};

export default NJEconomics;
