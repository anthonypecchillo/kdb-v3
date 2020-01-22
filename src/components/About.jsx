/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LottieControl from './LottieControl';
import Tile from './Tile';

// One fragment is (was?) 90.6px!
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  background-color: #e5e5e5;
  height: 1000px;
  padding: 50px 50px;
  padding-top: 125px;
`;

const About = ({ content }) => {
  // const { jumbotron, map, sellingPoints } = content;
  return (
    <AboutGrid>
      <Tile height="600px" width="1000px">
        <LottieControl />
        <center>
          <h1>Under Construction!</h1>
        </center>
      </Tile>
    </AboutGrid>
  );
};

export default About;
