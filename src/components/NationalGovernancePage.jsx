/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Programs from './Programs';
// import NationalPrograms from './NationalPrograms';
import Tile from './Tile';

const GovernanceGrid = styled.div`
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 25px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  ${'' /* height: 100%; */}
  width: 100%;
`;

const NationalGovernancePage = ({ nationName, jurisdictionName, jurisdictionType, language }) => (
  <GovernanceGrid>
    <Tile margin="0 auto" maxWidth="1280px">
      <Programs jurisdictionName={jurisdictionName} jurisdictionType={jurisdictionType} language={language} nationName={nationName} />
    </Tile>
  </GovernanceGrid>
);

export default NationalGovernancePage;
