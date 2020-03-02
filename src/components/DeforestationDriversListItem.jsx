/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const DeforestationDriversListItemGrid = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;

  height: 40px;
  ${'' /* width: 170px; */}
`;

const Icon = styled.i`
  place-self: center;
`;

const ExportListItemText = styled.span`
  align-self: center;
`;

const DeforestationDriversListItem = ({ deforestationDriver }) => {
  console.log(deforestationDriver);
  return (
    <DeforestationDriversListItemGrid>
      <Icon className={deforestationDriver.faIconClass} />
      <ExportListItemText className="menu-text">
        {deforestationDriver.deforestationDriverTranslate.name}
      </ExportListItemText>
    </DeforestationDriversListItemGrid>
  );
};

export default DeforestationDriversListItem;
