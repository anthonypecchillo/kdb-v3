/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import NationalDemographics from './NationalDemographics';
import NationalEconomics from './NationalEconomics';

import NJContacts from './NJContacts';
import NJDescription from './NJDescription';
import NJForestMonitoringAndMeasurementSystems from './NJForestMonitoringAndMeasurementSystems';
// import NJDemographics from './NJDemographics';
// import NJEconomics from './NJEconomics';
import Tile from './Tile';

const OverviewGrid = styled.div`
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 800px 800px 1000px 400px 550px;
  grid-template-areas:
    'description description description description'
    'fmms fmms demographics demographics'
    'economics economics . .'
    'contacts contacts contacts contacts'
    '. . . .';

  height: 100%;

  @media (max-width: 765px) {
    grid-template-areas:
      'description description description description'
      'fmms fmms fmms fmms'
      'contacts contacts demographics demographics'
      'economics economics . .'
      'economics economics . .';
  }

  @media (max-width: 460px) {
    grid-template-areas:
      'description description description description'
      'fmms fmms fmms fmms'
      'demographics demographics demographics demographics'
      'contacts contacts contacts contacts'
      'economics economics economics economics';
    grid-template-rows: 800px 800px 800px 1000px 1000px;
  }
`;

const NationalOverviewPage = ({ nationName, jurisdictionName, language }) => (
  <OverviewGrid>
    <Tile gridArea="description">
      <NJDescription jurisdiction={jurisdictionName} language={language} />
    </Tile>
    <Tile gridArea="fmms">
      <NJForestMonitoringAndMeasurementSystems jurisdiction={jurisdictionName} language={language} />
    </Tile>
    <Tile gridArea="demographics">
      <NationalDemographics jurisdiction={jurisdictionName} language={language} nation={nationName} />
    </Tile>
    <Tile gridArea="contacts">
      <NJContacts jurisdiction={jurisdictionName} />
    </Tile>
    <Tile gridArea="economics">
      <NationalEconomics jurisdiction={jurisdictionName} language={language} nation={nationName} />
    </Tile>
  </OverviewGrid>
);

export default NationalOverviewPage;
