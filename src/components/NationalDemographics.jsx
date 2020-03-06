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

const GET_NATION_DEMOGRAPHICS = gql`
  query getNationDemographics($name: String!, $languageCode: String!) {
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
        socialGroupComponents {
          amount
          percent
          socialGroupCategory {
            socialGroupCategoryTranslate(code: $languageCode) {
              name
            }
          }
        }
      }
    }
  }
`;

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

const NationalDemographics = ({ language, nationName }) => {
  const { data, loading, error } = useQuery(GET_NATION_DEMOGRAPHICS, {
    variables: { name: nationName, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { population, region } = data.nationByName;
  const { socialGroupComponents } = region;

  const populationAmount = population ? population.amount.toLocaleString() : 'Data unavailable';
  const percentageOfGlobalPopulation = population ? `${((population.amount / 7577130400) * 100).toLocaleString()}% of Global Population` : 'Data unavailable';

  let urbanVsRuralData;
  let urbanVsRuralDataTotal;
  if (region.urbanVsRural) {
    const { urbanPopulation, ruralPopulation } = region.urbanVsRural;
    urbanVsRuralData = [
      { label: 'Urban', value: Math.round((urbanPopulation * 0.01) * population.amount) },
      { label: 'Rural', value: Math.round((ruralPopulation * 0.01) * population.amount) },
    ];
    urbanVsRuralDataTotal = urbanVsRuralData.reduce((acc, { value }) => acc + value, 0).toLocaleString();
  } else {
    urbanVsRuralData = [
      { label: 'Urban', value: null },
      { label: 'Rural', value: null },
    ];
    urbanVsRuralDataTotal = '';
  }

  const urbanVsRuralDataSourceConfig = {
    caption: 'Population Distribution',
    centerLabel: '$label:<br/><br/>$value',
    defaultCenterLabel: `Total:<br/><br/>${urbanVsRuralDataTotal}`,
    numberSuffix: ' people',
  };

  let socialGroupsData;
  if (socialGroupComponents) {
    socialGroupsData = socialGroupComponents.map(component => {
      if (!component.percent) {
        const sumOfComponentAmounts = socialGroupComponents.reduce((acc, curr) => curr.amount + acc, 0);
        const calculatedPercent = (component.amount / sumOfComponentAmounts) * 100;
        return { label: component.socialGroupCategory.socialGroupCategoryTranslate.name, value: calculatedPercent };
      }
      return { label: component.socialGroupCategory.socialGroupCategoryTranslate.name, value: component.percent };
    });
  }

  const socialGroupsDataSourceConfig = {
    caption: 'Ethnic Distribution',
    // numberSuffix: ' people',
    numberSuffix: '%',
    showLabels: '0',
    showLegend: '1',
  };

  return (
    <DemographicsGrid>
      <DemographicsTitle>Demographics</DemographicsTitle>
      <DemographicsTotalTitle>Total Population:</DemographicsTotalTitle>
      <DemographicsTotalValue>{populationAmount}</DemographicsTotalValue>
      <DemographicsTotalNationalPercent>{percentageOfGlobalPopulation}</DemographicsTotalNationalPercent>
      <DoughnutChart data={urbanVsRuralData} dataSourceConfig={urbanVsRuralDataSourceConfig} justify="center" percentOfTotalColumns={1} maxWidth={312}/>
      <PieChart data={socialGroupsData} dataSourceConfig={socialGroupsDataSourceConfig} justify="center" height={'310'} maxWidth={370} percentOfTotalColumns={0.9} />
      <DemographicsCitation>IBGE. 2012. Censo Demográfico 2010</DemographicsCitation>
    </DemographicsGrid>
  );
};

export default NationalDemographics;
