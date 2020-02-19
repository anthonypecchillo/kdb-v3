/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

import Loading from './Loading';

const GET_JURISDICTION_FMMS = gql`
  query getJurisdictionFMMS($nationName: String!, $jurisdictionName: String!, $languageCode: String!) {
    jurisdictionByName(nationName: $nationName, jurisdictionName: $jurisdictionName) {
      id
      name
      contentJurisdictional {
        id
        contentJurisdictionalTranslate(code: $languageCode) {
          id
          languageCode
          description
          driversOfDeforestation
          forestMonitoringMeasurementSystems
        }
      }
    }
  }
`;


const ForestMonitoringAndMeasurementSystemsGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-rows: auto 1fr;

  height: 100%;
  width: 100%;
`;

const NJForestMonitoringAndMeasurementSystemsTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const ForestMonitoringAndMeasurementSystemsContent = styled.div`
  height: 100%;
  width: 100%;
  ${'' /* overflow: scroll; */}
`;

const NJForestMonitoringAndMeasurementSystems = ({ jurisdiction, language, nation }) => {
  const { data, loading, error } = useQuery(GET_JURISDICTION_FMMS, {
    variables: { nationName: nation, jurisdictionName: jurisdiction, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { forestMonitoringMeasurementSystems } = data.jurisdictionByName.contentJurisdictional.contentJurisdictionalTranslate;
  const forestMonitoringMeasurementSystemsHTML = ReactHtmlParser(forestMonitoringMeasurementSystems);

  return (
    <ForestMonitoringAndMeasurementSystemsGrid>
      <NJForestMonitoringAndMeasurementSystemsTitle>Forest Monitoring and Measurement Systems</NJForestMonitoringAndMeasurementSystemsTitle>
      <ForestMonitoringAndMeasurementSystemsContent>
        {forestMonitoringMeasurementSystemsHTML}
      </ForestMonitoringAndMeasurementSystemsContent>

    </ForestMonitoringAndMeasurementSystemsGrid>
  );
};

export default NJForestMonitoringAndMeasurementSystems;
