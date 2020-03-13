/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const ExportsListItemGrid = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;

  height: 40px;
`;

const Icon = styled.i`
  place-self: center;
`;

const ExportListItemText = styled.span`
  align-self: center;
`;

const ExportsListItem = ({ majorExport }) => {
  return (
    <ExportsListItemGrid>
      <Icon className={majorExport.faIconClass} />
      <ExportListItemText className="menu-text">
        {majorExport.majorExportTranslate.name}
      </ExportListItemText>
    </ExportsListItemGrid>
  );
};

export default ExportsListItem;
