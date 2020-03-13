/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import DeforestationDriversListItem from './DeforestationDriversListItem';

const DeforestationDriversListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(auto-fill, 40px);
  justify-content: space-evenly;

  margin: 0 auto;
`;

const DeforestationDriversList = ({ deforestationDrivers }) => (
  <DeforestationDriversListGrid>
    {deforestationDrivers.map(deforestationDriver => (
      <DeforestationDriversListItem
        deforestationDriver={deforestationDriver}
        key={deforestationDriver.id}
      />
    ))}
  </DeforestationDriversListGrid>
);

export default DeforestationDriversList;
