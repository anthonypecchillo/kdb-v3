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
  grid-gap: 2%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80vh 80vh;

  height: 100%;
  width: 100%;
`;

const NJGovernancePage = ({ jurisdictionName, language, nationName }) => {
  return (
    <GovernanceGrid>
      <Tile>
        <Programs jurisdiction={jurisdictionName} language={language} nation={nationName} />
      </Tile>
      <Tile>
        <Safeguards jurisdiction={jurisdictionName} language={language} nation={nationName} />
      </Tile>
      <Tile gridColumn="1/3" gridRow="2/3">
        <OldGovernanceData jurisdiction={jurisdictionName} language={language} nation={nationName} />
      </Tile>
    </GovernanceGrid>
  );
};

export default NJGovernancePage;
