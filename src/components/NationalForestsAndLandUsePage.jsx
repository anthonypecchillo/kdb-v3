/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LottieControl from './LottieControl';
import NationalApproachesToDeforestationMonitoringAndAccounting from './NationalApproachesToDeforestationMonitoringAndAccounting';
import NationalApproachesToDeforestationAndForestDegradation from './NationalApproachesToDeforestationAndForestDegradation';
import NationalCommitments from './NationalCommitments';
import NationalGlobalPerspective from './NationalGlobalPerspective';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import Tile from './Tile';

const TEMPConstructionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  background-color: #e5e5e5;
  height: 800px;
  padding: 50px 50px;
  padding-top: 125px;
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 400px 400px;
  grid-template-areas:
    'nadma nadma nadfd nadfd'
    'commitments commitments globalperspective globalperspective';

  height: 100%;

  @media (max-width: 765px) {
    grid-template-areas:
      'nadma nadma nadfd nadfd'
      'commitments commitments globalperspective globalperspective';
  }

  @media (max-width: 460px) {
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      'nadma nadma nadma nadma'
      'nadfd nadfd nadfd nadfd'
      'commitments commitments commitments commitments'
      'globalperspective globalperspective globalperspective globalperspective';
  }
`;

const NationalForestsAndLandUsePage = ({ nationName, jurisdictionName, language }) => (
  <TEMPConstructionGrid>
    <Tile height="600px" maxWidth="1000px">
      <LottieControl />
      <center>
        <h1>Under Construction!</h1>
      </center>
    </Tile>
  </TEMPConstructionGrid>
);

export default NationalForestsAndLandUsePage;

{/* <OverviewGrid>
  <Tile gridArea="nadma">
    <NationalApproachesToDeforestationMonitoringAndAccounting jurisdictionName={jurisdictionName} language={language} />
  </Tile>
  <Tile gridArea="nadfd">
    <NationalApproachesToDeforestationAndForestDegradation jurisdictionName={jurisdictionName} language={language} />
  </Tile>
  <Tile gridArea="commitments">
    <NationalCommitments jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
  </Tile>
  <Tile gridArea="globalperspective">
    <NationalGlobalPerspective jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
  </Tile>
</OverviewGrid> */}
