/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import NJLand from './NJLand';
import NJVegetation2 from './NJVegetation2';
import NJCO2Emissions from './NJCO2Emissions';
import NJDeforestation from './NJDeforestation';
import Tile from './Tile';

const ForestAndLandUseGrid = styled.div`
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 800px 800px 800px 800px;
  grid-template-areas:
    'land land land .'
    'deforestation deforestation deforestation deforestation'
    'CO2 CO2 CO2 .'
    'vegetation vegetation . .';

  height: 100%;

  @media (max-width: 765px) {
    grid-template-areas:
      'land land land land'
      'deforestation deforestation deforestation deforestation'
      'CO2 CO2 CO2 CO2'
      'vegetation vegetation vegetation vegetation';
  }

  @media (max-width: 460px) {
    grid-template-areas:
      'land land land land'
      'deforestation deforestation deforestation deforestation'
      'CO2 CO2 CO2 CO2'
      'vegetation vegetation vegetation vegetation';
  }
`;

const NJForestAndLandUsePage = ({ nationName, jurisdictionName, language }) => (
  <ForestAndLandUseGrid>
    {/* <Tile gridColumn="1/4" gridRow="1/2"> */}
    <Tile gridArea="land">
      <NJLand jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
    </Tile>
    {/* <Tile gridColumn="1/5" gridRow="2/3"> */}
    <Tile gridArea="deforestation">
      <NJDeforestation jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
    </Tile>
    {/* <Tile gridColumn="1/4" gridRow="3/4"> */}
    <Tile gridArea="CO2">
      <NJCO2Emissions jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
    </Tile>
    {/* <Tile gridColumn="1/3" gridRow="4/5"> */}
    <Tile gridArea="vegetation">
    <NJVegetation2 jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
  </Tile>
  </ForestAndLandUseGrid>
);

export default NJForestAndLandUsePage;
