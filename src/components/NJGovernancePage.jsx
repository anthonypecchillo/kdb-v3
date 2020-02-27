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
  grid-template-rows: 80vh 80vh;

  height: 100%;
  width: 100%;
`;

const NJGovernancePage = ({ jurisdictionName, jurisdictionType, language, nationName }) => {
  return (
    <GovernanceGrid>
      <Tile>
        <Programs jurisdictionName={jurisdictionName} jurisdictionType={jurisdictionType} language={language} nationName={nationName} />
      </Tile>
      <Tile>
        <Safeguards jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
      </Tile>
      <Tile gridColumn="1/3" gridRow="2/3">
        <OldGovernanceData jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
      </Tile>
    </GovernanceGrid>
  );
};

export default NJGovernancePage;
