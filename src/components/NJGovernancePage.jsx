/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import OldGovernanceData from './OldGovernanceData';
import Programs from './Programs';
import Safeguards from './Safeguards';
import Tile from './Tile';

const GovernanceGrid = styled.div`
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 25px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'programs safeguards'
    'old-governance-data old-governance-data';

  height: 100%;
  width: 100%;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'programs'
      'safeguards'
      'old-governance-data';

    margin: 0 auto;
    ${'' /* width: 90%; */}
  }

  @media (max-width: 1025px) {
    margin: 0;
    width: 100%;
  }

  ${'' /* @media (max-width: 460px) {
    grid-template-rows: auto auto 800px 1000px 1000px;
    grid-template-areas:
      'description description description description'
      'fmms fmms fmms fmms'
      'demographics demographics demographics demographics'
      'economics economics economics economics'
      'contacts contacts contacts contacts';
  } */}
`;

const NJGovernancePage = ({ jurisdictionName, jurisdictionType, language, nationName }) => {
  return (
    <GovernanceGrid>
      <Tile align="start" gridArea="programs" height="auto">
        <Programs jurisdictionName={jurisdictionName} jurisdictionType={jurisdictionType} language={language} nationName={nationName} />
      </Tile>
      <Tile align="start" gridArea="safeguards" height="auto">
        <Safeguards jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
      </Tile>
      <Tile align="start" gridArea="old-governance-data" height="auto">
        <OldGovernanceData jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
      </Tile>
    </GovernanceGrid>
  );
};

export default NJGovernancePage;
