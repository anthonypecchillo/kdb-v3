/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import CombinationStackedColumnAndLineChart from './CombinationStackedColumnAndLineChart';
import Loading from './Loading';

const GET_NATION_DEFORESTATION = gql`
  query getNationDeforestation($name: String!) {
    nationByName(name: $name) {
      id
      name
      deforestationTrend {
        amount
        year
        units
        citation_id
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
      jurisdictions {
        id
        name
        region {
          name
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
  }
`;

const DeforestationGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;

  height: 100%;
  width: 100%;
`;

const DeforestationTitle = styled.h3`
  height: 100%;
  /* padding-top: 20px; */
  margin: 0;
  text-align: center;
  width: 100%;
`;

const NationalDeforestation = ({ jurisdiction, language, nation }) => {
  const { data, loading, error } = useQuery(GET_NATION_DEFORESTATION, {
    variables: { name: nation },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { deforestationTrend, region, jurisdictions } = data.nationByName;
  const { deforestationRates } = region;

  const deforestationRatesData = deforestationRates.map(rate => {
    return {
      label: rate.year.toString(),
      value: rate.amount,
    };
  });

  const testDeforestationRateCategories = [{
    category: deforestationRatesData.map(rate => {
      return { label: rate.label };
    }),
  }];

  const nationalDeforestationRateYears = deforestationRatesData.map(rate => Number(rate.label));

  const testDeforestationRatesData = jurisdictions.map(jurisdiction => {
    let jurisdictionDeforestationRates = jurisdiction.region.deforestationRates.map(rate => {
      if (nationalDeforestationRateYears.includes(rate.year)) {
        return {
          label: rate.year.toString(),
          value: rate.amount,
        };
      } else {
        return null;
      }
    });

    jurisdictionDeforestationRates = jurisdictionDeforestationRates.filter(record => record !== null);

    return {
      seriesname: jurisdiction.name,
      data: jurisdictionDeforestationRates,
    };
  });

  const nationDeforestationRates = [{
    seriesname: 'Brazil (National)',
    data: deforestationRatesData,
  }];

  let allData;
  if (nationDeforestationRates[0].data.length) {
    allData = nationDeforestationRates.concat(testDeforestationRatesData);
    allData[0].renderAs = 'line';
  } else {
    allData = null;
  }

  const testDataSourceConfig = {
    // caption: 'Deforestation Rates',
    maxColWidth: '32',
    numberSuffix: ' km²',
    xAxisName: 'Year',
    yAxisName: 'Deforested Area (km²)',
  };

  return (
    <DeforestationGrid>
      <DeforestationTitle>Deforestation Rate</DeforestationTitle>
      <CombinationStackedColumnAndLineChart
        categories={testDeforestationRateCategories}
        data={allData}
        dataSourceConfig={testDataSourceConfig}
        height="425"
        justify="center"
        percentOfTotalColumns={1}
      />
    </DeforestationGrid>
  )
};

export default NationalDeforestation;
