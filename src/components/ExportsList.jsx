/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import ExportsListItem from './ExportsListItem';

const ExportsListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(auto-fill, 40px);
  ${'' /* grid-gap: 10px; */}
  justify-content: space-evenly;

  height: 100%;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 460px) {
    grid-template-columns: repeat(2, auto);
  }
`;

const ExportsList = ({ majorExports }) => (
  <ExportsListGrid>
    {majorExports.map(majorExport => (
      <ExportsListItem majorExport={majorExport} />
    ))}
  </ExportsListGrid>
);

export default ExportsList;
