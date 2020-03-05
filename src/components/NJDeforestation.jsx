/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React, { useState, useEffect } from 'react';
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
  grid-template-columns: 1fr 1fr 350px;
  grid-template-rows: auto auto 32px auto;

  height: 100%;
  width: 100%;

  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto 32px auto auto;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 32px auto auto;
  }
`;

const DeforestationTitle = styled.h3`
  grid-column: 1/4;
  ${'' /* height: 100%; */}
  /* padding-top: 20px; */
  margin: 0;
  text-align: center;
  width: 100%;

  @media (max-width: 1025px) {
    grid-column: 1/3;
  }

  @media (max-width: 460px) {
    grid-column: 1/2;
  }
`;

const DeforestationText = styled.div`
  grid-column: 1/4;
  grid-row: 2/3;
  ${'' /* overflow: scroll; */}
  padding: 0 0 0 2.5%;
  width: 100%;

  @media (max-width: 1025px) {
    grid-column: 1/3;
    grid-row: 2/3;

    padding: 0 2.5%;
  }

  @media (max-width: 460px) {
    grid-column: 1/2;
    grid-row: 2/3;

    padding: 0 2.5%;
  }
`;

const DeforestationRateTitle = styled.div`
  grid-column: 1/3;
  grid-row: 3/4;

  align-self: end;
  font-weight: 600;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  text-align: center;

  ${'' /* @media (max-width: 1025px) {
    grid-column: 1/3;
    grid-row: 2/3;
  } */}
`;

const DeforestationDriversTitle = styled.div`
  grid-column: 3/4;
  grid-row: 3/4;

  align-self: end;
  font-weight: 600;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  text-align: center;

  @media (max-width: 1025px) {
    grid-column: 2/3;
    grid-row: 3/4;
  }

  @media (max-width: 460px) {
    grid-column: 1/2;
    grid-row: 4/5;
  }
`;

const DeforestationTagListContainer = styled.div`
  grid-column: 3/4;
  grid-row: 4/5;

  align-self: start;
  justify-self: center;

  margin: 10px 0;
  ${'' /* width: 100%; */}

  @media (max-width: 1025px) {
    grid-column: 2/3;
    grid-row: 4/5;

    align-self: center;
  }

  @media (max-width: 460px) {
    grid-column: 1/2;
    grid-row: 5/6;

    align-self: center;
  }
`;

const TotalDeforestationChartContainer = styled.div`
  ${'' /* grid-column: 1/4;
  grid-row: 2/3; */}
  float: right;
  width: 312px;

  @media (max-width: 1025px) {
    grid-column: 1/2;
    grid-row: 3/5;

    justify-self: center;
    float: none;
  }

  @media (max-width: 460px) {
    grid-column: 1/2;
    grid-row: 3/4;

    float: none;
  }
`;

const DeforestaionRatesChartContainer = styled.div`
  grid-column: 1/3;
  grid-row: 3/5;

  @media (max-width: 1025px) {
    grid-column: 1/3;
    grid-row: 5/6;
  }

  @media (max-width: 460px) {
    grid-column: 1/2;
    grid-row: 6/7;
  }
`;

// Hook for keeping track of window size
// Source: https://usehooks.com/useWindowSize/
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

// TODO: Use primary key from DB as uniqueID for props
const NJDeforestation = ({ jurisdictionName, language, nationName }) => {
  const windowSize = useWindowSize();
  const { data, loading, error } = useQuery(GET_JURISDICTION_DEFORESTATION, {
    variables: { nationName: nationName, jurisdictionName: jurisdictionName, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;


  let totalDeforestationColumn = '1/4';
  let totalDeforestationRow = '2/3';
  let totalDeforestationPercentOfTotalColumns = '0.33';

  let deforestationRatesColumn = '1/3';
  let deforestationRatesRow = '3/5';
  let deforestationRatesPercentOfTotalColumns = '0.66';

  if (windowSize.width > 460 && windowSize.width <= 1025) {
    totalDeforestationColumn = '1/2';
    totalDeforestationRow = '3/5';
    totalDeforestationPercentOfTotalColumns = '0.5';
    deforestationRatesColumn = '1/3';
    deforestationRatesRow = '5/6';
    deforestationRatesPercentOfTotalColumns = '1';
  }
  if (windowSize.width <= 460) {
    totalDeforestationColumn = '1/2';
    totalDeforestationRow = '3/4';
    totalDeforestationPercentOfTotalColumns = '1';
    deforestationRatesColumn = '1/2';
    deforestationRatesRow = '6/7';
    deforestationRatesPercentOfTotalColumns = '1';
  }

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

  const totalPopulationChartWideViewport = windowSize.width > 1025 ? (
    <TotalDeforestationChartContainer>
      <DoughnutChart
        align="center"
        data={totalDeforestationData}
        dataSourceConfig={totalDeforestationDataSourceConfig}
        width={312}
        percentOfTotalColumns={totalDeforestationPercentOfTotalColumns}
      />
    </TotalDeforestationChartContainer>
  ) : null;

  const totalPopulationChartNarrowViewport = windowSize.width <= 1025 ? (
    <TotalDeforestationChartContainer>
      <DoughnutChart
        align="center"
        data={totalDeforestationData}
        dataSourceConfig={totalDeforestationDataSourceConfig}
        // justify="right"
        width={312}
        percentOfTotalColumns={totalDeforestationPercentOfTotalColumns}
      />
    </TotalDeforestationChartContainer>
  ) : null;

  return (
    <DeforestationGrid>
      <DeforestationTitle>Deforestation</DeforestationTitle>
      <DeforestationText>
        {totalPopulationChartWideViewport}
        {driversOfDeforestationHTML}
      </DeforestationText>
      {/* <DeforestationRateTitle marginBottom="10px">Deforestation Rate</DeforestationRateTitle> */}
      {totalPopulationChartNarrowViewport}
      <DeforestaionRatesChartContainer>
        <LineChart
          data={deforestationRatesData}
          dataSourceConfig={deforestationRatesDataSourceConfig}
          justify="center"
          percentOfTotalColumns={deforestationRatesPercentOfTotalColumns}
        />
      </DeforestaionRatesChartContainer>

      <DeforestationDriversTitle>Drivers of Deforestation</DeforestationDriversTitle>
      <DeforestationTagListContainer>
        <DeforestationDriversList deforestationDrivers={deforestationDrivers} />
      </DeforestationTagListContainer>
    </DeforestationGrid>
  )
};

export default NJDeforestation;
