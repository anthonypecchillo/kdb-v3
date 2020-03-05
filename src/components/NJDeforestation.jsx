/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

import DeforestationDriversList from './DeforestationDriversList';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import Loading from './Loading';

const GET_JURISDICTION_DEFORESTATION = gql`
  query getJurisdictionDeforestation($nationName: String!, $jurisdictionName: String!, $languageCode: String!) {
    jurisdictionByName(nationName: $nationName, jurisdictionName: $jurisdictionName) {
      id
      name
      forestArea {
      	id
        name
        amount
        year
        citation_id
      }
      originalForestArea {
      	id
        name
        amount
        year
        citation_id
      }
      deforestationDrivers {
        id
        faIconClass
        deforestationDriverTranslate(code: $languageCode) {
          name
        }
      }
      contentJurisdictional {
        id
        contentJurisdictionalTranslate(code: $languageCode) {
          id
          languageCode
          driversOfDeforestation
        }
      }
      region {
        deforestationRates {
          id
          amount
          year
          units
          citation_id
        }
      }
    }
  }
`;

const DeforestationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto 32px auto;
  
  height: 100%;
  width: 100%;
`;

const DeforestationTitle = styled.h3`
  grid-column: 1/4;
  ${'' /* height: 100%; */}
  /* padding-top: 20px; */
  margin: 0;
  text-align: center;
  width: 100%;
`;

const DeforestationText = styled.div`
  grid-column: 1/3;
  grid-row: 2/3;
  overflow: scroll;
  padding: 0 2.5%;
  width: 100%;
`;

const DeforestationRateTitle = styled.div`
  grid-column: 1/3;
  grid-row: 3/4;

  align-self: end;
  font-weight: 600;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  text-align: center;
`;

const DeforestationDriversTitle = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;

  align-self: end;
  font-weight: 600;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  text-align: center;
`;

const DeforestationTagListContainer = styled.div`
  grid-column: 3/4;
  grid-row: 4/5;

  height: 100%;
  margin-top: 10px;
  width: 100%;

  overflow-x: scroll;
`;

// TODO: Use primary key from DB as uniqueID for props
const NJDeforestation = ({ jurisdictionName, language, nationName }) => {
  const { data, loading, error } = useQuery(GET_JURISDICTION_DEFORESTATION, {
    variables: { nationName: nationName, jurisdictionName: jurisdictionName, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { driversOfDeforestation } = data.jurisdictionByName.contentJurisdictional.contentJurisdictionalTranslate;
  const driversOfDeforestationHTML = ReactHtmlParser(driversOfDeforestation);

  const { deforestationDrivers, forestArea, originalForestArea } = data.jurisdictionByName;
  const totalDeforestationData = [
    {
      label: 'Still<br/>Forested',
      value: Math.round(forestArea.amount),
    },
    {
      label: 'Deforested',
      value: Math.round(originalForestArea.amount - forestArea.amount),
      // color: '#ff69b4',
    },
  ];
  const totalDeforestationDataSourceConfig = {
    caption: 'Total Deforestation',
    centerLabel: '$label:<br/><br/>$value',
    defaultCenterLabel: `Original <br/>Forest Area:<br/><br/> ${Math.round(originalForestArea.amount).toLocaleString()} km²`,
    numberSuffix: ' km²',
  };

  const { deforestationRates } = data.jurisdictionByName.region;
  const deforestationRatesData = deforestationRates.map(rate => {
    return {
      label: rate.year.toString(),
      value: rate.amount,
    };
  });
  const deforestationRatesDataSourceConfig = {
    caption: 'Deforestation Rate',
    xAxisName: 'Year',
    yAxisName: 'Deforested Area (km²)',
    numberSuffix: ' km²',
  };

  return (
    <DeforestationGrid>
      <DeforestationTitle>Deforestation</DeforestationTitle>
      <DeforestationText>
        {driversOfDeforestationHTML}
      </DeforestationText>
      <DoughnutChart
        align="top"
        data={totalDeforestationData}
        dataSourceConfig={totalDeforestationDataSourceConfig}
        gridColumn="3/4"
        gridRow="2/3"
        justify="center"
        maxWidth={350}
        percentOfTotalColumns={0.33}
      />
      {/* <DeforestationRateTitle marginBottom="10px">Deforestation Rate</DeforestationRateTitle> */}
      <LineChart
        data={deforestationRatesData}
        dataSourceConfig={deforestationRatesDataSourceConfig}
        gridColumn="1/4"
        gridRow="3/5"
        justify="center"
        percentOfTotalColumns={0.66}
      />
      <DeforestationDriversTitle>Drivers of Deforestation</DeforestationDriversTitle>
      <DeforestationTagListContainer>
        <DeforestationDriversList deforestationDrivers={deforestationDrivers} />
      </DeforestationTagListContainer>
    </DeforestationGrid>
  )
};

export default NJDeforestation;
