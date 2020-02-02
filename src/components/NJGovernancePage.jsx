/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Programs from './Programs';
import Safeguards from './Safeguards';
import Tile from './Tile';

const GovernanceGrid = styled.div`
  display: grid;
  grid-gap: 2%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80vh;

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
    </GovernanceGrid>
  );
};

export default NJGovernancePage;
