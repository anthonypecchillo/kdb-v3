/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import BulletChart from './BulletChart';
import PieChart from './PieChart';

const GET_NATION_ECONOMICS = gql`
  query getNationEconomics($name: String!, $languageCode: String!) {
    nationByName(name: $name) {
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
      region {
        gdpComponents {
          amount
          percent
          gdpCategory {
            gdpCategoryTranslate(code: $languageCode) {
              languageCode
              name
            }
          }
          citation_id
        }
       	majorExports {
          id
          majorExportTranslate(code: $languageCode) {
            id
            languageCode
            name
          }
        }
      }
      # globe {
      #   gdp {
      #     amount
      #     units
      #     year
      #     citation_id
      #   }
      # }
    }
  }
`;

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

const NationalEconomics = ({ language, nation }) => {
  console.log(language);
  const { data, loading, error } = useQuery(GET_NATION_ECONOMICS, {
    variables: { name: nation, languageCode: language },
  });
  // if (loading) return <Loading />;
  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;

  const { gdp, humanDevelopmentIndex, perCapitaIncome, region } = data.nationByName;

  // TODO: Replace magic number with GWP with translateable units! (Store number in value_global)
  const percentageOfGlobalGDP = (gdp.amount / 80270000000000) * 100;

  const humnDevelopmentIndexData = { target: null, value: humanDevelopmentIndex.amount };
  const humanDevelopmentIndexDataSourceConfig = { caption: 'Human Development Index' };

  const { gdpComponents, majorExports } = region;
  const gdpBreakdownData = gdpComponents.map(gdpComponent => {
    return {
      label: gdpComponent.gdpCategory.gdpCategoryTranslate.name,
      value: gdpComponent.percent,
    };
  });

  const gdpBreakdownDataSourceConfig = {
    caption: 'GDP Breakdown',
    numberSuffix: '%',
    showLabels: '0',
    showLegend: '1',
  };

  return (
    <EconomicsGrid>
      <EconomicsTitle>Economics</EconomicsTitle>
      <EconomicsTotalTitle>Human Development Index</EconomicsTotalTitle>
      <BulletChart data={humnDevelopmentIndexData} dataSourceConfig={humanDevelopmentIndexDataSourceConfig} justify="center" percentOfTotalColumns={1} />
      <EconomicsTotalTitle>Per Capita Income</EconomicsTotalTitle>
      <EconomicsTotalValue>{`${Math.round(perCapitaIncome.amount).toLocaleString()} ${perCapitaIncome.units}`}</EconomicsTotalValue>
      <EconomicsTotalNationalPercent>Annual</EconomicsTotalNationalPercent>
      <EconomicsTotalTitle>National GDP</EconomicsTotalTitle>
      <EconomicsTotalValue>{`${gdp.amount.toLocaleString()} ${gdp.units}`}</EconomicsTotalValue>
      <EconomicsTotalNationalPercent>{`${percentageOfGlobalGDP.toLocaleString()}% of Gross World Product`}</EconomicsTotalNationalPercent>
      <PieChart data={gdpBreakdownData} dataSourceConfig={gdpBreakdownDataSourceConfig} justify="center" height={'310'} width="370" percentOfTotalColumns={1} />
      <EconomicsTagListContainer>
        <EconomicsTotalTitle>Major Exports</EconomicsTotalTitle>
        <DeforestationTagList>
          {majorExports.map((majorExport, index) => (
            <DeforestationTagListItem key={index}>{majorExport.majorExportTranslate.name}</DeforestationTagListItem>
          ))}
        </DeforestationTagList>
      </EconomicsTagListContainer>
      <EconomicsCitation>IBGE. 2012. Censo Demográfico 2010</EconomicsCitation>
    </EconomicsGrid>
  );
};

export default NationalEconomics;
