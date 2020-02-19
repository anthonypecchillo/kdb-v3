/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LottieControl from './LottieControl';
import Tile from './Tile';

const ReportCardsGrid = styled.div`
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 1fr;
  grid-template-rows: 600px;

  height: 100%;
  width: 100%;
`;

const NJReportCardsPage = () => (
  <ReportCardsGrid>
    <Tile height="600px" maxWidth="1000px">
      <LottieControl />
      <center>
        <h1>Under Construction!</h1>
      </center>
    </Tile>
  </ReportCardsGrid>
);

export default NJReportCardsPage;
