/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import BulletChart from './BulletChart';
import ExportsList from './ExportsList';
import Loading from './Loading';
import PieChart from './PieChart';

const GET_NATION_ECONOMICS = gql`
  query getNationEconomics($name: String!, $languageCode: String!) {
    nationByName(name: $name) {
      id
      name
      humanDevelopmentIndex {
        id
        amount
        year
        citation_id
      }
      perCapitaIncome {
        id
        amount
        units
        year
        citation_id
      }
      gdp {
        id
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
          faIconClass
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
  grid-template-rows: 1fr 0.5fr 2fr 0.5fr 1fr 0.6fr 0.5fr 1fr 0.6fr 6.25fr auto 2fr 0.75fr;
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
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  text-align: center;
`;

const EconomicsTotalValue = styled.h1`
  align-self: end;
  margin: 0;

  @media (max-width: 460px) {
    font-size: 24px;
  }
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

const NationalEconomics = ({ language, nationName }) => {
  const { data, loading, error } = useQuery(GET_NATION_ECONOMICS, {
    variables: { name: nationName, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { gdp, humanDevelopmentIndex, perCapitaIncome, region } = data.nationByName;

  let percentageOfGlobalGDP;
  let PERCENTAGE_OF_GLOBAL_GDP;
  if (gdp && gdp.amount) {
    // TODO: Replace magic number with GWP with translateable units! (Store number in value_global)
    percentageOfGlobalGDP = gdp.amount / 80270000000000 * 100;
    PERCENTAGE_OF_GLOBAL_GDP = `${percentageOfGlobalGDP.toLocaleString()}% of Gross World Product`;
  } else {
    PERCENTAGE_OF_GLOBAL_GDP = 'Data unavailable';
  }

  const humnDevelopmentIndexData = humanDevelopmentIndex && humanDevelopmentIndex.amount ? { target: null, value: humanDevelopmentIndex.amount } : { target: null, value: null };
  const humanDevelopmentIndexDataSourceConfig = { caption: 'Human Development Index' };

  let PER_CAPITA_INCOME;
  if (perCapitaIncome && perCapitaIncome.amount && perCapitaIncome.units) {
    PER_CAPITA_INCOME = `${Math.round(perCapitaIncome.amount).toLocaleString()} ${perCapitaIncome.units}`;
  } else {
    PER_CAPITA_INCOME = 'Data unavailable';
  }

  let GDP;
  if (gdp && gdp.amount && gdp.units) {
    GDP = `${gdp.amount.toLocaleString()} ${gdp.units}`;
  } else {
    GDP = 'Data unavailable';
  }

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
    showLabels: '1',
    showLegend: '0',
    pieRadius: '90',
  };

  return (
    <EconomicsGrid>
      <EconomicsTitle>Economics</EconomicsTitle>
      <EconomicsTotalTitle>Human Development Index</EconomicsTotalTitle>
      <BulletChart data={humnDevelopmentIndexData} dataSourceConfig={humanDevelopmentIndexDataSourceConfig} justify="center" percentOfTotalColumns={1} />
      <EconomicsTotalTitle>Per Capita Income</EconomicsTotalTitle>
      <EconomicsTotalValue>{PER_CAPITA_INCOME}</EconomicsTotalValue>
      <EconomicsTotalNationalPercent>Annual</EconomicsTotalNationalPercent>
      <EconomicsTotalTitle>National GDP</EconomicsTotalTitle>
      <EconomicsTotalValue>{GDP}</EconomicsTotalValue>
      <EconomicsTotalNationalPercent>{PERCENTAGE_OF_GLOBAL_GDP}</EconomicsTotalNationalPercent>
      <PieChart data={gdpBreakdownData} dataSourceConfig={gdpBreakdownDataSourceConfig} justify="center" height={'300'} maxWidth={680} percentOfTotalColumns={1} />
      <EconomicsTotalTitle marginBottom="10px">Major Exports</EconomicsTotalTitle>
      <EconomicsTagListContainer>
        <ExportsList majorExports={majorExports} />
      </EconomicsTagListContainer>
      <EconomicsCitation>IBGE. 2012. Censo Demográfico 2010</EconomicsCitation>
    </EconomicsGrid>
  );
};

export default NationalEconomics;
