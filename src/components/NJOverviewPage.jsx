/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import NJContacts from './NJContacts';
import NJDescription from './NJDescription';
import NJForestMonitoringAndMeasurementSystems from './NJForestMonitoringAndMeasurementSystems';
import NJDemographics from './NJDemographics';
import NJEconomics from './NJEconomics';
import Tile from './Tile';

const OverviewGrid = styled.div`
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto 1000px 400px;
  grid-template-areas:
    'description description description description'
    'fmms fmms fmms fmms'
    'demographics demographics economics economics'
    'contacts contacts contacts contacts';

  height: 100%;

  @media (max-width: 765px) {
    grid-template-rows: auto auto 800px 1000px 1000px;
    grid-template-areas:
      'description description description description'
      'fmms fmms fmms fmms'
      'demographics demographics demographics demographics'
      'economics economics economics economics'
      '. contacts contacts .';
  }

  @media (max-width: 460px) {
    grid-template-rows: auto auto 800px 1000px 1000px;
    grid-template-areas:
      'description description description description'
      'fmms fmms fmms fmms'
      'demographics demographics demographics demographics'
      'economics economics economics economics'
      'contacts contacts contacts contacts';
  }
`;

const NJOverviewPage = ({ nationName, jurisdictionName, language }) => (
  <OverviewGrid>
    <Tile gridArea="description">
      <NJDescription jurisdiction={jurisdictionName} language={language} nation={nationName} />
    </Tile>
    <Tile gridArea="fmms">
      <NJForestMonitoringAndMeasurementSystems jurisdiction={jurisdictionName} language={language} nation={nationName} />
    </Tile>
    <Tile gridArea="demographics" height="800px" align="start" >
      <NJDemographics jurisdiction={jurisdictionName} language={language} nation={nationName} />
    </Tile>
    <Tile gridArea="contacts">
      <NJContacts jurisdiction={jurisdictionName} nation={nationName} />
    </Tile>
    <Tile gridArea="economics">
      <NJEconomics jurisdiction={jurisdictionName} language={language} nation={nationName} />
    </Tile>
  </OverviewGrid>
);

export default NJOverviewPage;
