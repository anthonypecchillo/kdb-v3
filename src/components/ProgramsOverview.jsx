/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LottieControl from './LottieControl';

// const content = (
//   <div>
//
//   </div>
// );

const ProgramsOverviewStyled = styled.div`
  border-top: 3px solid #3e522d;
  height: calc(100% - 2.5% - 40px);
  margin-top: 10px;
  overflow-y: scroll;
  padding: 15px;
  width: 100%;
`;

const ProgramsOverview = () => (
  <ProgramsOverviewStyled>
    <LottieControl />
    <center>
      <h1>Under Construction!</h1>
    </center>
  </ProgramsOverviewStyled>
);

export default ProgramsOverview;
